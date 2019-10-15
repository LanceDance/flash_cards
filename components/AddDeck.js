import React from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import { saveDeckTitle} from '../utils/api'
import { addDeck } from '../actions'


class AddDeck extends React.Component {

    state = {
        text: ''
    }
    submitName = () => {
        const {text} = this.state

        saveDeckTitle(text)
        this.props.dispatch(addDeck(text))
        this.props.navigation.navigate()
    }
    render() {
        return (
            <View style={styles.container}>
            <Text>What is the deck name?</Text>
            <TextInput onChangeText={(text) => this.setState({ text: text})} value={this.state.text}>
            </TextInput>
            <Button onPress={this.submitName}
            title='submit'>
            </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default AddDeck