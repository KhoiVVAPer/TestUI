import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';

const ListItemSeparator: FC = (): JSX.Element => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    height: 1,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
    marginVertical: 15,
  },
});

export default ListItemSeparator;
