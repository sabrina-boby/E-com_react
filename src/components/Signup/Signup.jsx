import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';

import "./Signup.css";
import Frame59 from "../../Assets/Frame59.png";
import Frame60 from "../../Assets/Frame60.png";
import Frame61 from "../../Assets/Frame61.png";
import visibility_off from "../../Assets/visibility_off.png";
import icon from "../../Assets/icon.png";

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
    <div className="container">
      <div className="signup">
        
      </div>
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
