import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
const styles = StyleSheet.create({
    container: {
        color:"red",
        padding:10,
        fontSize:20
    },
})
export default function Home() {
    return (
        <SafeAreaView style={{flex:1}}>
            <View style={styles.container}>
                <Text>Home</Text>
            </View>
        </SafeAreaView>
    )
}