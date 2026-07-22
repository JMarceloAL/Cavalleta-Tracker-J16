import React, { useEffect, useState } from 'react';

import {
    Alert,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import TrackerCard from '../../components/Card/TrackerCard';
import AddTrackerModal from '../../components/Modal/AddTrackerModal';
import EmptyList from '../../components/List/EmptyList';

import { logout } from '../../services/storage/authStorage';
import { styles } from './styles';

interface Tracker {
    id: string;
    name: string;
    phone: string;
}

interface Props {
    navigation: any;
}

const STORAGE_KEY = '@cavalleta:trackers';

export default function Home({ navigation }: Props) {
    const [trackers, setTrackers] = useState<Tracker[]>([]);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        loadTrackers();
    }, []);

    async function loadTrackers() {
        try {
            const stored = await AsyncStorage.getItem(STORAGE_KEY);

            if (stored) {
                setTrackers(JSON.parse(stored));
            }
        } catch (error) {
            console.warn('Erro ao carregar rastreadores', error);
        }
    }

    async function saveTrackers(nextTrackers: Tracker[]) {
        try {
            setTrackers(nextTrackers);
            await AsyncStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(nextTrackers)
            );
        } catch (error) {
            console.warn('Erro ao salvar rastreadores', error);
        }
    }

    async function handleAddTracker(name: string, phone: string) {
        const newTracker: Tracker = {
            id: String(Date.now()),
            name,
            phone,
        };

        await saveTrackers([newTracker, ...trackers]);
    }

    async function handleDeleteTracker(id: string) {
        Alert.alert(
            'Remover rastreador',
            'Deseja remover este rastreador?',
            [
                { text: 'Cancelar', style: 'cancel' },
                {
                    text: 'Sim',
                    onPress: async () => {
                        const nextTrackers = trackers.filter(
                            tracker => tracker.id !== id
                        );
                        await saveTrackers(nextTrackers);
                    },
                },
            ]
        );
    }

    function handleLocateTracker(id: string) {
        const tracker = trackers.find(item => item.id === id);

        if (!tracker) {
            return;
        }

        Alert.alert(
            'Localizar rastreador',
            `Ainda não há localização ativa para ${tracker.name}.`
        );
    }

    async function handleLogout() {
        await logout();

        const parent = navigation.getParent?.();
        const root = parent?.getParent?.() ?? parent;

        if (root?.replace) {
            root.replace('Login');
            return;
        }

        navigation.replace('Login');
    }

    return (
        <View style={styles.container}>
            <View style={localStyles.header}>
                <Text style={styles.title}>Home do Cavalleta Connect</Text>

                <TouchableOpacity
                    style={localStyles.logoutButton}
                    onPress={handleLogout}
                >
                    <Text style={localStyles.logoutText}>Sair</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={localStyles.addButton}
                onPress={() => setModalVisible(true)}
            >
                <Text style={localStyles.addButtonText}>Adicionar Rastreador</Text>
            </TouchableOpacity>

            <FlatList
                data={trackers}
                keyExtractor={item => item.id}
                contentContainerStyle={
                    trackers.length === 0 && localStyles.emptyListContainer
                }
                ListEmptyComponent={<EmptyList />}
                renderItem={({ item }) => (
                    <TrackerCard
                        tracker={item}
                        onDelete={handleDeleteTracker}
                        onLocate={handleLocateTracker}
                    />
                )}
            />

            <AddTrackerModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onAdd={handleAddTracker}
            />
        </View>
    );
}

const localStyles = StyleSheet.create({
    header: {
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 18,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logoutButton: {
        backgroundColor: '#D32F2F',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 16,
    },
    logoutText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    addButton: {
        marginHorizontal: 20,
        marginBottom: 16,
        borderRadius: 8,
        backgroundColor: '#1976D2',
        paddingVertical: 14,
        alignItems: 'center',
    },
    addButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
    },
    emptyListContainer: {
        flex: 1,
        justifyContent: 'center',
    },
});