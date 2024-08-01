import React from 'react';

const LogOut = ({ setShowLogin }) => {
  const handleLogOut = () => {
    setShowLogin(true);
  };

  return (
    <button onClick={handleLogOut}>
      Log Out
    </button>
  );
};

export default LogOut;
