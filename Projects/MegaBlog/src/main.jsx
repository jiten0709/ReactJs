import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthLayout } from './components/index.js'
import { Login, Signup, AllPosts, AddPost, EditPost, Post } from './pages/index.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        )
      },
      {
        path: '/signup',
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        )
      },
      {
        path: '/all-posts',
        element: (
          <AuthLayout authentication>
            {' '}
            <AllPosts />
          </AuthLayout>
        )
      },
      {
        path: '/add-post',
        element: (
          <AuthLayout authentication>
            {' '}
            <AddPost />
          </AuthLayout>
        )
      },
      {
        path: '/edit-post/:slug',
        element: (
          <AuthLayout authentication>
            {' '}
            <EditPost />
          </AuthLayout>

        )
      },
      {
        path: '/post/:slug',
        element: (
          <AuthLayout authentication>
            {' '}
            <Post />
          </AuthLayout>
        )
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
