import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddUser = () => {
  const [user, setUser] = useState('');

  const onSubmit = () => {
    if (user === '') {
      M.toast({ html: 'Please enter the user name' });
    } else {
      console.log(user);
    }
  };
  return (
    <div id='add-user-modal' className='modal'>
      <div className='modal-content'>
        <h4>New User</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='user'
              value={user}
              onChange={e => setUser(e.target.value)}
            />
            <label htmlFor='user' className='active'>
              User Name
            </label>
          </div>
        </div>

        <div className='modal-footer'>
          <a
            href='#!'
            onClick={onSubmit}
            className='modal-close waves-effect blue waves-light btn'
          >
            Enter
          </a>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
