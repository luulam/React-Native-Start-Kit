import React, { Component, PropTypes } from 'react'
import { Text } from 'react-native'
import { configs } from '../commons'

const styles = {
    fontSize: configs.fontSizeBase,
    color: configs.textColor,
    backgroundColor:'transparent'
}

class TextApp extends Component {

    static PropsTypes = {
        style: PropTypes.object
    }

    setNativeProps(nativeProps) {
        this._root.setNativeProps(nativeProps);
    }

    render() {
        return (
            <Text style={[styles, this.props.style]} ref={c => this._root = c}>{this.props.children}</Text>
        )
    }
}

export default TextApp