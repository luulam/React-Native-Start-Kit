import React, { Component } from 'react'
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native'
import { configs, constants, arrays } from '../commons'
import { Header, Icon } from '../components'
import { showSnackBar, showToast } from '../redux/actions/App'
import styles from './styles/NewCamera'
import Camera from 'react-native-camera';
class NewCamera extends Component {
    //oprion Header
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='add-box' color={tintColor} size={34} />
        ),
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1 }}>
                <Header style={styles.header}>
                    <Icon name='close' onPress={() => this.props.navigation.goBack()} />
                    <Text>View</Text>
                </Header>
                <Camera
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    style={styles.camera}
                    aspect={Camera.constants.Aspect.fill}>
                </Camera>
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <TouchableOpacity
                        onPress={() => this.takePicture()}
                        style={styles.takeCamera}
                    />
                </View>
            </View>
        )
    }
    takePicture = () => {
        const options = {};
        this.camera.capture({ metadata: options })
            .then((data) => console.log(data))
            .catch(err => console.error(err));
    }
}
export default NewCamera