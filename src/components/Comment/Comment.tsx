import React from 'react';
import styled from '@emotion/styled';
import { Data } from '/types';

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

const LikeButton = styled.button<{ isLiked: boolean }>`
  margin-top: 5px;
  color: ${(props) => (props.isLiked ? 'red' : 'black')};
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
      <LikeButton onClick={handleLike} isLiked={isLiked}>
        {isLiked ? 'Unlike' : 'Like'}
      </LikeButton>
      {children}
    </CommentContainer>
  );
};

export default Comment;
