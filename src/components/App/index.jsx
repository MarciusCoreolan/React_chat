import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Contacts from '../Contacts/Index';
import { useDispatch } from 'react-redux';
import { loadApplicaton } from '../../redux/ducks/application';

function App(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadApplicaton());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
