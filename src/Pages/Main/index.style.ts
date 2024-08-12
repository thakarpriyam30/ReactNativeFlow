import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ede6d6',
    paddingHorizontal: 10,
    paddingBottom:10
  },
  text: {
    fontSize: 28,
    color: '#000000',
    fontWeight: '800',
  },
  view: {
    borderRadius: 9,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  shadow: {
    elevation: 20,
    shadowColor: '#52006A',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    marginBottom: 20,
    borderRadius: 9,
  },
});
