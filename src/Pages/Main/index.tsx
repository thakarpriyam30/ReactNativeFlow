import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './index.style';
import Button from '../../Comman/Button';
import { useNavigation } from '@react-navigation/native';
import ISCREENS from '../../Navigation/IScreen';
const MainPage = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={[styles.view, styles.shadow]}>
          <Text style={styles.text}>Welcome To React Native</Text>
        </View>
      </View>
      <Button
        label={'Click Me'}
        onPress={() => navigation.navigate(ISCREENS.LogIn)}
      />
    </View>
  );
};

export default MainPage;
