import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from './components/DeckList'
import {TabNavigator, StackNavigator} from 'react-navigation'
import { FontAwsome, MaterialCommunityIcons} from '@expo/vector-icons'
import { purple, white} from './utils/colors'
import AddDeck from './components/AddDeck'
import DeckView from './components/DeckView'

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor}) => <MaterialCommunityIcons name='cards' size={30} color={tintColor}/>
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor}) => <FontAwsome name='plus-square' size={30} color={tintColor}/>
    }
  }

},
{
  tabBarOptions: {
    activeTintColor: purple,
    style: {
      height: 56,
      backgroundColor: white
    }
  }
})

const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      header: null
    }
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      title: 'Deck Info',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple 
      }
    }
  }
})

export default function App() {
  return (
    <View style={{flex: 1}}>
      <MainNavigator/>
    </View>
  );
}


