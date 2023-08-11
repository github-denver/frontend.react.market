const LOADING_START = "loading/LOADING_START";
const LOADING_FINISH = "loading/LOADING_FINISH";

export const loadingStart = (payload) => {
  return {
    type: LOADING_START,
    payload,
  };
};
export const loadingFinish = (payload) => {
  return {
    type: LOADING_FINISH,
    payload,
  };
};

const initialState = {};

function loading(state = initialState, action) {
  switch (action.type) {
    case LOADING_START:
      return {
        ...state,
        [action.payload]: true,
      };

    case LOADING_FINISH:
      return {
        ...state,
        [action.payload]: false,
      };

    default:
      return initialState;
  }
}

export default loading;
