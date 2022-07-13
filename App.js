/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  Animated
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CircleEffect from './effects/circleEffect';
import Minder from './effects/minder';
import StackFlatlist from './effects/stackFlatlist';
import Timer from './effects/timer'









const App = () => {
  const animatedValue = useRef(new Animated.Value(0)).current

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

    <SafeAreaView style={{flex:1,}}>
      <StatusBar style='auto' hidden />
      <Timer />
    </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
