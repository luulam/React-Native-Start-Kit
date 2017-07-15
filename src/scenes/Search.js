import React, { Component } from 'react'
import { connect } from 'react-redux';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import { Header, Icon, Stories } from '../components'
import { configs, constants, arrays } from '../commons'
import styles from './styles/Search'
class Home extends Component {
    //oprion Header
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='search' color={tintColor} />
        ),
    };
    state = {
        textSearch: '',
        arrImages: require('../commons/json/search.json')['search'],
        arrStories: require('../commons/json/search.json')['stories'],
        loading: false,
        refreshing: false
    }

    renderImage = ({ item, index }) => {
        if (!item) return null
        return (
            <TouchableOpacity>
                <Image source={{ uri: item }} style={styles.imgArr} />
            </TouchableOpacity>

        )
    }
    renderFooter = () => {
        if (!this.state.loading) return null
        return (
            <ActivityIndicator animating size="large" />
        )
    }
    renderHeader = () => {
        const { arrStories } = this.state
        return <View>
            <Stories data={arrStories} />
            <Image style={{ width: configs.screenWidth, height: configs.screenWidth / 2, marginTop: 4 }}
                source={{ uri: 'https://instagram.fhan5-1.fna.fbcdn.net/t51.2885-15/e35/19985763_1725566524405307_2227749478591365120_n.jpg?se=7' }} />
        </View>
    }

    render() {
        const { navigate } = this.props.navigation;
        const { arrImages } = this.state
        return (
            <View style={styles.appConst}>
                <Header right>
                    <Icon name='search' />
                    <Text>Search</Text>
                </Header>

                <FlatList
                    removeClippedSubviews={false}
                    numColumns={3}
                    keyExtractor={(item, index) => index}
                    data={arrImages}
                    renderItem={this.renderImage}
                    onEndReached={this.onEndReached}
                    onRefresh={this.onRefresh}
                    refreshing={this.state.refreshing}
                    ListFooterComponent={this.renderFooter}
                    ListHeaderComponent={this.renderHeader}
                />
            </View >
        )
    }

    onEndReached = () => {
        this.setState({
            loading: true
        }, () => {
            setTimeout(() => {
                this.setState({
                    arrImages: this.state.arrImages.concat(require('../commons/json/search.json')['search']),
                    loading: false
                })
            }, 3000)
        })
    }
    onRefresh = () => {
        this.setState({
            refreshing: true
        }, () => {
            setTimeout(() => {
                this.setState({
                    refreshing: false,
                    arrImages: require('../commons/json/search.json')['search']
                })
            }, 3000)
        })
    }
}

export default Home