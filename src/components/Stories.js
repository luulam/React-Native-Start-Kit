import React, { PropTypes, Component } from 'react'
import { View, Text, FlatList, Image } from 'react-native';
import { configs, images } from '../commons'
import styles from './styles/Stories'


class Stories extends Component {
    renderStorie = ({ item }) => {
        return (
            <View style={styles.const}>
                <View style={styles.bgAva}>
                    {item['see'] ? <View style={styles.see} /> : <Image style={styles.noSee} source={images.bgAvatarUser} />}
                    <Image style={styles.ava} source={{ uri: item['avatar'] }} />
                </View>
                <Text>{item['name']}</Text>
            </View>

        )
    }
    render() {
        const { data } = this.props
        return (
            <View >
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    removeClippedSubviews={false}
                    keyExtractor={(item, index) => index}
                    data={data}
                    renderItem={this.renderStorie}
                />
            </View>

        )
    }
}
export default Stories
