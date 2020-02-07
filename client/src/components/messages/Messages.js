import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import MessageItem from './MessageItem';
import Preloader from '../layout/Preloader';
import PropTypes from 'prop-types';
import { getMessages } from '../../actions/messageActions';

const Messages = ({ message: { messages, loading }, getMessages }) => {
  useEffect(() => {
    getMessages();
    //eslint-disable-next-line
  }, []);

  if (loading || messages === null) {
    return <Preloader />;
  }
  return (
    // <ul className='collection with-header'>
    //   <li className='collection-header'>
    //     <h4 className='center'> System Logs </h4>{' '}
    //   </li>{' '}
    <div className='chat'>
      {!loading && messages.length === 0 ? (
        <p className='center'> No messages to show... </p>
      ) : (
        messages.map(message => (
          <MessageItem message={message} key={message._id} />
        ))
      )}{' '}
      <div className='bubble you'>
        saflasdjkfsaflasdjkfsaflasdjkfsaflasdjkfsaflasdjkfsaflasdjkfsaflasdjkfsaflasdjkfsaflasdjkfsaflasdjkfsaflasdjkfsaflasdjkf
      </div>
      <div className='bubble you'>
        saflasdjkfsaflasdjkfsaflasdjkfsaflasdjkfsaflasdjkfsaflasdjkfsaflasdjkfsaflasdjkfsaflasdjkfsaflasdjkfsaflasdjkfsaflasdjkfsaflasdjkfsaflasdjkfsaflasdjkfsaflasdjkfsaflasdjkfsaflasdjkfsaflasdjkfsaflasdjkfsaflasdjkfsaflasdjkfsaflasdjkfsaflasdjkfsaflasdjkfsaflasdjkfsaflasdjkfsaflasdjkfsaflasdjkfsaflasdjkfsaflasdjkfsaflasdjkfsaflasdjkfsaflasdjkfsaflasdjkfsaflasdjkfsaflasdjkf
      </div>{' '}
    </div>
  );
};

Messages.propTypes = {
  message: PropTypes.object.isRequired,
  getMessages: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  message: state.message
});

export default connect(mapStateToProps, {
  getMessages
})(Messages);
