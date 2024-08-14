import {lazy, useState} from 'react';
import {View, TextInput, Text} from 'react-native';
const Input = ({
  value,
  defaultValue,
  autoCorrect,
  autoCapitalize,
  onChangeText,
  placeholder,
  onFocus,
  isFocus,
  label,
}: any) => {
  return (
    <View>
        {label && (
        <View style={{marginTop:5}}>
          <Text
            style={{
              textAlign: 'left',
              opacity: 0.9,
              color: '#000000',
              fontSize: 18,
              fontWeight: '800',
            }}>
            {label}
          </Text>
        </View>
      )}
       <View
      style={{
        borderWidth: 2,
        borderRadius: 6,
        marginTop: 10,
        width: '100%',
        borderColor: isFocus ? '#1F41BB' : 'grey',
        backgroundColor:'#F1F4FF'
      }}>
      
      <TextInput
        onFocus={onFocus}
        value={value}
        defaultValue={defaultValue}
        autoCorrect={autoCorrect}
        placeholderTextColor={'#000000'}
        autoCapitalize={autoCapitalize}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={{paddingHorizontal: 10}}
      />
    </View>
    </View>
   
  );
};
export default Input;
