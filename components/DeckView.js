import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

class DeckView extends React.Component {
    render() {
        const deck = this.props.navigation.state.params.entryId
        console.log(deck)
        return(
            <View style= {styles.container}>
            <Text>{}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justyfyContent: 'center',
        alignItems: 'center'
    }
})

export default DeckView