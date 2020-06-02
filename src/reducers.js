import { INCREMENT,DECREMENT } from "./action-types";

const initialState = {
  count:0
};

function rootReducer(state = initialState, action) {
  const {count} = state;
    
   
  switch(action.type) {
    case INCREMENT:
      return {count: count + 1  }
    case DECREMENT:
      return {count: count - 1 }
    default:
      return state;
  }
}

export default rootReducer;