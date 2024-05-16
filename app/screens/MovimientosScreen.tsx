import { RouteProp, useRoute } from "@react-navigation/native";
import { Product } from "./model/Product"
import { RootStackParamList } from "../../App";
import React, { useEffect, useState } from "react";
import { Button, SafeAreaView, Text, TextInput } from "react-native";

export type MovientosScreenParams = {
    product: Product;
};

export function EntradasScreen(): React.JSX.Element {
    const route = useRoute<RouteProp<RootStackParamList, 'EntradasScreen'>>();
    const [product, setProduct] = useState<Product>(undefined!);
    const [cantidad, setCantidad] = useState<number>;

    const btnOnPress = function () {
        agregarMovimiento(product, new Date(), cantidad);

    };
    useEffect(() => {
        setProduct(route.params.product);
    }, [route]);
    return (
    <SafeAreaView>
        <Text>{product?.nombre} </Text>
        <Text>Cantidad </Text>
        <TextInput onChangeText = {t => setCantidad(Number.parseInt(t, 10))} />
        <Button title="Regristrar entradas" onPress={btnOnPress}/>
    </SafeAreaView>
    )
    async function agregarMovimiento(
        product: Product,
        
    )
}