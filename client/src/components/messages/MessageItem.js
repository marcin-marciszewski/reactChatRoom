import React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteMessage } from '../../actions/messageActions';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

const MessageItem = ({ user, message, deleteMessage }) => {
  const onDelete = () => {
    deleteMessage(message._id);
    M.toast({ html: 'Message Deleted' });
  };
  return (
    <div className={`bubble ${message.user === user ? 'me' : 'you'} `}>
      <p className='date-text'>~{message.user}</p>
      {message.content}
      <a href='#!' onClick={onDelete} className='secondary-content'>
        <i className='material-icons grey-text'> delete </i>{' '}
      </a>{' '}
      <p className='date-text'>
        <Moment format='D MMMM YYYY, h:mm:ss a'>{message.date}</Moment>
        {message.user}
      </p>
    </div>
  );
};

MessageItem.propTypes = {
  message: PropTypes.object.isRequired,
  user: PropTypes.object,
  deleteMessage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.message.user
});

export default connect(mapStateToProps, { deleteMessage })(MessageItem);
