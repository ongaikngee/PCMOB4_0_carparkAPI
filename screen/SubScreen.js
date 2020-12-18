import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

// export default function SubScreen({navigation}){
//     return(
//       <View>
//         <Text>Sub Screen</Text>
//         <Button onPress={()=>navigation.goBack()} title="Return" />
//         <Text>Sub Screen</Text>
//       </View>
//     );
//   }

export default function SubScreen({navigation}){
    return(
        <View style={styles.container}>
            <Text>Welcome to subscreen.</Text>
            <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.button}>
                <Text>Click me</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'orange',
        justifyContent:'center',
        alignItems:'center',
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