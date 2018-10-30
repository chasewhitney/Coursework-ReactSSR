import React from 'react';

import Home from './components/Home';
import UsersList, { loadData } from './components/UsersList';

export default [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    loadData,
    path:'/users',
    component: UsersList
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
