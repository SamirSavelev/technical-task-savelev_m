import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import { Data, IPagination } from '/types';
import getCommentsRequest from 'api/comments/getCommentsRequest';
import Comment from '../Comment/Comment';

const CommentListContainer = styled.div`
  margin-top: 20px;
`;

const CommentList: React.FC = () => {
  const [comments, setComments] = useState<Data[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [likedComments, setLikedComments] = useState<number[]>([]);
  const { data, isLoading, isError } = useQuery<IPagination>({
    queryKey: ['comments', currentPage],
    queryFn: () => getCommentsRequest(currentPage),
  });

  useEffect(() => {
    if (data) {
      setComments((prevComments) => [...prevComments, ...data.data]);
    }
  }, [data]);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleLike = (id: number) => {
    setComments((prevComments) =>
      prevComments.map((comment) => {
        if (comment.id === id) {
          const isLiked = likedComments.includes(id);
          return {
            ...comment,
            likes: isLiked ? comment.likes - 1 : comment.likes + 1,
          };
        }
        return comment;
      }),
    );

    setLikedComments((prevLikedComments) =>
      prevLikedComments.includes(id)
        ? prevLikedComments.filter((likedId) => likedId !== id)
        : [...prevLikedComments, id],
    );
  };

  const renderComments = (parent: number | null) => {
    return comments
      .filter((comment) => comment.parent === parent)
      .map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          onLike={handleLike}
          isLiked={likedComments.includes(comment.id)}
        >
          {renderComments(comment.id)}
        </Comment>
      ));
  };

  const totalLikes = comments.reduce((sum, comment) => sum + comment.likes, 0);
  const totalComments = comments.length;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading comments...</div>;
  }

  return (
    <CommentListContainer>
      <div>Total Likes: {totalLikes}</div>
      <div>Total Comments: {totalComments}</div>
      {renderComments(null)}
      {(data?.pagination?.page || 0) < (data?.pagination?.total_pages || 0) && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </CommentListContainer>
  );
};

export default CommentList;
