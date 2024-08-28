import React, { useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';
import { Author, Data, IPagination } from 'types';
import getCommentsRequest from 'api/comments/getCommentsRequest';
import Comment from '../Comment/Comment';
import { CommentListContainer, Header } from './styles';
import preloader from 'assets/svg/preloader.svg';
import { Flex } from '../Flex/Flex';
import HeartIcon from '../HeartIcon/HeartIcon';
import { Button, Text } from 'ui-kit';
import { Content } from './styles/Content';
import getAuthorsRequest from 'api/authors/getAuthorsRequest';

const CommentList = () => {
  const [comments, setComments] = useState<Data[]>([]);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [likedComments, setLikedComments] = useState<number[]>([]);

  const {
    data,
    isLoading: isLoadingComments,
    isError: isErrorComments,
  } = useQuery<IPagination>({
    queryKey: ['comments', currentPage],
    queryFn: () => getCommentsRequest(currentPage),
  });

  const {
    data: authorsData,
    isLoading: isLoadingAuthors,
    isError: isErrorAuthors,
  } = useQuery<Author[]>({
    queryKey: ['authors'],
    queryFn: getAuthorsRequest,
  });

  useEffect(() => {
    if (data) {
      setComments((prevComments) => [...prevComments, ...data.data]);
    }
  }, [data]);

  useEffect(() => {
    if (authorsData) {
      setAuthors(authorsData);
    }
  }, [authorsData]);

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
      .map((comment) => {
        const author = authors.find((author) => author.id === comment.author);

        return (
          <Comment
            key={comment.id}
            comment={comment}
            author={author}
            onLike={handleLike}
            isLiked={likedComments.includes(comment.id)}
          >
            {renderComments(comment.id)}
          </Comment>
        );
      });
  };

  const totalLikes = comments.reduce((sum, comment) => sum + comment.likes, 0);
  const totalComments = comments.length;

  return (
    <CommentListContainer>
      <Header>
        <Text size="medium" weight="bold" color="white">
          {totalComments} комментариев
        </Text>
        <Flex gap="6px" align="center">
          <HeartIcon strokeColor="rgba(255, 255, 255, 0.5)" />
          <Text size="medium" weight="bold" color="white">
            {totalLikes}
          </Text>
        </Flex>
      </Header>
      {(isLoadingAuthors || isLoadingComments) && (
        <Flex height="100%" width="100%" align="center" justify="center">
          <img src={preloader} height={45} />
        </Flex>
      )}
      {(isErrorAuthors || isErrorComments) && (
        <Flex height="100%" width="100%" align="center" justify="center">
          <Text size="large" color="white">
            Ошибка. Попробуйте перезагрузить страницу
          </Text>
        </Flex>
      )}
      {!(isLoadingAuthors || isLoadingComments) &&
        !(isErrorAuthors || isErrorComments) && (
          <Content>{renderComments(null)}</Content>
        )}
      {(data?.pagination?.page || 0) < (data?.pagination?.total_pages || 0) && (
        <Flex width="100%" align="center" justify="center">
          <Button onClick={handleLoadMore} variant="secondary" width="200px">
            Загрузить еще
          </Button>
        </Flex>
      )}
    </CommentListContainer>
  );
};

export default CommentList;
