import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { configs } from '../commons'
import styles from './styles/Toast'


class Toast extends Component {
    static propTypes = {
        toasts: PropTypes.array,
    }

    static defaultProps = {
        toasts: []
    }

    render() {
        if (this.props.toasts.length === 0) return null
        return (
            <View style={styles.constant}>
                {
                    this.props.toasts.map((value, index) => {
                        return (
                            <View style={styles.border} key={index}>
                                <Text style={styles.text}>{value['title']}</Text>
                            </View>
                        )
                    })
                }
                {this.props.children}
            </View>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        toasts: state.app.toasts,
    }
}
export default connect(mapStateToProps)(Toast)
