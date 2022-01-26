import { StyleSheet } from 'react-native';
import { ApplicationStyles } from '../../../theme';
import Colors from '../../../theme/Colors';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.black,
    width: '100%'
  }
});

export default styles;
