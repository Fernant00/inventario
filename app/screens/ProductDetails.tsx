import React, { useEffect, useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native";
import { Product } from "./model/Product";
import { NavigationProp, RouteProp, useNavigation } from "@react-navigation/native";
import {RootStackParamList} from '../../App';
import { StackNavigationProp } from "@react-navigation/stack";

import LocalDB from "./persistance/localdb";
export type Params = {
    product:Product;
}

export type Props= {
    route: RouteProp<RootStackParamList, 'ProductDetails'>;
    navigation:StackNavigationProp<RootStackParamList, 'ProductDetails'>;
};

function ProductDetails({route}: Props): React.JSX.Element {
    
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [product,setProduct] = useState<Product>();
    const [minStock, setminStock] = useState<String>('0');
    const [maxStock, setmaxStock] = useState<String>('0');
    const [currentStock, setStock] = useState('0');
    const [masStock, setmasStock] = useState('0');
    
    const btnGuardarOnPress = async()=>{
        const db = await LocalDB.connect();
        db.transaction(tx =>{
            tx.executeSql(
                'INSERT INTO productos (currentStock) VALUES (?)',
                [currentStock ],
                
            );
            console.log(currentStock);
            navigation.goBack();
        });
    };

    useEffect(() => {
        
        setProduct(route.params.product);
    }, [route]);

    return(
        <SafeAreaView>
            {product && (
                <View style={styles.main}>
                    <Text style={styles.title}>Producto</Text>
                    <Text style={styles.itemMain}>{product.nombre}</Text>
                    <Text style={styles.itemBadge}>Cantidad</Text>
                    <Text style={styles.itemBadge}>{product.currentStock} / {product.maxStock}</Text>
                    <Text style={styles.itemBadge}>Precio</Text>
                    <Text style={styles.itemBadge}>{product.precio}</Text>
                </View>
            )}
                <TextInput placeholder='stock' onChangeText={s => setStock(s)}/>
                
            
                <Button title='Guardar'  onPress={btnGuardarOnPress}/>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    main:
    {
     display:'flex',
    },
    title:
    {
        alignSelf:'center',
        color:'black',
        fontSize:36,
        fontWeight:'bold',
        marginBottom:24,
    },
    itemMain: {
        fontSize: 28,
        color:'black',

    },
    productdetail:{
        fontSize:24,
        color:'black',
        textAlign: 'center',
        
        fontWeight:'bold',
    },
    productprecio:{
        fontSize:24,
        color:'red',
        textAlign: 'center',
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
export default ProductDetails;