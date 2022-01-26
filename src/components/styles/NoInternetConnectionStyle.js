import { StyleSheet } from 'react-native';
import { ApplicationStyles } from '../../theme';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  noInternetConnectionView: { flex: 1, justifyContent: 'center', alignItems: "center" }
});

export default styles;
