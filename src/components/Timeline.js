import React, { Component } from 'react'
import { connect } from 'react-redux';
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native'
import { Header, Icon } from '../components'
import { fetchApp, coveSize } from '../helper'
import { configs, constants, arrays } from '../commons'
import styles from './styles/Timeline'

class Timeline extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='home' color={tintColor} />
        ),
    }

    rendercomments = (args) => {
        if (args.length < 5) {
            return args.map((val, ind) =>
                <TouchableOpacity
                    key={ind}
                    onPress={() => this.props.onPress(args)}>
                    <Text style={styles.appLabel} >
                        <Text style={styles.appTitle}>{val.name}</Text> {val.content}
                    </Text>
                </TouchableOpacity>)

        }
        return (
            <TouchableOpacity
                onPress={() => this.props.onPress(args)}>
                <Text style={styles.appLabel} >
                    <Text style={styles.appTitle}>{args[0].name}</Text> {args[0].content}
                </Text>
                <Text style={styles.appTitle}>{`View all ${args.length} comments`}</Text>
            </TouchableOpacity>
        )
    }

    renderPost = ({ item }) => {
        if (!item) return null
        return (
            <View >
                <View style={styles.headerPost}>
                    <Image source={{ uri: item['profile']['image'] }} style={styles.headerIcon} />
                    <Text style={{ paddingHorizontal: 6, flex: 1, fontWeight: '500', color: 'black' }}>{item['profile']['name']}</Text>
                    <Icon name='more-vert' size={configs.icons.small} />
                </View>
                <Image source={{ uri: item['post']['image'] }} style={coveSize(item['post']['ratio'])} />
                <View style={styles.comment}>
                    <Icon name='favorite-border' />
                    <Icon name='chat-bubble-outline' />
                    <Icon name='share' />
                    <View style={{ flex: 1 }} />
                    <Icon name='turned-in-not' />
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                    <Text style={styles.appTitle}>{`${item['post']['like']} likes`}</Text>
                    {this.rendercomments(item['post']['comment'])}
                </View>
            </View >
        )
    }
    render() {
        let { data, viewOnlyImage } = this.props
        return (
            <FlatList
                {...this.props}
                removeClippedSubviews={false}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index}
                data={data}
                renderItem={this.renderPost}
            />
        )
    }
}

export default Timeline