import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IPostDetails} from '../../interfaces/IPostDetails';
import {RoundImage} from '../RoundImage';

type PostCardProps = {
  data: IPostDetails;
};

const PostCard: FC<PostCardProps> = ({data}: PostCardProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <RoundImage imageUrl={data.userAvatar} />
        <View style={styles.info}>
          <Text style={styles.normalText}>{data.userName}</Text>
          <Text
            style={
              styles.normalText
            }>{`Sửa lần cuối ${data.lastModified}`}</Text>
        </View>
      </View>
      <Text style={styles.titleText}>{data.title}</Text>
      <View style={styles.content}>
        <Text style={styles.normalText}>{data.content}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {paddingVertical: 10},
  header: {flexDirection: 'row'},
  info: {marginLeft: 12, flexDirection: 'column'},
  titleText: {marginTop: 15, fontSize: 20, fontWeight: '500'},
  content: {marginVertical: 12},
  normalText: {fontSize: 15, fontWeight: 'normal'},
});

export default PostCard;
