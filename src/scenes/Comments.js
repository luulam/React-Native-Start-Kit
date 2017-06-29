import React, { Component } from 'react'
import { connect } from 'react-redux';
import { View, Text, FlatList, Image, TouchableOpacity, TextInput, Keyboard } from 'react-native'
import { Header, Icon } from '../components'
import { configs, constants, arrays } from '../commons'
import { showSnackBar, showToast } from '../redux/actions/App'
import styles from './styles/Comments'

class Comments extends Component {
    //oprion Header
    static navigationOptions = {
        tabBarVisible: false
    };

    state = {
        data: [],
        text: '',
        keyboardHeight: 0
    }
    renderComment = ({ item }) => {
        if (!item) return null
        return (
            <View style={{ flexDirection: 'row', padding: 12 }} >
                <Image source={{ uri: item['image'] }} style={{ width: 34, height: 34, borderRadius: 17 }} />
                <View style={{ flexDirection: 'row', marginHorizontal: 12, ...styles.appLine, paddingBottom: 12 }}>
                    <Text style={styles.appLabel} ><Text style={styles.appTitle}>{item.name}</Text> {item.content}</Text>
                </View>
            </View >
        )
    }
    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardWillShow', this.keyboardDidShow)
        this.keyboardDidHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardDidHide)
    }
    componentDidMount() {
        this.setState({ data: this.props.navigation.state.params.data })
    }

    render() {
        const { navigate, state } = this.props.navigation
        return (
            <View >
                <Header>
                    <Icon name='arrow-back' onPress={() => this.props.navigation.navigate('Home')} />
                    <Text style={styles.appTitle}>Comments</Text>
                </Header>

                <FlatList
                    ref={(compo) => this.listRoot = compo}
                    style={{ height: configs.screenHeight - 48 - 10 - 12 - 48 - this.state.keyboardHeight, width: configs.screenWidth }}
                    removeClippedSubviews={false}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index}
                    data={state.params.data}
                    renderItem={this.renderComment}
                />
                <View style={[styles.inputBg, { marginBottom: this.state.keyboardHeight }]}>
                    <TextInput
                        placeholder='Add a comments...'
                        style={{ height: 40, flex: 1, marginHorizontal: 12, marginTop: 4 }}
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                    />
                    <TouchableOpacity style={styles.sendbg} onPress={() => this.setState({ text: '' })}>
                        <Icon name='send' color='white' />
                    </TouchableOpacity>
                </View>

            </View >
        )
    }
    componentWillUnmount() {
        this.keyboardDidShowListener.remove()
        this.keyboardDidHideListener.remove()
    }

    keyboardDidShow = (e) => {
        // setTimeout(() => { this.listRoot.scrollToEnd() }, 100)
        this.setState({
            keyboardHeight: e.endCoordinates.height,
        })
    }

    keyboardDidHide = (e) => {
        this.setState({
            keyboardHeight: 0
        })
    }
}

export default Comments