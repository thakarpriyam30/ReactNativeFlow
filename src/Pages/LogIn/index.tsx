import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Button from '../../Comman/Button';
import Input from '../../Comman/Input';
const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [focusedInput, setFocusedInput] = useState<number | null>(null);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F1F4FF',
        paddingHorizontal: 10,
        marginBottom: 10,
      }}>
      <View style={{flex:1,justifyContent:'space-evenly'}}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
          }}>
          <Text style={{color: '#1F41BB', fontSize: 30, fontWeight: 'bold'}}>
            {'Login here'}
          </Text>
          <Text
            style={{
              color: '#000000',
              fontSize: 20,
              fontWeight: '600',
              textAlign: 'center',
              marginTop: 20,
            }}>{`Welcome back you’ve\nbeen missed!`}</Text>
        </View>
        <View style={{flex: 0.5}}>
        <Input
          label={'Email'}
          value={email}
          defaultValue={email}
          onChangeText={val => setEmail(val)}
          autoCorrect={false}
          autoCapitalize={false}
          placeholder={'Enter Email Id'}
          onFocus={() => setFocusedInput(1)}
          isFocus={focusedInput === 1}
        />
        <Input
          label={'Password'}
          value={password}
          onChangeText={val => setPassword(val)}
          defaultValue={password}
          autoCorrect={false}
          autoCapitalize={false}
          placeholder={'Enter Password '}
          onFocus={() => setFocusedInput(2)}
          isFocus={focusedInput === 2}
        />
      </View>
      </View>
      

      <View>
        <Button
          label={'LogIn'}
          onPress={() => console.log('--LogIn')}
          style={{backgroundColor: '#1F41BB'}}
        />
      </View>
    </View>
  );
};
export default LogIn;
