/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import { Provider } from 'react-redux';
import { store } from './src/models/store';

import { Comps_layout_App } from './src/Comps/layout/App/index';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Comps_layout_App } from './src/Comps/layout/App/index';


const App = () => {
  <Provider store={store}>
    <Comps_layout_App />
  </Provider>
};



export default App;
