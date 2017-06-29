import React, { Component } from 'react'
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity } from 'react-native'
import { configs, constants, arrays } from '../commons'
import { Header, Icon } from '../components'
import { showSnackBar, showToast } from '../redux/actions/App'
import styles from './styles/Camera'
import Camera from 'react-native-camera';
class Home extends Component {
    //oprion Header
    static navigationOptions = {
        tabBarVisible: false
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{flex:1}}>
                <Camera
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    style={styles.cameraConst}
                    aspect={Camera.constants.Aspect.fill}>

                    <Header style={styles.header}>
                        <Icon name='settings' color='white' />
                        <Icon name='arrow-forward' onPress={() => this.props.navigation.navigate('Home')} color='white' />
                    </Header>

                    <TouchableOpacity
                        onPress={() => this.takePicture()}
                        style={styles.takeCamera}
                    />
                </Camera>
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
export default Home