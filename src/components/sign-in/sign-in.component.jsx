import { useState, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/user/user.context';

import {
  signInWithGooglePopup,
} from '../../utils/firebase.utils';

import './sign-in.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser, currentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    setCurrentUser(user);
    console.log(user.uid);

    if (user.uid === "9Odo5sPzphaVOpq7B6DUBPG0v0W2") {
      navigate("/add-tour");
    } else {
      return;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div className='sign-in-container'>
      <h2>SIGN IN WITH GOOGLE</h2>
      <form onSubmit={handleSubmit}>

        <div className='buttons-container'>
          <button
            type='button'
            onClick={signInWithGoogle}
          >
            Sign In With Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;