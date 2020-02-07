import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addUser } from '../../actions/messageActions';

const AddUser = ({ addUser }) => {
  const [user, setUser] = useState('');

  const onSubmit = () => {
    if (user === '') {
      M.toast({ html: 'Please enter the user name' });
    } else {
      const newUser = {
        user
      };
      console.log(newUser);
      addUser(newUser);

      // Clear  Fields
      setUser('');
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

AddUser.propTypes = {
  addUser: PropTypes.func.isRequired
};

export default connect(null, { addUser })(AddUser);
