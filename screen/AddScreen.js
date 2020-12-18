import React from 'react';
import {View, Text, TouchableOpacity, Button, StyleSheet} from 'react-native';


// export default function AddScreen({navigation}){
//     return(
//       <View>
//         <Text>Add Screen</Text>
//         <Button onPress={()=>navigation.goBack()} title="Return" />
//       </View>
//     );
//   }


export default function AddScreen({navigation}){
    return(
        <View style={styles.container}>
            <Text>Welcome to Add Screen</Text>
            <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.button}>
                <Text>Click me</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"orange",
        alignItems:'center',
        justifyContent:'center',
        height:"100%",
    },
    button:{
        borderWidth:1,
        borderRadius:25,
        borderColor:'green',
        padding:25,
        margin:20,
    },
});