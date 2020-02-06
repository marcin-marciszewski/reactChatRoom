import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

const MessageItem = ({ message }) => {
  return (
    <li className='collection-item'>
      <div>
        <a href=''> {message.content} </a>{' '}
        <span className='black-text'>
          <Moment format='D MMMM YYYY, h:mm:ss a'>{message.date}</Moment>
        </span>
        <a href='#!' className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>{' '}
    </li>
  );
};

MessageItem.propTypes = {};

export default MessageItem;
