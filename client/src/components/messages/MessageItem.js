import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

const MessageItem = ({ message }) => {
  console.log(message.date);
  return (
    <div className='bubble me'>
      <p className='date-text'>
        <Moment format='D MMMM YYYY, h:mm:ss a'>{message.date}</Moment>
      </p>
      {message.content}
      <a href='#!' className='secondary-content'>
        <i className='material-icons grey-text'> delete </i>{' '}
      </a>{' '}
    </div>
  );
};

MessageItem.propTypes = {};

export default MessageItem;
