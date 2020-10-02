import React, { useState, useEffect, useRef } from 'react'
import { View, Text, FlatList, StyleSheet, Dimensions, Image, Animated, Easing } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SharedElement } from 'react-navigation-shared-element';
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

import { StackParamsList } from '../references/types/navigation'
import {data} from '../config/data'
import UserCard from './../components/UserCard';


type PropsList = {
    navigation: StackNavigationProp<StackParamsList, 'Home'>
    route: RouteProp<StackParamsList, 'Home'>
}

const {width, height} = Dimensions.get('window')

const Home = (props: PropsList) => {
    const { navigation, route } = props
    const scrollX = useRef(new Animated.Value(0)).current
    const scale = useRef(new Animated.Value(1)).current
    return (
        <>
            <Animated.FlatList
                data = {data}
                horizontal
                keyExtractor = {(item) => String(item.key)}
                showsHorizontalScrollIndicator = {false}
                pagingEnabled
                scrollEventThrottle = {16}
                onScroll = {Animated.event(
                    [{nativeEvent: {contentOffset: {x: scrollX}}}],
                    { useNativeDriver: true }
                )}
                style = {{
                    flex: 1,                    
                }}
                renderItem = {({item, index}) => {
                    const inputRange = [
                        ( index - 0.5 ) * width,
                        index * width,
                        ( index + 0.5 ) * width
                    ]
                    const translateY = scrollX.interpolate({
                        inputRange,
                        outputRange: [20,0,20]
                    })
                    const opacity = scrollX.interpolate({
                        inputRange,
                        outputRange: [0,1,0]
                    })
                    return (
                        <View
                            style = {{
                                width
                            }}
                        >
                            <SharedElement id = {`item.${item.key}.image`} >
                                <Image
                                    source = {{uri: item.image}}
                                    style = {
                                        [StyleSheet.absoluteFillObject, {
                                            width, resizeMode: 'cover'
                                        }]
                                    }
                                />
                            </SharedElement>
                            <Animated.View
                                style = {{
                                    position: 'absolute',
                                    bottom: 50,
                                    alignSelf: 'center',
                                    transform: [{scale}]
                                }}
                            >
                                <TouchableOpacity
                                    activeOpacity = {1}
                                    onPressIn = {() => {
                                        Animated.timing(scale, {
                                            toValue: 0.9,
                                            duration: 100,
                                            useNativeDriver: true,
                                        }).start()
                                    }}
                                    onPressOut = {() => {
                                        Animated.timing(scale, {
                                            toValue: 1,
                                            duration: 100,
                                            useNativeDriver: true,
                                        }).start()
                                    }}
                                    onPress = {() => navigation.navigate('Detail', { item })}
                                >
                                    <SharedElement id = {`item.${item.key}.userCard`} >
                                        <UserCard
                                            user = {item.user}
                                        />
                                    </SharedElement>
                                </TouchableOpacity>
                            </Animated.View> 
                            <Animated.View style = {{ padding: 40, opacity,transform: [{translateY}], }} >
                                <Text
                                    style = {{
                                        color: 'white',
                                        fontSize: 15,
                                        fontWeight: '700'
                                    }}
                                >
                                    {item.title}
                                </Text>
                                <Text
                                    style = {{
                                        color: 'white',
                                        fontSize: 13,
                                        opacity: 0.8
                                    }}
                                >
                                    {item.description}
                                </Text>
                            </Animated.View>
                        </View>
                    )
                }}
            />
        </>
    )
}

export default Home