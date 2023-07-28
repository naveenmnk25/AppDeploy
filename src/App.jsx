import React from 'react';
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/home/Home';
// import Aboutpage from './components/about/About';
import HeaderPage from './components/layout/header';
import FooderPage from './components/layout/fooder';
import Ordernavicate from './components/routing/order';
import NomatchPage from './components/layout/nomatch';
import ProductPage from './components/routing/Product';
import "./app.css";
import PrimaryPage from './components/routing/products/Primary';
import SecondaryPage from './components/routing/products/Secondary';
import UserPage from './components/Users/Users';
import UserDetails from './components/Users/UserDetails';
import AdminUser from './components/Users/Admin';
import ProfilePage from './components/profile/Profile';
import { AuthProvider } from './auth/auth';
import LoginPage from './components/loging/Login';
import { RequireAuth } from './auth/RequiredAuth';

const LazyAbout = React.lazy(() => import('./components/about/About'))


function App() {
  const [userList, setuserList] = useState(() => {
    const LocalVal = localStorage.getItem("items");
    if (LocalVal == null) return []

    return JSON.parse(LocalVal);
  });
  function Addlist(name, password) {
    setuserList(currentUsers => {
      return [
        ...currentUsers,
        { id: crypto.randomUUID(), userName: name, password: password, completed: false }
      ]
    })
  }
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(userList));
  }, [userList])

  function toggleTodo(id, completed) {
    setuserList(currentUsers => {
      return currentUsers.map(list => {
        if (list.id === id) {
          return { ...list, completed }
        }
        return list;
      })
    })
  }
  function handleDelete(id) {
    setuserList(currentUsers => {
      return currentUsers.filter(x => x.id != id);
    })
  }
  return (
    <>

      <div className="container height" >
        <AuthProvider>
          <HeaderPage />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='about' element={
              <React.Suspense fallback='Loading ...'>
                <LazyAbout />
              </React.Suspense>
            } />
            <Route path='product' element={<ProductPage />} >
              <Route index element={<PrimaryPage />} />
              <Route path='primary' element={<PrimaryPage />} />
              <Route path='secondary' element={<SecondaryPage />} />
            </Route>
            <Route path='order' element={<Ordernavicate />} />
            <Route path='user' element={<UserPage />} >
              <Route path=':userId' element={<UserDetails />} />
              <Route path='admin' element={<AdminUser />} />
            </Route>
            <Route path='profile' element={
              <RequireAuth>
                <ProfilePage />
              </RequireAuth>
            } />
            <Route path='login' element={<LoginPage />} />
            <Route path='*' element={<NomatchPage />} />
          </Routes>
          <FooderPage />
        </AuthProvider>
      </div>

    </>
  )
}

export default App;
