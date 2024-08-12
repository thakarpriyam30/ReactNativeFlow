import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
export default function Button({onPress, disabled, loading, label,iconLeft,iconRight,style}: any) {
  return (
    <TouchableOpacity
      style={[disabled ? Styles.disable : Styles.button, Styles.shadow,style]}
      onPress={onPress}
      disabled={disabled}>
      {iconLeft}
      {loading ? (
        <ActivityIndicator size={'small'} color="white" />
      ) : (
        <Text style={Styles.text}>{label}</Text>
      )}
      {iconRight}
    </TouchableOpacity>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: '#42a5f5',
    padding: 10,
    borderRadius: 9,
    width: '100%',
    flexDirection:'row',
      alignItems:'center',
        justifyContent:'center'
  },
  disable:{
        backgroundColor: 'grey',
        padding: 10,
        borderRadius: 9,
        width: '100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '600',
  },
  shadow: {
    elevation: 20,
    shadowColor: '#52006A',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
