import React, { Component } from 'react'
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, CameraRoll, FlatList, Image } from 'react-native'
import { configs, constants, arrays } from '../commons'
import { Header, Icon } from '../components'
import { showSnackBar, showToast } from '../redux/actions/App'
import { coveSize } from '../helper'
import styles from './styles/NewGallery'
import Camera from 'react-native-camera'

class NewCamera extends Component {
    //oprion Header
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name='add-box' color={tintColor} size={34} />
        ),
        // tabBarVisible: false
    };
    state = {
        arrImages: [],
        imageSelect: 0,
        imageRe: true,
        infoLoadImageLast: undefined
    }
    componentWillMount() {
        this.loadImage()
    }
    renderImage = ({ item, index }) => {
        if (!item) return null
        return (
            <TouchableOpacity onPress={() => this.changeImage(index)}>
                <Image source={{ uri: item['node']['image']['uri'] }} style={styles.imgArr} />
            </TouchableOpacity>

        )
    }
    render() {
        const { navigate } = this.props.navigation;
        const { arrImages, imageRe, imageSelect } = this.state
        const dataImageSlect = arrImages.length != 0 ? arrImages[imageSelect]['node']['image'] : undefined
        return (
            <View style={styles.appConst}>
                <Header style={styles.header}>
                    {/* <Icon name='close' onPress={() => this.props.navigation.goBack()} /> */}
                    <Text style={styles.appTitle}>Gallery</Text>
                </Header>
                <View style={[styles.imageSelect]}>
                    {
                        dataImageSlect ? <Image style={imageRe ? styles.imageSelect : coveSize(dataImageSlect['width'] / dataImageSlect['height'])}
                            source={{ uri: dataImageSlect['uri'] }} />
                            : null
                    }
                    <View style={styles.btnChangeViewImage}>
                        <Icon name='border-outer' color='white' onPress={() => this.changeViewImage()} />
                    </View>

                </View>
                <FlatList
                    style={{ margin: -1 }}
                    removeClippedSubviews={false}
                    onEndReached={() => this.loadImage()}
                    numColumns={4}
                    keyExtractor={(item, index) => index}
                    data={arrImages}
                    renderItem={this.renderImage}
                />
            </View >
        )
    }

    loadImage = () => {
        const { infoLoadImageLast, arrImages } = this.state
        let param
        if (infoLoadImageLast) {
            if (infoLoadImageLast['has_next_page']) {
                param = {
                    first: 10,
                    after: infoLoadImageLast['end_cursor'],
                    assetType: 'All'
                }
            }
        } else {
            param = {
                first: 10,
                assetType: 'All'
            }
        }
        CameraRoll.getPhotos(param)
            .then((data) => {
                this.setState({
                    infoLoadImageLast: data['page_info'],
                    arrImages: arrImages.concat(data['edges'])
                })
            })
    }
    changeViewImage = () => {
        this.setState({
            imageRe: !this.state.imageRe
        })
    }
    changeImage = (index) => {

        this.setState({ imageSelect: index })
    }
}
export default NewCamera