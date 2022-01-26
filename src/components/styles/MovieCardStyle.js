import { StyleSheet } from 'react-native';
import { ApplicationStyles } from '../../theme';
import Colors from '../../theme/Colors';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.black,
    width: '100%'
  },
  topContainer: {
    paddingTop: 20,
  },
  textStyleWP: {
    fontSize: 20,
    fontWeight: '600',
    marginHorizontal: 15,
    color: Colors.white
  },
  container: {
    padding: 10
  },
  buttonText: {
    fontWeight: 'bold',
    color: Colors.white
  },
  buttonStyles: {
    width: '70%',
    borderRadius: 12,
    padding: 5,
    margin: 5,
    backgroundColor: Colors.background
  },
  card: {
    shadowColor: Colors.black,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: Colors.bg,
    margin: 10,
    width: 180,
    height: 250
  },
  image: {
    height: 250,
    width: 180,
    borderRadius: 10
  },
  noData: {
    fontSize: 15,
    fontWeight: '400',
    marginHorizontal: 10,
    color: Colors.white
  },
});

export default styles;
