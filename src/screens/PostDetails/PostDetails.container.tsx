import React, {FC, useEffect} from 'react';
import {mockPostListComments} from '../../interfaces/IComment';
import {mockPostInfo} from '../../interfaces/IPostDetails';
import PostDetailsView from './PostDetails.view';

const PostDetails: FC = (): JSX.Element => {
  useEffect(() => {
    // get post info and list comments with post id in navigation props and pass to view
  }, []);

  // const postInfo = useSelector();
  const postInfo = mockPostInfo;

  // const listComment = useSelector();
  const listComment = mockPostListComments;

  const onRefreshListComment = () => {
    //dispatch action
    console.log('onRefreshListComment - listComment', listComment);
  };
  const onLoadMoreListComment = () => {
    //dispatch action
    console.log('onLoadMoreListComment - listComment', listComment);
  };

  return (
    <PostDetailsView
      postInfo={postInfo}
      listComment={listComment}
      onRefreshListComment={onRefreshListComment}
      onLoadMoreListComment={onLoadMoreListComment}
    />
  );
};

export default PostDetails;
