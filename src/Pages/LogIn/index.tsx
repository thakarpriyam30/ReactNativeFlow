import React from "react";
import {View,Text} from 'react-native';
import Button from "../../Comman/Button";
const LogIn=()=>{
    return(
      <View style={{flex:1,backgroundColor:'#F1F4FF',paddingHorizontal:10,marginBottom:10}}>
        <View style={{flex:1}}>
        <View style={{alignItems:'center',justifyContent:'center',marginTop:30}}>
            <Text style={{color:'#1F41BB',fontSize:30,fontWeight:'bold'}}>{'Login here'}</Text>
            <Text style={{color:'#000000',fontSize:20,fontWeight:'600',textAlign:'center',marginTop:20}}>{`Welcome back you’ve\nbeen missed!`}</Text>
         </View>
        </View>
         
         <View>
         <Button
        label={'LogIn'}
        onPress={() => console.log('--LogIn')}
        style={{backgroundColor:'#1F41BB'}}
      />
         </View>
      </View> 
    )
}
export default LogIn