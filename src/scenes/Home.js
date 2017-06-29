import React, { Component } from 'react'
import { connect } from 'react-redux';
import { View, Text, ScrollView, FlatList, Image } from 'react-native'
import { Header, Icon } from '../components'
import { fetchApp } from '../helper'
import { configs, constants, arrays } from '../commons'
import styles from './styles/Home'

class Home extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='home' color={tintColor} />
        ),
    }

    state = {
        sourceList: []
    }

    componentWillMount() {
        fetchApp.getTimeline()
            .then((data) => { this.setState({ sourceList: data }) })
            .catch()
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
                <Image source={{ uri: item['post']['image'] }} style={{ width: configs.screenWidth, height: configs.screenWidth }} />
                <View style={styles.comment}>
                    <Icon name='favorite-border' />
                    <Icon name='chat-bubble-outline' />
                    <Icon name='share' />
                    <View style={{ flex: 1 }} />
                    <Icon name='turned-in-not' />
                </View>
                <View style={{ paddingHorizontal: 10 }}>
                    <Text style={styles.appTitle}>{`${item['post']['like']} likes`}</Text>
                    {item['post']['comment'].map((val, ind) =>
                        <Text key={ind} style={styles.appLabel} ><Text style={styles.appTitle}>{val.name}</Text> {val.content}</Text>)
                    }
                </View>

            </View >
        )
    }
    render() {
        const { navigate } = this.props.navigation;
        const { sourceList } = this.state
        return (
            <View style={{ flex: 1 }}>
                <Header>
                    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>DEMO</Text>
                    <Icon name='photo-camera' onPress={() => this.props.navigation.navigate('Camera')} />
                    <Icon name='send' onPress={() => this.props.navigation.navigate('Messages')} />
                </Header>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index}
                    data={sourceList}
                    renderItem={this.renderPost}
                />

            </View >
        )
    }
}

export default Home