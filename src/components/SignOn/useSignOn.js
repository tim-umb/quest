/**********************************************************************
 *
 *   Component hook generated by Quest
 *
 *   Code Logic for the component goes in this hook
 *   To setup bindings that use the data here or call the functions here, use the Quest editor
 *   Do not change the name of the hook
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
const useSignOn = () => {
  const [username, setUsername] = useState('');

  const [password, setPassword] = useState('');
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // submit logic here
  };
  const isValidPassword = password.length >= 8;

  const data = { username, password };

  const fns = {
    handleUsernameChange,
    handlePasswordChange,
    handleSubmit,
    isValidPassword,
  };

  return { data, fns };
};

export default useSignOn;
