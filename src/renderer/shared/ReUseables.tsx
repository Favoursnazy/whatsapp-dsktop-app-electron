import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { IChatBubble, IChatHead, IListItem } from './types';
import { ReactComponent as SendCheckMarks } from '../../../assets/icons-svg/checkmark-double.svg';
import { ReactComponent as AngleRightIcon } from '../../../assets/icons-svg/angle-right (1).svg';

export const ChatHead = React.memo(({ data }: { data: IChatHead }) => {
  const { conversationId } = useParams();
  return (
    <Link
      to={'/chat/' + data.id}
      className={
        (conversationId as unknown as number) == data.id
          ? 'chat-head-container active'
          : 'chat-head-container'
      }
    >
      <div className="chat-head-inner">
        <div>
          <img src={data.profileImage} />
        </div>
        <div className="chat-head-details">
          <div>
            <div className="user_name">{data.name}</div>
            <div>Yesterday</div>
          </div>
          <div className="last-message">{data.lastMessage}</div>
        </div>
      </div>
    </Link>
  );
});

export const ChatBubble = React.memo(
  ({ chat, sent }: { chat: IChatBubble; sent: boolean }) => {
    return (
      <div
        className={
          sent ? 'chat-bubble-container sent' : 'chat-bubble-container incoming'
        }
      >
        <div className="chat-bubble-inner">
          <div>{chat.message}</div>
          <div>
            <span>05:58</span>
            <SendCheckMarks />
          </div>
        </div>
      </div>
    );
  },
);

export const ListItem = React.memo(
  ({
    icon,
    title,
    isRoute = false,
    info,
    style,
    className,
    route,
  }: IListItem) => {
    const navigate = useNavigate();
    return (
      <div
        className={`list-item ${className}`}
        style={style}
        onClick={() => (route == undefined ? null : navigate(route))}
      >
        <div>
          {icon && <div>{icon}</div>}
          <div>
            <div>{title}</div>
            <div className="info">{info}</div>
          </div>
        </div>
        {isRoute && (
          <div>
            <AngleRightIcon className="no-fill" />
          </div>
        )}
      </div>
    );
  },
);

export const ListGroup = React.memo((props: any) => {
  return <div className="list-group">{props.children}</div>;
});
