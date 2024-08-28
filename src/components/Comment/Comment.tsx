import React from 'react';
import { Data, Author } from 'types';
import HeartIcon from '../HeartIcon/HeartIcon';
import { CommentContainer, Avatar, AuthorInfo } from './styles';
import { Text } from 'ui-kit';
import moment from 'moment';
import { Flex } from '../Flex/Flex';

interface CommentProps {
  comment: Data;
  author?: Author;
  isLiked: boolean;
  onLike: (id: number) => void;
  children?: React.ReactNode;
}

const formatDate = (date: string): string => {
  const now = moment();
  const inputDate = moment(date);
  const diffMinutes = now.diff(inputDate, 'minutes');
  const diffHours = now.diff(inputDate, 'hours');

  if (diffMinutes < 60) {
    return `${diffMinutes} ${diffMinutes === 1 ? 'минуту' : diffMinutes < 5 ? 'минуты' : 'минут'} назад`;
  }

  if (diffHours < 24) {
    return `${diffHours} ${diffHours === 1 ? 'час' : diffHours < 5 ? 'часа' : 'часов'} назад`;
  }

  return inputDate.format('DD.MM.YYYY, HH:mm:ss');
};

const Comment: React.FC<CommentProps> = ({
  comment,
  author,
  isLiked,
  onLike,
  children,
}) => {
  console.log(comment);

  return (
    <CommentContainer>
      <Flex direction="row" width="100%" gap="24px">
        <Avatar src={author?.avatar} alt={author?.name} />
        <AuthorInfo style={{ marginRight: '24px' }}>
          <Text weight="bold" color="white">
            {author?.name}
          </Text>
          <Flex width="100%" justify="space-between">
            <Text weight="bold" color="rgba(255, 255, 255, 0.5)" size="small">
              {formatDate(comment.created)}
            </Text>
            <Flex gap="12px" align="center">
              <HeartIcon
                filled={isLiked}
                onClick={() => onLike(comment.id)}
                clickable
              />
              <Text weight="bold" color="white">
                {comment.likes}
              </Text>
            </Flex>
          </Flex>
          <Text color="white">{comment.text}</Text>
        </AuthorInfo>
      </Flex>
      <div style={{ marginLeft: '24px' }}>{children}</div>
    </CommentContainer>
  );
};

export default Comment;
