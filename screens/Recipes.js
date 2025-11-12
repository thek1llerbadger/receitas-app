import { useState, useEffect } from "react";
import { TouchableOpacity, View, Text, FlatList, ScrollView } from "react-native";
import { StyleSheet } from "react-native";

import AddRecipes from '../components/AddRecipe'
import { getRecipes } from "../services/Recipes.service";

export default function Recipes({navigation}) {
    const [view, setView] = useState('list')
    const [recipes, setRecipes] = useState([])
    const [selectedRecipe, setSelectedRecipe] = useState()

    const loadRecipes = async () => {
        const data = await getRecipes()
        setRecipes(data);
    }

    useEffect(() => {
        loadRecipes()
    }, [])

    const renderItem = ( { item } ) => {
        console.log(item)
        return (
            <View style={style.card}>
                <Text style={style.textButton}>
                    Titulo
                </Text>
                <Text style={style.cardItem}>
                    {item.nome}
                </Text>
                <Text style={style.textButton}>
                    Ingredientes
                </Text>
                <Text style={style.cardItem}>
                    {item.ingredientes}
                </Text>
                <Text style={style.textButton}>
                    Modo de Preparo
                </Text>
                <Text style={style.cardItem}>
                    {item.modo_preparo}
                </Text>

                <TouchableOpacity style={style.button} onPress={() => {
                    setView('form')
                    setSelectedRecipe(item)
                }}>
                    <Text style={style.textButton}>Editar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.button} onPress={() => navigation.goBack()}>
                    <Text style={style.textButton}>Deletar</Text>
                </TouchableOpacity>

            </View>
        )

    }

    return (
        <ScrollView>
            <Text style={style.title}>
                Receitas
            </Text>

            {(view === 'list') ? (
                <View>
                    <TouchableOpacity style={style.button} onPress={() => setView('form')}>
                        <Text style={style.textButton}>Adicionar Receita</Text>
                    </TouchableOpacity>

                    <FlatList
                        data={recipes}
                        keyExtractor={item => item.id.toString()}
                        renderItem={renderItem}
                    />

                </View>
            ) : (
                <View>
                    <TouchableOpacity style={style.button} onPress={() => {
                        setView('list')
                        setSelectedRecipe(null)
                        loadRecipes()
                    }}>
                        <Text style={style.textButton}>VER Receitas</Text>
                    </TouchableOpacity>
                    <AddRecipes recipeToEdit={selectedRecipe}></AddRecipes>
                </View>
            )}
        </ScrollView>
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
    },
    card: {
        backgroundColor: '#1a2b4a',
        padding: 30,
        borderRadius: 10,
        marginBottom: 20
    },
    cardItem: {
        color: '#fff',
        marginBottom: 10
    }
})