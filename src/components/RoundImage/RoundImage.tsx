import React, {FC} from 'react';
import {Image, StyleSheet, View} from 'react-native';

type RoundImageProps = {
  imageUrl?: string;
};

const RoundImage: FC<RoundImageProps> = ({
  imageUrl,
}: RoundImageProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Image source={{uri: imageUrl}} style={styles.img} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 25,
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
  },
});

export default RoundImage;
