import React from 'react';
import styled from '@emotion/styled';
import { Data } from 'types';
import HeartIcon from '../HeartIcon/HeartIcon';

interface CommentProps {
  comment: Data;
  children?: React.ReactNode;
  onLike: (id: number) => void;
  isLiked: boolean;
}

const CommentContainer = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
`;

const CommentText = styled.p`
  margin: 5px 0;
`;

const CommentAuthor = styled.div`
  font-weight: bold;
`;

const CommentLikes = styled.div`
  color: #888;
`;

const Comment: React.FC<CommentProps> = ({
  comment,
  children,
  onLike,
  isLiked,
}) => {
  const handleLike = () => {
    onLike(comment.id);
  };

  return (
    <CommentContainer>
      <CommentAuthor>Author ID: {comment.author}</CommentAuthor>
      <CommentText>{comment.text}</CommentText>
      <CommentLikes>Likes: {comment.likes}</CommentLikes>
      <HeartIcon filled={isLiked} onClick={handleLike} />

      {children}
    </CommentContainer>
  );
};

export default Comment;
