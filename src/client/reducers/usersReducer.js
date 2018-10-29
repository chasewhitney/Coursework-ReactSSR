import { FETCH_USERS } from '../actions';

export default (state = [], action) => {
  switch(action.type) {
    case FETCH_USERS:
      console.log('payload is:', action.payload);
      return action.payload.data;
    default:
      return state;
  }
};
