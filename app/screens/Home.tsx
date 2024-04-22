import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';
import { Product } from './model/Product';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

type RootStackParamList = {
    Home: undefined;
    Login: undefined;
};
type HomeScreenProps = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenRoute = RouteProp<RootStackParamList, 'Home'>;

type HomeProps = {
    navigation: HomeScreenProps;
    route: HomeScreenProps;
};
function Home ({navigation}:HomeProps): React.JSX.Element {
    const [products, setProducts] = useState<Product[]>([]);
    const productItem = ({item}: {item: Product}) => (
        <TouchableOpacity style={styles.productItem}>
            <Text style={styles.itemTitle}>{item.nombre}</Text>
            <Text style={styles.itemDetail}>Precio: ${item.precio.toFixed(2)} </Text>
        </TouchableOpacity>
    );

    useEffect(() => {
        setProducts([
            {id: 1, nombre: 'Martillo', precio: 80, minStock: 5, maxStock: 20},
            {id: 2, nombre: 'Manguera (metro)', precio: 15, minStock: 50, maxStock: 1000},
        ]);
    }, []);

    return (
        <SafeAreaView>
            <FlatList
                data={products}
                renderItem={productItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    productItem:{
        padding:12,
        borderBottomColor:'#c0c0c0',
        borderBottomWidth:1,
        backgroundColor:'withe',
    },
    itemTitle:{
        fontSize:24,
        fontWeight:'bold',
        color:'black',
        textTransform:'uppercase',

    },
    itemDetail:{
        fontSize:14,
        opacity:0.7,
    },
});

export default Home;
