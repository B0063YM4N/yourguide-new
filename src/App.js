import React, { useEffect} from 'react';
import './App.css';
import {Routes , Route } from 'react-router-dom'
import { Home } from './components/routes/home/home.component';
import SignInForm from './components/sign-in/sign-in.component';
// import { addCollectionAndDocuments } from './utils/firebase.utils';

// import TOUR_DATA from './shop-data';

function App() {

  //  useEffect(() => {
  //   addCollectionAndDocuments("collection", TOUR_DATA)
  // }, [])
  return (
    <Routes>
       
       <Route path="/" element={<Home/>}/>
       <Route path='sign-in' element={<SignInForm />} />

         
    </Routes>
    
  );
}

export default App;
