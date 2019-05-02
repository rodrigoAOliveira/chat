import React from "react"
import { TouchableOpacity, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import PropTypes from "prop-types"

export default class Button extends React.Component {
    static get propTypes() {
        return {
            onSubmit: PropTypes.func.isRequired
        }
    }
    render() {
        return (
            <TouchableOpacity
                style={styles.button}
                onPress={this.props.onSubmit}
            >
                <Ionicons name="ios-send" size={25} color="#9b59b6" />

            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        padding: 5
    }
})