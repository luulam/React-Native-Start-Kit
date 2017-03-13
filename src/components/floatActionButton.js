import React from 'react'

import { TouchableOpacity, View } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

import {configs} from '../commons'

const FloatActionButton = ({
    name,
    size,
    color,
    backgroundColor,
    onPress,
    style}
) => {
    return (
        <TouchableOpacity onPress={onPress} style={style}>
            <View
                style={[styles.Background, {
                    width: size * 2,
                    height: size * 2,
                    borderRadius: size,
                    backgroundColor: backgroundColor
                }]}>
                <Icon
                    name={name}
                    size={size}
                    color={color} />
            </View>
        </TouchableOpacity>

    )
}

const styles = {
    Background: {
        alignItems: 'center',
        justifyContent: 'center'
    }
}

FloatActionButton.propTypes = {
    name: React.PropTypes.string,
    size: React.PropTypes.number,
    color: React.PropTypes.string,
    backgroundColor: React.PropTypes.string,
    onPress: React.PropTypes.func
}

FloatActionButton.defaultProps = {
    name: 'error',
    size: configs.iconFontSize,
    color: '#fff',
    backgroundColor: configs.brandPrimary
}

export default FloatActionButton