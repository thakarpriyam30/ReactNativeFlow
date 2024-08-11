import React from 'react';
import {View, Text} from 'react-native';
import styles from './index.style';
const MainPage = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.view, styles.shadow]}>
        <Text style={styles.text}>Welcome To React Native</Text>
      </View>
    </View>
  );
};

export default MainPage;
