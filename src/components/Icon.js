import React, { PropTypes } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { configs } from '../commons'
import { getPlatformValue } from '../utils'

const IconApp = ({
    name,
    size,
    style,
    color,
    onPress
}) => {
    return (
        <Icon name={getPlatformValue('ios-' + name, 'md-' + name)}
            color={color}
            size={size}
            onPress={onPress} />
    )
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number,
    style: PropTypes.array,
}

Icon.defaultProps = {
    size: configs.iconSize,
    color: configs.iconColor
}

export default IconApp