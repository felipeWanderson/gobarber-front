import produce from 'immer';

const INICIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};
export default function auth(state = INICIAL_STATE, actions) {
  return produce(state, (draft) => {
    switch (actions.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = actions.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.signed = false;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.signed = false;
        break;
      }
      default:
    }
  });
}
