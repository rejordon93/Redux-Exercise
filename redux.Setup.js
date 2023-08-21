const INITIAL_STATE = { faces: "ಠ_ಠ" };
const countReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "HAPPY":
      return { ...state, faces: "^_^" };
    case "SAD":
      return { ...state, faces: "⊙︿⊙" };
    case "ANGRY":
      return { ...state, faces: "⋋_⋌" };
    case "CONFUSED":
      return { ...state, faces: "(@_@)" };
    default:
      return state;
  }
};

const store = Redux.createStore(countReducer);
