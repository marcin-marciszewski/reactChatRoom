import React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteMessage } from '../../actions/messageActions';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

const MessageItem = ({ message, deleteMessage }) => {
  const onDelete = () => {
    deleteMessage(message._id);
    M.toast({ html: 'Message Deleted' });
  };
  return (
    <div className='bubble me'>
      <p className='date-text'>
        <Moment format='D MMMM YYYY, h:mm:ss a'>{message.date}</Moment>
      </p>
      {message.content}
      <a href='#!' onClick={onDelete} className='secondary-content'>
        <i className='material-icons grey-text'> delete </i>{' '}
      </a>{' '}
    </div>
  );
};

MessageItem.propTypes = {
  message: PropTypes.object.isRequired,
  deleteMessage: PropTypes.func.isRequired
};

export default connect(null, { deleteMessage })(MessageItem);
