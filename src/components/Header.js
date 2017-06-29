import React, { Component, PropTypes } from 'react'
import { View, Text } from 'react-native'
import { configs, colors } from '../commons'
import styles from './styles/Header'
import { Icon } from '../components'

/**
 * @type 'center','center-left','center-right','text-left'
 */
class Header extends Component {
    renderChilder() {
        if (!Array.isArray(this.props.children)) {
            return this.props.children;
        }

        let icon = this.props.children.filter((item) => {
            return item.type == Icon;
        })

        let text = this.props.children.filter((item) => {
            return item.type == Text;
        })
        let other = this.props.children.filter((item) => {
            return item.type != Text && item.type != Icon
        })
        if (this.props.left) {
            return (
                [<View style={{ flex: 1 }} key='left'>
                    {text}
                </View>,
                <View key='right' style={{ flexDirection: 'row' }}>
                    {icon}
                </View>]
            )
        }
        if (this.props.right) {
            return (
                [
                    <View key='right'>
                        {icon}
                    </View>,
                    <View style={{ flex: 1 }} key='left'>
                        {text}
                    </View>
                ]
            )
        }

        return (
            [
                <View key='left'>
                    {icon[0]}
                </View>,
                <View key='center'>
                    {[...text, ...other]}
                </View>,
                <View key='right'>
                    {icon.length == 1 && <View style={{ width: 40 }} />}
                    {icon.length > 1 && icon.slice(1)}
                </View>
            ]
        )

    }

    render() {
        return (
            <View style={[styles.constant, { justifyContent: this.props.left ? null : 'space-between' }, this.props.style]}>
                {this.renderChilder()}
            </View>
        )
    }
}

export default Header