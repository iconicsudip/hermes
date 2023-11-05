import { View, Text, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Home from '../../screens/Home'
import Categories from '../../screens/Categories'
import Orders from '../../screens/Orders'
import Account from '../../screens/Account'
import Icon from 'react-native-vector-icons/Feather'
// Styles
const styles = StyleSheet.create({
    tabBar:{
        backgroundColor:"#fff",
        borderTopColor:"#fff",
        paddingTop:10,
        borderRadius:12,
        border:"2px solid red",
        paddingBottom:25,
        height:80
    }
})


const Tab = createBottomTabNavigator();
export default function Navigation() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: styles.tabBar,
            }}
        >
            <Tab.Screen name="Home" component={Home} 
                options={{
                    tabBarIcon:(props)=>{
                        return(
                            <Icon name="home" size={20} color={props.focused ? "#22C55E":"#000000"} />
                        )
                    },
                    tabBarLabel:(props)=>{
                        return(
                            <Text style={{
                                color:props.focused ? "#000000":"#000000",fontWeight:props.focused ? "700" :"400",
                                fontSize:12
                            }}>Home</Text>
                        )
                    }
                }}
            />
            <Tab.Screen name="Categories" component={Categories} 
            options={{
                tabBarIcon:(props)=>{
                    return(
                        <Icon name="home" size={20} color={props.focused ? "#22C55E":"#000000"} />
                    )
                },
                tabBarLabel:(props)=>{
                    return(
                        <Text style={{
                            color:props.focused ? "#000000":"#000000",fontWeight:props.focused ? "700" :"400",
                            fontSize:12
                        }}>Categories</Text>
                    )
                }
            }}
            />
            <Tab.Screen name="Orders" component={Orders} 
            options={{
                tabBarIcon:(props)=>{
                    return(
                        <Icon name="home" size={20} color={props.focused ? "#22C55E":"#000000"} />
                    )
                },
                tabBarLabel:(props)=>{
                    return(
                        <Text style={{
                            color:props.focused ? "#000000":"#000000",fontWeight:props.focused ? "700" :"400",
                            fontSize:12
                        }}>Orders</Text>
                    )
                }
            }}
            />
            <Tab.Screen name="Account" component={Account} 
            options={{
                tabBarIcon:(props)=>{
                    return(
                        <Icon name="home" size={20} color={props.focused ? "#22C55E":"#000000"} />
                    )
                },
                tabBarLabel:(props)=>{
                    return(
                        <Text style={{
                            color:props.focused ? "#000000":"#000000",fontWeight:props.focused ? "700" :"400",
                            fontSize:12
                        }}>Account</Text>
                    )
                }
            }}
            />
        </Tab.Navigator>
    )
}