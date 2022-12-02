import React from 'react';
import PropTypes from 'prop-types';
import { postedAt } from '../utils';

function ThreadInfo({
  category, createdAt, name, email, avatar,
}) {
  return (
    <div className="flex justify-between">
      <div className="thread-item__info flex items-center">
        <p className="thread-item__category w-fit text-sm font-bold rounded-lg px-3 py-1 my-1 bg-white text-purple-700 drop-shadow-lg">
          #
          {category}
        </p>
        <p className="thread-item__created-at text-sm ml-3">{postedAt(createdAt)}</p>
      </div>
      <div className="thread-item__owner-avatar flex items-center gap-2">
        <div className="thread-item__owner-info flex flex-col items-end">
          <p className="thread-item__owner-name font-bold">{name}</p>
          <p className="thread-item__owner-id text-sm">
            {/* Take string before @ as display username */}
            @
            {email.substring(0, email.indexOf('@'))}
          </p>
        </div>
        <img src={avatar} alt={name} className="rounded-full" width={48} />
      </div>
    </div>
  );
}

ThreadInfo.propTypes = {
  category: PropTypes.string,
  createdAt: PropTypes.string.isRequired,
  name: PropTypes.string,
  email: PropTypes.string,
  avatar: PropTypes.string,
};

ThreadInfo.defaultProps = {
  category: '',
  name: '',
  email: '',
  avatar: '',
};

export default ThreadInfo;
