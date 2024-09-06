import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const { login } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    const user = { email, password };
    login(user); // Log in the user after sign-up
    navigate('/');
  };

  return (
    <div>
      <h2>Signup</h2>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;

// import React from 'react';

// const Signup = () => {
//   return (
//     <div>
//       <h2>Signup Page</h2>
//     </div>
//   );
// };

// export default Signup;
