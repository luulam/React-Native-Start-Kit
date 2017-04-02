import React, { PropTypes } from "react";
import { TouchableOpacity, View } from "react-native";
import { Text, Icon } from './'
import { configs } from "../commons";
const styles = {
    constant: {
        padding: configs.btnPadding
    },
    text: {
        flex: 1,
        color: 'white',
        textAlign: 'center',
        fontSize: configs.fontSizeBase
    },
    border: {
        borderRadius: configs.btnBorderRadius,
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: configs.btnPadding
    },
    icon: {
        paddingLeft: configs.btnPadding,
    }
}
const Button = ({
    color,
    bgColor,
    name,
    title,
    onPress,
    iconSize,
    border,
    style,
    styleborder,
    styleIcon,
    styleText
}) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={configs.buttonActiveOpacity}
            style={[styles.constant, style]}>
            <View style={[styles.border, { backgroundColor: bgColor, borderWidth: border ? 0 : 1, }, styleborder]}>
                {name ? <Icon style={[styles.icon, styleIcon]} name={name} color='white' size={iconSize} /> : null}
                <Text style={[styles.text, { color: color }, styleText]}>{title}</Text>
            </View>
        </TouchableOpacity>

    )
}

Button.propTypes = {
    color: PropTypes.string,
    bgColor: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    onPress: PropTypes.func,
    iconSize: PropTypes.number,
    border: PropTypes.bool,
    style: PropTypes.object,
    styleborder: PropTypes.object,
    styleIcon: PropTypes.object,
    styleText: PropTypes.object
}

Button.defaultProps = {
    color: '#fff',
    iconSize: configs.btnIconSize,
    bgColor: 'transparent'
}

export default Button