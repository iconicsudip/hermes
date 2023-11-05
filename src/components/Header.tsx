import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-ionicons'

// Styles
const styles = StyleSheet.create({
    parentContainer:{
        backgroundColor:"#fff",
        flexDirection:"column",
        height:140
    },
    container: {
        fontSize:20,
        height:80,
        backgroundColor:"white",
        padding:20,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    logo:{
        backgroundColor:"#F3F4F6",
        width:50,
        height:50,
        borderRadius:50,
    },
    leftHeader:{
        flexDirection:"row",
        alignItems:"center",
        gap:10,
        justifyContent:"space-between"
    },
    rightHeader:{
        flexDirection:"row",
        alignItems:"center",
        gap:10,
        justifyContent:"space-between"
    },
    deliveryTitle:{
        fontSize:20,
        fontWeight:"800",
        color:"#000000"
    },
    deliveryAddress:{
        fontSize:12,
        fontWeight:"400",
        color:"#4B5563",
        marginTop:4
    },
    searchBox:{
        backgroundColor:"#F3F4F6",
        height:40,
        borderRadius:12,
        marginLeft:20,
        marginRight:20,
        padding:12,
        borderColor:"#E2E8F0",
        borderWidth:2,
    }

})

export default function Header() {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"#fff",flexDirection:"column"}}>
        <View style={styles.parentContainer}>
            <View style={styles.container}>
                <View style={styles.leftHeader}>
                    <TouchableOpacity style={styles.logo}>
                        <View />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <View >
                            <Text style={styles.deliveryTitle}>Deliver To</Text>
                            <Text style={styles.deliveryAddress}>Nabagram, Hooghly, 712246...</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.rightHeader}>
                    <TouchableOpacity >
                        <View >
                            <Icon name="cart" size={20} color="#000000" />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <TextInput style={styles.searchBox} placeholder={'Search "Medicine"'}  />
        </View>
    </SafeAreaView>
  )
}