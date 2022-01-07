import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IComment} from '../../interfaces/IComment';
import {RoundImage} from '../RoundImage';

type CommentCardProps = {
  data: IComment;
};

const CommentCard: FC<CommentCardProps> = ({
  data,
}: CommentCardProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <RoundImage imageUrl={data.userAvatar} />
        <View style={styles.info}>
          <Text style={styles.normalText}>{data.userName}</Text>
          <Text style={styles.titleText}>{data.userTitle}</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.normalText}>{data.content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {flexDirection: 'row'},
  info: {
    marginLeft: 12,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  titleText: {color: 'blue'},
  content: {marginTop: 12},
  normalText: {fontSize: 15, fontWeight: 'normal'},
});

export default CommentCard;
