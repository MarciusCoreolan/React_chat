import React, { useEffect } from "react";
import { loadApplicaton } from "../../redux/ducks/application";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import StartPage from "../Chat/StartPage";
import Contacts from "../Contacts/Index";
import Chat from "../Chat";
import Profile from "../Profile/Index";

function App() {
  const dispatch = useDispatch();
  const darkTheme = useSelector((state) => state.application.darkTheme);

  useEffect(() => {
    dispatch(loadApplicaton());
  }, [dispatch]);

  return (
    <div
      className={darkTheme ? "container-dark" : "container"}
      name={darkTheme ? "dark" : null}
    >
      <Routes>
        <Route
          path={"/contact/:id"}
          element={
            <>
              <Contacts />
              <div className={"chat_profile_block"}>
                <Chat />
                <Profile />
              </div>
            </>
          }
        />
        <Route
          path={"/"}
          element={
            <>
              <Contacts />
              <StartPage />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
