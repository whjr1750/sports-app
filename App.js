import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Dashboard from './screens/Dashboard';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Feedback from './screens/Feedback';
import Cricket from './screens/Cricket';
import BaseBall from './screens/BaseBall';
import FootBall from './screens/FootBall';
import Hockey from './screens/Hockey'; 
import TableTennis from './screens/TableTennis';
export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}
const Navigator = createSwitchNavigator({
  Dashboard: Dashboard,
  Feedback: Feedback,
  Cricket: Cricket,
  BaseBall: BaseBall,
  FootBall: FootBall,
  Hockey: Hockey,
  TableTennis: TableTennis,
});
const AppContainer = createAppContainer(Navigator);
