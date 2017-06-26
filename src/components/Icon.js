import React, { PropTypes } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native'
import Platform from 'Platform'
import { configs, colors } from '../commons'

const IconApp = ({
    name,
    size,
    style,
    color,
    onPress,
    hide
}) => {
    return (
        <Icon name={name}
            color={hide ? 'transparent' : color}
            size={size}
            onPress={onPress}
            style={{ padding: 6}} />
    )
}

Icon.propTypes = {
    name: PropTypes.string,
    size: PropTypes.number,
    style: PropTypes.object,
}

Icon.defaultProps = {
    size: configs.icons.medium,
    color: 'black',
    name: 'help'
}

export default IconApp