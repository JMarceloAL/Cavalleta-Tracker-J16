import React, { useState } from 'react';

import {
    View,
    Text,
    Modal,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native';

interface Props {

    visible: boolean;

    onClose(): void;

    onAdd(name: string, phone: string): void;

}

export default function AddTrackerModal({

    visible,

    onClose,

    onAdd,

}: Props) {

    // Nome do rastreador.
    const [name, setName] = useState('');

    // Número do chip.
    const [phone, setPhone] = useState('');

    /*
        Adiciona um novo rastreador.
    */
    function handleAdd() {

        if (

            name.trim() === '' ||

            phone.trim() === ''

        ) {

            Alert.alert(

                'Aviso',

                'Preencha todos os campos.'

            );

            return;

        }

        onAdd(

            name,

            phone

        );

        // Limpa os campos.
        setName('');

        setPhone('');

        // Fecha o Modal.
        onClose();

    }

    /*
        Fecha o Modal e limpa os campos.
    */
    function handleClose() {

        setName('');

        setPhone('');

        onClose();

    }

    return (

        <Modal

            visible={visible}

            transparent

            animationType="slide"

        >

            <View
                style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >

                <View
                    style={{
                        width: '90%',
                        backgroundColor: '#FFF',
                        borderRadius: 10,
                        padding: 20,
                    }}
                >

                    <Text
                        style={{
                            fontSize: 22,
                            fontWeight: 'bold',
                            marginBottom: 20,
                        }}
                    >

                        Novo Rastreador

                    </Text>

                    <TextInput

                        placeholder="Nome"

                        value={name}

                        onChangeText={setName}

                        style={{
                            borderWidth: 1,
                            borderColor: '#DDD',
                            borderRadius: 8,
                            paddingHorizontal: 12,
                            height: 45,
                            marginBottom: 15,
                        }}

                    />

                    <TextInput

                        placeholder="Número do Chip"

                        keyboardType="phone-pad"

                        value={phone}

                        onChangeText={setPhone}

                        style={{
                            borderWidth: 1,
                            borderColor: '#DDD',
                            borderRadius: 8,
                            paddingHorizontal: 12,
                            height: 45,
                            marginBottom: 20,
                        }}

                    />

                    <TouchableOpacity

                        style={{
                            backgroundColor: '#1976D2',
                            height: 45,
                            borderRadius: 8,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}

                        onPress={handleAdd}

                    >

                        <Text
                            style={{
                                color: '#FFF',
                                fontWeight: 'bold',
                            }}
                        >

                            Adicionar

                        </Text>

                    </TouchableOpacity>

                    <TouchableOpacity

                        style={{
                            marginTop: 12,
                            alignItems: 'center',
                        }}

                        onPress={handleClose}

                    >

                        <Text
                            style={{
                                color: '#D32F2F',
                                fontWeight: 'bold',
                            }}
                        >

                            Cancelar

                        </Text>

                    </TouchableOpacity>

                </View>

            </View>

        </Modal>

    );

}