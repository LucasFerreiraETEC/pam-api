import { Text } from 'react-native';
import React from 'react';
import { styles } from './style';

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}
