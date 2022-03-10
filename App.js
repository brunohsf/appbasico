import React, { Component } from 'react';
import { DrawerNavigator } from 'react-bavigation';
import DefaultScreen from './src/components/DefaultScreen';

import Drawer from './src/drawer';

class App extends Component {
  render() {
    return <RootDrawer />
  }

}

const RootDrawer = DrawerNavigator(
  {
    Home: {
      screen: DefaultScreen,
    },
    // Register screens of all options of child components
    ...screenMapping,
  },
  {
    // Custom rendering component of drawer panel
    contentComponent: MainDrawer,
  }
);

export default App;


