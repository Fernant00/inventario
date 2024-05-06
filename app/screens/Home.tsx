import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Product } from './model/Product';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import {RootStackParamList} from '../../App';

type HomeScreenProps = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenRoute = RouteProp<RootStackParamList, 'Home'>;

type HomeProps = {
    navigation: HomeScreenProps;
    route: HomeScreenRoute;
};
function Home ({navigation}:HomeProps): React.JSX.Element {
    const [products, setProducts] = useState<Product[]>([]);
    const productItem = ({item}: {item: Product}) => (
        <TouchableOpacity style={styles.productItem} onPress={()=> navigation.push("ProducDetails",{product: item})}>

            <View style={{flexDirection:'row'}}>
                <View style={{flexDirection:'column' , flexGrow:9}}>
                    <Text style={styles.itemTitle}>{item.nombre}</Text>
                    <Text style={styles.itemDetail}>Precio: ${item.precio.toFixed(2)} </Text>
                </View>
                <Text style={[styles.itemBadge,item.currentStock < item.minStock ? styles.itemBadgeError : null, ]}>
                    {item.currentStock}
                </Text>
            </View>
            
        </TouchableOpacity>
    );

    useEffect(() => {
        setProducts([
            {id: 1, nombre: 'Martillo', precio: 80, minStock: 5,currentStock:0, maxStock: 20},
            {id: 2, nombre: 'Manguera (metro)', precio: 15, minStock: 50,currentStock:100, maxStock: 1000},
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
        color:'black',

    },
    itemDetail:{
        fontSize:14,
        opacity:0.7,
    },
    itemBadge:{
        fontSize:24,
        color:'blue',
        fontWeight:'bold',
        alignSelf:'center',
    },
    itemBadgeError:{
        color:'red',
        
    },
});

export default Home;
