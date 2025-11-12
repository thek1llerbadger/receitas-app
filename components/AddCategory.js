import { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Picker, TextInput } from "react-native";
import { createCategory } from "../services/Category.service";

export default function AddCategory({ categoryToEdit }) {
    const [nome, setNome] = useState('')
    const [editingID, setEditingID] = useState('')

    useEffect(() => {
        console.log(categoryToEdit);
        if (categoryToEdit){
            setNome(categoryToEdit.nome)
            setEditingID(categoryToEdit.id)
        } else {
            clearForm()
        }
    }, [])

    async function save() {
        const obj = {
            nome
        }

        try {
            clearForm()

            if (editingID){
                const response = await updateCategory(editingID, obj)
            } else {
                const response = await createCategory(obj)
            }
        } catch {
            
        }
        
    }

    function clearForm() {
        setNome('')
        setEditingID('')
    }

    return (
        <View style={style.container}>
            <Text style={style.title}>
                Adicionar nova categoria
            </Text>
            <TextInput
                value={nome}
                onChangeText={setNome}
                placeholder="Digite o nome.."
            />
            <TouchableOpacity 
                style={style.button}
                onPress={save}>
                <Text style={style.textButton}>
                    Salvar
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#FF0000',
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#000',
        color: '#FFF',
        padding: 15,
        borderRadius: 10
    },
    textButton: {
        color: '#fff',
        fontWeight: 'bold'
    }
})