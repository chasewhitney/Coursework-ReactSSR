import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';


export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...UsersListPage,
        path:'/users',
      }
    ]
  }
];

// Use different syntax for react-router-config
// export default () => {
//   return (
//     <div>
//       <Route exact path='/' component={Home} />
//       <Route path='/users' component={UsersList} />
//     </div>
//   );
// };
