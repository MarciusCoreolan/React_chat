import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Contacts from '../Contacts/Index';
import { useDispatch } from 'react-redux';
import { loadApplicaton } from '../../redux/ducks/application';
import StartPage from '../Chat/StartPage';
import Chat from '../Chat/index';

function App(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadApplicaton());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path={'/contact/:id'} element={
          <>
            <Contacts />
            <div className={'chat_profile_block'}>
              <Chat />
            </div>
          </>
        } />
        <Route path={'/'} element={
          <>
            <Contacts />
            <StartPage />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
