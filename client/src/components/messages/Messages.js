import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import MessageItem from './MessageItem';
import Preloader from '../layout/Preloader';
import PropTypes from 'prop-types';
import { getMessages } from '../../actions/messageActions';

const Messages = ({
  message: { messages, messages_search, loading },
  getMessages
}) => {
  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useInterval(() => {
    getMessages();
    //eslint-disable-next-line
  }, 2000);

  // useEffect(() => {
  //   getMessages();
  //   //eslint-disable-next-line
  // }, []);

  if (loading || messages === null) {
    return <Preloader />;
  } else if (messages_search !== null) {
    return (
      <div className='chat'>
        {!loading && messages_search.length === 0 ? (
          <p className='center'> No messages to show... </p>
        ) : (
          messages_search.map(message => (
            <MessageItem message={message} key={message._id} />
          ))
        )}{' '}
      </div>
    );
  } else {
    return (
      <div className='chat'>
        {!loading && messages.length === 0 ? (
          <p className='center'> No messages to show... </p>
        ) : (
          messages.map(message => (
            <MessageItem message={message} key={message._id} />
          ))
        )}{' '}
      </div>
    );
  }
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
