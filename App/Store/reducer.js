import {MARKA, MODEL, REGION, TOKEN} from './action';

const initialState = {
  token: '',
  marka: '',
  model: '',
  region: '',
};

export default function appReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    // ------------------
    case TOKEN: {
      return {
        ...state,
        token: payload,
      };
    }
    // ------------------
    case MARKA: {
      return {
        ...state,
        marka: payload,
      };
    }
    // ------------------
    case MODEL: {
      return {
        ...state,
        model: payload,
      };
    }
    // ------------------
    case REGION: {
      return {
        ...state,
        region: payload,
      };
    }
    // ------------------
    default: {
      return state;
    }
  }
}
