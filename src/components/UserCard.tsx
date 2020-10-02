import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'

type PropsList = {
    user?: any
}

export default class UserCard extends Component<PropsList, {}> {
    render () {
        const { user } = this.props
        return (
            <View
                style = {{
                    padding: 20,
                    backgroundColor:'white',
                    flex: 1,
                }}
            >
                <View style = {{ flexDirection: 'row', alignItems: 'center' }} >
                    <Image
                        source = {{uri: user.avatar}}
                        style = {{
                            width: 60,
                            height: 60,
                            borderRadius: 60
                        }}
                    />
                    <View style = {{paddingLeft: 10}} >
                        <Text
                            style = {{
                                fontWeight: '700',
                                fontSize: 18
                            }}
                        >
                            {user.name}
                        </Text>
                        <Text
                            style = {{
                                fontSize: 12,
                                color: 'dimgrey',
                            }}
                        >
                            {user.job}
                        </Text>
                    </View>
                </View>
                <View style = {{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 }} >
                    {
                        user.details.map((item: any, index: any) => {
                            return (
                                <View style = {{ marginHorizontal: 15 }} key = {index} >
                                    <Text style = {{ fontWeight: '700', fontSize: 18, textAlign: 'center' }} >
                                        {item.value}
                                    </Text>
                                    <Text style = {{ textAlign: 'center', color: 'dimgrey', fontSize: 12 }} >
                                        {item.label}
                                    </Text>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        )
    }
}