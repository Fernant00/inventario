import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Button, SafeAreaView, Text, TextInput, View } from "react-native";
import { RootStackParamList } from "../../App";
import LocalDB from "./persistance/localdb";

export default function ProductAdd(): React.JSX.Element {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [nombre, setNombre] = useState<String>('');
    const [precio, setPrecio] = useState<String>('0');
    const [currentStock, setStock] = useState<String>('0');
    const [minStock, setminStock] = useState<String>('0');
    const [maxStock, setmaxStock] = useState<String>('0');

    const btnGuardarOnPress = async()=>{
        const db = await LocalDB.connect();
        db.transaction(tx =>{
            tx.executeSql(
                'INSERT INTO productos (nombre, precio,minStock,currentStock,maxStock) VALUES (?, ?, ?, ?, ?)',
                [nombre,precio,minStock,currentStock,maxStock],
            );
            navigation.goBack();
        });
    };

    return (
    <SafeAreaView>
         <View>
                <Text>Guardar materiales</Text>
                <TextInput placeholder='Nombre' onChangeText={u => setNombre(u)}/>
                <TextInput placeholder='Precio' onChangeText={p => setPrecio(p)}/>
                <TextInput placeholder='minStock' onChangeText={m => setminStock(m)}/>
                <TextInput placeholder='currentStock' onChangeText={c => setStock(c)}/>
                <TextInput placeholder='maxStock' onChangeText={a => setmaxStock(a)}/>
                <Button title='Guardar'  onPress={btnGuardarOnPress}/>
            </View>
    </SafeAreaView>
    );
}