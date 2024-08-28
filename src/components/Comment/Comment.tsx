import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Data } from '/types';

interface CommentProps {
  comment: Data;
  children?: React.ReactNode;
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

const LikeButton = styled.button`
  margin-top: 5px;
`;

const Comment: React.FC<CommentProps> = ({ comment, children }) => {
  const [likes, setLikes] = useState(comment.likes);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <CommentContainer>
      <CommentAuthor>Author ID: {comment.author}</CommentAuthor>
      <CommentText>{comment.text}</CommentText>
      <CommentLikes>Likes: {likes}</CommentLikes>
      <LikeButton onClick={handleLike}>Like</LikeButton>
      {children}
    </CommentContainer>
  );
};

export default Comment;
