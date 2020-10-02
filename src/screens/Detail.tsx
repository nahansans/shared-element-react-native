import React, { useState, useEffect } from 'react'
import { View, Text, Image, Dimensions, StyleSheet, ScrollView, FlatList, Animated } from 'react-native'

import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

import { StackParamsList } from '../references/types/navigation'
import UserCard from '../components/UserCard'
import { images } from '../config/data'
import { SharedElement } from 'react-navigation-shared-element'

type PropsList = {
    navigation: StackNavigationProp<StackParamsList, 'Detail'>
    route: RouteProp<StackParamsList, 'Detail'>
}

const Detail = (props: PropsList) => {
    const { navigation, route } = props
    const { width, height } = Dimensions.get('window')
    const { item } = route.params
    return (
        <View style = {{flex:1}} >
            <SharedElement id = {`item.${item.key}.image`} >
                <Image
                    source = {{uri: item.image}}
                    style = {
                        [StyleSheet.absoluteFillObject, {
                            width, height: height * 0.6,resizeMode: 'cover'
                        }]
                    }
                />
            </SharedElement>
            <ScrollView
                contentContainerStyle = {{
                    alignItems: 'center',
                    paddingTop: height / 2 - 100
                }}
                
            >
                <SharedElement id={`item.${item.key}.userCard`} >
                    <UserCard
                        user = {item.user}
                    />
                </SharedElement>
                <Animated.FlatList
                    data = {images}
                    numColumns = {2}
                    keyExtractor = {(item, index) => String(index)} 
                    style = {{
                        alignSelf: 'center'
                    }}                   
                    renderItem = {({item}) => {
                        return (
                            <Image
                                source = {{uri: item}}
                                style = {{
                                    width: width * 0.45,
                                    height: height * 0.45,
                                    margin: 2
                                }}
                            />
                        )
                    }}
                />
            </ScrollView>
        </View>
    )
}
Detail.sharedElement = (route: any, otherRoute:any, showing:any) => {
    const { item } = route.params
    return [
        {
            id: `item.${item.key}.image`
        },
        {
            id: `item.${item.key}.userCard`
        }
    ]
}
export default Detail