import React, {FC} from 'react';
import {FlatList, RefreshControl, View} from 'react-native';
import {CommentCard, ListItemSeparator} from '../../components';
import PostCard from '../../components/PostCard/PostCard';
import {IComment} from '../../interfaces/IComment';
import {IPostDetails} from '../../interfaces/IPostDetails';
import {styles} from './PostDetails.styles';

type PostDetailsViewProps = {
  postInfo: IPostDetails;
  listComment: IComment[];
  onRefreshListComment: () => void;
  onLoadMoreListComment: () => void;
};

const PostDetailsView: FC<PostDetailsViewProps> = ({
  postInfo,
  listComment,
  onRefreshListComment,
  onLoadMoreListComment,
}: PostDetailsViewProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <PostCard data={postInfo} />
      <FlatList
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={onRefreshListComment} />
        }
        data={listComment}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        renderItem={({item}) => <CommentCard data={item} />}
        keyExtractor={(item, index) => `CommentCard-${item.id}-${index}`}
        onEndReached={onLoadMoreListComment}
      />
    </View>
  );
};

export default PostDetailsView;
