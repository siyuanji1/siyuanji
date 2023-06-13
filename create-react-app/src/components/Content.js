import React, {useEffect, useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';


import HomePage from './Homepage';
import SearchPage from './SearchPage'
import ComparePage from "./ComparePage";
import ApplicationPage from "./Application";
import Detail from './DetailPage'
import FavoritePage from "./FavoritePage";
import SignInPage from './SigninPage';
import ErrorPage from './ErrorPage';
import ProtectedRoute from "../auth/protected.route";


const DEFAULT_USERS = [
    { userId: null, userName: "Log Out", userImg: '/img/null.png' }, //null user
]

export default function Content(props) {
    const [currentUser, setCurrentUser] = useState(DEFAULT_USERS[0]) //initially null;
    console.log("rendering App with user", currentUser);
  
  
    //effect to run when the component first loads
    useEffect(() => {
      //log in a default user
      //loginUser(DEFAULT_USERS[1])
  
      onAuthStateChanged(getAuth(), function(firebaseUser) {
        console.log("someone logged in or logged out!");
        if(firebaseUser) { //not null, so signed in
          //local changes
          firebaseUser.userId = firebaseUser.uid;
          firebaseUser.userName = firebaseUser.displayName;
          console.log(firebaseUser);        
        } 
        else { //signed out
         setCurrentUser(DEFAULT_USERS[0]);
        }
      })
    }, [])
    
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/compare" element={<ComparePage />} />
                <Route path="/app" element={<ApplicationPage />} />
                <Route path="/detail/:id" element={<Detail />} />
                <Route path="favorite" element={
                  <ProtectedRoute>
                    <FavoritePage />
                  </ProtectedRoute>
                } />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </div>
    );
}
