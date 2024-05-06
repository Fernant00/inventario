import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Product } from "./model/Product";
import { RouteProp } from "@react-navigation/native";
import {RootStackParamList} from '../../App';
import { StackNavigationProp } from "@react-navigation/stack";
export type Params ={
    product: Product;
};
export type Props ={
    route: RouteProp<RootStackParamList,'ProducDetails'>;
    navigation: StackNavigationProp<RootStackParamList,'ProducDetails'>;
    
};
function ProducDetails({route}:Props): React.JSX.Element{
    const [product,setProduct] = useState<Product>();
    useEffect(() => {
        setProduct(route.params.product);
    }, [route]);
    return (
        <SafeAreaView>
            {product &&(
                <View>
<Text style={styles.productdetail}>{product.nombre}</Text>
<Text style={[styles.itemBadge,product.currentStock <= 0 ? styles.itemBadgeError : null, ]}>
    
    Existencia: {product.currentStock <= 0 ? 'Agotado' : product.currentStock}</Text>
<Text style={styles.productprecio}>Precio: ${product.precio}</Text>
</View>
)}
        </SafeAreaView>
        
    );
}
const styles = StyleSheet.create({
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
export default ProducDetails;