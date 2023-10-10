import React from 'react';
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Page from '../Page/Page';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Page404 from '../Page404/Page404';

function App() {

  return (
    <div className='app'>
      <Routes>
        <Route path='/'>
          <Route element={<Page />}>
            <Route index element={<Main />} />
            <Route path='movies' element={<Movies />} />
            <Route path='saved-movies' element={<SavedMovies />} />
            <Route path='profile' element={<Profile />} />
          </Route>
          <Route path='signup' element={<Register />} />
          <Route path='signin' element={<Login />} />
          <Route path='*' element={<Page404 />} />
        </Route>
      </Routes>
    </div>
  );

}

export default App;