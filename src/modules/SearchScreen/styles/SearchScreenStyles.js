import { StyleSheet } from 'react-native';
import Colors from '../../../theme/Colors';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.black, paddingBottom: 20},
  searchContainer: {
    height: 130,
    backgroundColor: Colors.black,
    padding: 10,
    justifyContent: 'center'
  },
  emptyComponentText: { padding: 10, color: '#fff', textAlign: 'center', fontSize: 20 },
  textInput: {
    flex: 1,
    borderRadius: 25,
    borderColor: '#fff',
    backgroundColor: '#fff',
    borderWidth: 1,
    paddingLeft: 15,
    height: 40
  },
  typeContainer: { flexDirection: 'row', alignItems: 'center', borderColor: 'white', borderWidth: 1, marginVertical: 10, marginHorizontal: 10 },
  typeText: { padding: 10, color: '#fff', textAlign: 'center', fontSize: 20 },
  middleLine: { borderColor: 'white', borderWidth: 0.5, height: '100%' },
});
export default styles;
