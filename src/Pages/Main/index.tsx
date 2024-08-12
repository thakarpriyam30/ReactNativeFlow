import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './index.style';
import Button from '../../Comman/Button';
const MainPage = () => {
  const [modal, setModal] = useState(false);
  return (
    <View style={styles.container}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={[styles.view, styles.shadow]}>
          <Text style={styles.text}>Welcome To React Native</Text>
        </View>
      </View>
      <Button
        label={'Click Me'}
        onPress={() => setModal(!modal)}
        
      />
    </View>
  );
};

export default MainPage;
