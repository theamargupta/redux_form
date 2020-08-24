import React from 'react';
import { auth } from '../../firebase';

const Home = () => {
  return (
    <div>
      Home
      <button onClick={() => auth.signOut()}>SignOut</button>
    </div>
  );
};

export default Home;
