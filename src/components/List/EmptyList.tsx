import React from 'react';

import {
    View,
    Text,
} from 'react-native';

export default function EmptyList() {

    return (

        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 80,
            }}
        >

            <Text
                style={{
                    fontSize: 18,
                    color: '#757575',
                }}
            >

                Nenhum rastreador cadastrado.

            </Text>

            <Text
                style={{
                    marginTop: 10,
                    color: '#999',
                    textAlign: 'center',
                }}
            >

                Toque em "Adicionar Rastreador"

            </Text>

            <Text
                style={{
                    color: '#999',
                    textAlign: 'center',
                }}
            >

                para começar.

            </Text>

        </View>

    );

}