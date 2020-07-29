// eslint-disable-next-line 
import React from 'react';
import './App.css';
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginPage from './components/pages/login/LoginPage'
import RegisterPage from './components/pages/register/RegisterPage'
import DashBoard from './components/pages/dasboard/DashBoard';
import UsersPage from './components/pages/users/UsersPage';
import BlogsPage from './components/pages/blogs/Blogs';
import SiswaPage from './components/pages/siswaPage/SiswaPage';

function App() {
  return (
    <>

      <Router>

        <Switch>

          <Route path='/siswa'>
            <DashBoard>

              <SiswaPage />

            </DashBoard>
          </Route>


          <Route path='/blogs'>
              <DashBoard>
                <BlogsPage/>
              </DashBoard>
            </Route>
         

            <Route path='/users'>
              <DashBoard>
                <UsersPage />
              </DashBoard>
            </Route>

            <Route path='/dashboard'>
              <DashBoard />
            </Route>

            <Route path='/register'>
              <RegisterPage />
            </Route>

            <Route path='/'>
              <LoginPage />
            </Route>

            <Route exact path='/dashboard/:slug' component={DashBoard}/>
  

            <Route>
              <LoginPage />
            </Route>

        </Switch>

      </Router>

    </>
  );
}

export default App;
