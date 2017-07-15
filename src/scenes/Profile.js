import React, { Component } from 'react'
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation'
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import { Icon, Header, Timeline } from '../components'
import { configs, constants, arrays, colors } from '../commons'
import { showSnackBar, showToast } from '../redux/actions/App'
import styles from './styles/Profile'
import Comments from './Comments'

class Home extends Component {
    //oprion Header
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='person' color={tintColor} />
        ),
    };

    state = {
        dataProfile: require('../commons/json/profile.json'),
        viewOnlyImage: true
    }

    render() {
        const { navigate } = this.props.navigation;
        let { dataProfile, viewOnlyImage } = this.state
        return (
            <View >
                <Header left>
                    <Text style={styles.appTitle}>luu_the_lam</Text>
                    <Icon name='restore' />
                    <Icon name='person-add' />
                    <Icon name='more-vert' />
                </Header>

                <ScrollView>
                    
                    <View style={styles.constHeader}>

                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Image style={styles.imgProfile} source={{ uri: dataProfile['profile']['avatar'] }} />
                        </View>

                        <View style={{ flex: 2, justifyContent: 'center' }}>
                            <View style={styles.constIndex}>
                                {Object.keys(dataProfile['profile']['index']).map((item, index) => <View key={index} style={{ padding: 4 }}>
                                    <Text style={{ textAlign: 'center' }}>{dataProfile['profile']['index'][item]}</Text>
                                    <Text style={{ textAlign: 'center' }}>{item}</Text>
                                </View>)}
                            </View>

                            <TouchableOpacity style={{ borderRadius: 4, borderWidth: 1, borderColor: colors.cover, marginHorizontal: 12, padding: 6, alignItems: 'center' }}>
                                <Text>Edit your profile</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    
                    <View style={styles.ctType}>
                        <Icon name='apps' onPress={() => this.setState({ viewOnlyImage: true })} color={viewOnlyImage ? colors.accent : 'gray'} />
                        <Icon name='menu' onPress={() => this.setState({ viewOnlyImage: false })} color={!viewOnlyImage ? colors.accent : 'gray'} />
                        <Icon name='assignment-ind' color='gray' />
                        <Icon name='bookmark-border' color='gray' />
                    </View>
                    {
                        viewOnlyImage ? <FlatList
                            style={{ marginHorizontal: -1 }}
                            numColumns={3}
                            removeClippedSubviews={false}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item, index) => index}
                            data={dataProfile['timeline']}
                            renderItem={({ item }) => <Image source={{ uri: item['post']['image'] }} style={styles.imgOnly} />}
                        /> : <Timeline data={dataProfile['timeline']} onPress={(args) => navigate('Comments', { data: args })} viewOnlyImage />
                    }

                </ScrollView>

            </View>
        )
    }

}

const ModalStack = StackNavigator({
    Navigation: {
        screen: Home,
    },
    Comments: {
        screen: Comments,
    }
}, {
        headerMode: 'none',
        cardStyle: {
            backgroundColor: 'white'
        }
    });

export default ModalStack