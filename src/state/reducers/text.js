const initState = {
  auth: false,
  user: null,
};

const counter = (state = initState, action) => {
  switch (action.type) {
    case "user":
      return { ...state, user: action.payload };

    case "auth":
      return { ...state, auth: action.auth };

    default:
      return state;
  }
};

export default counter;
