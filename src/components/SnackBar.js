import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux';
import { Text } from './'
import { View } from 'react-native';
import { configs } from '../commons'

const style = {
    constant: {
        bottom: 0,
        left: 0,
        height: configs.snackBarHeight,
        width: configs.getWidthWindow,
        backgroundColor: configs.snackBarColor,
        position: 'absolute',
        zIndex: 1000,
        padding: 20,
        justifyContent: 'center',
        flexDirection: 'column'
    },
}

class SnackBar extends Component {
    static propTypes = {
        snackBars: PropTypes.array,
    }

    static defaultProps = {
        snackBars: []
    }

    render() {
        if (this.props.snackBars.length === 0) return null
        return (
            <View style={style.constant}>
                {
                    this.props.snackBars.map((value, index) => {
                        return (
                            <View style={style.constant} key={index}>
                                <Text>{value['title']}</Text>
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
        snackBars: state.app.snaskBars,
        state: state
    }
}
export default connect(mapStateToProps)(SnackBar)
