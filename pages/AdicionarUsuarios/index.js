import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

export default function AdicionarUsuarios() {

    const [nome, setNome] = useState('')
    const [avatar, setAvatar] = useState();

    const cadastar = () => {
        alert(nome)
    }

    const obterPermissao = async () => {
        const { permissao } = await ImagePicker.requestMediaLibraryPermissionsAsync();


        if (!permissao) {
            alert('Você precisa de permissão para abrir a galeria');
        }
    };

    useEffect(() => {
        obterPermissao()
    }, []);

    function ImagePickerCallback(data){
        setAvatar(data)
    }


    return (
        <View>
            <StatusBar hidden />
            <View style={styles.card_AdicionarUsuarios}>

                <View style={styles.container_TextoCard}>
                    <Text style={styles.TextoCard}>Adicionar Usuario</Text>
                </View>

                <View style={styles.container_ImageCard}>
                    <TouchableOpacity style={styles.container_foto} onPress={() => ImagePicker.launchImageLibraryAsync({},ImagePickerCallback)}>
                        <Image style={styles.ImgCamera} source={{uri: avatar ? avatar.uri : 'https://th.bing.com/th/id/R.47e35311da898ec37308861c840fa731?rik=pfXktQS3J3wMNQ&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_399333.png&ehk=xoU0QSlm7bdYJJim%2bl%2blHidki96dzCcQ22lplwoC4oY%3d&risl=&pid=ImgRaw&r=0'}} />
                        <Text style={styles.TextoFoto}>Adicionar Foto</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.container_TextoInput}>
                    <TextInput style={styles.TextoInput} placeholder="Nome" placeholderTextColor='#000' onChangeText={text => setNome(text)} />
                    <TouchableOpacity style={styles.Botao} onPress={() => cadastar()}>
                        <Text style={styles.TextoBotao}>Adicionar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card_AdicionarUsuarios: {
        width: 340,
        height: 340,
        borderRadius: 10,
        backgroundColor: '#340C0C',
        display: "flex",
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 10,
    },


    TextoInput: {
        width: '100%',
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 10,
        borderBottomColor: '#000',
        borderWidth: 2,
        padding: 10,
        bottom: 10,
    },

    container_TextoCard: {
        bottom: 70,
    },

    TextoCard: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 32,
    },

    container_ImageCard: {
        bottom: 40,
        backgroundColor: '#D9D9D9',
        width: 125,
        height: 125,
        borderRadius: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    container_TextoInput: {
        width: '100%',
    },

    Botao: {
        backgroundColor: '#DF1D1D',
        borderRadius: 10,
        height: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    TextoBotao: {
        fontWeight: '700',
        fontSize: 16,
        color: 'white'
    },

    container_foto: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    ImgCamera: {
        width: 50,
        height: 50,
    },

    TextoFoto: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '700'
    }

})