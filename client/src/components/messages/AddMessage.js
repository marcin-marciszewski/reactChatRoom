import React, { useState, Fragment } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
const AddMessage = () => {
  const [content, setContent] = useState('');
  const [user, setUser] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (content === '') {
      M.toast({ html: 'Please enter a message' });
    } else {
      console.log(content);
    }
  };

  return (
    <Fragment>
      <div>
        <a
          href='#add-user-modal'
          className='btn-floating btn-large red modal-trigger '
        >
          <i className='material-icons'> person_add </i>{' '}
        </a>{' '}
      </div>
      {/* <form onSubmit={onSubmit} className='col s12'>
        <div className='row'>
          <div className='input-field col s8 offset-s2 message-field'>
            <i className='material-icons prefix'>mode_edit</i>
            <textarea
              id='icon_prefix2'
              name='content'
              className='materialize-textarea'
              value={content}
              onChange={e => setContent(e.target.value)}
            ></textarea>
            <label htmlFor='icon_prefix2'>Message</label>

            <button
              className='btn waves-effect waves-light blue'
              type='submit'
              name='action'
            >
              Submit
              <i className='material-icons right '>send</i>
            </button>
          </div>
        </div>
      </form> */}
    </Fragment>
  );
};

export default AddMessage;
