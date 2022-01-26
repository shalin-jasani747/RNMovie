import React from 'react';
import { Text, View } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import Colors from '../theme/Colors';
import PropTypes from 'prop-types';
import styles from './styles/progressCircleStyles';
const CustomProgressCircle = ({ radious, percentage }) => {
  return (
    <View style={styles.percentageCirclePosition}>
      <ProgressCircle
        showsText
        percent={percentage * 10}
        radius={radious}
        bgColor={Colors.black}
        borderWidth={4}
        color={
          percentage * 10 > 45
            ? percentage * 10 < 70
              ? Colors.orange
              : Colors.green
            : Colors.red
        }
        shadowColor={Colors.white}
      >
        <Text style={styles.percentageText}>{percentage * 10}%</Text>
      </ProgressCircle>
    </View>
  );
};
CustomProgressCircle.propTypes = {
  radious: PropTypes.number,
  percentage: PropTypes.number
};
export default CustomProgressCircle;
