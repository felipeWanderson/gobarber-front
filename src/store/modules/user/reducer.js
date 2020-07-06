import produce from 'immer';

const INICIAL_STATE = {
  profile: null,
};
export default function user(state = INICIAL_STATE, actions) {
  return produce(state, (draft) => {
    switch (actions.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = actions.payload.user;
        break;
      }
      case '@user/UPDATE_PROFILE_SUCCESS': {
        draft.profile = actions.payload.profile;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.profile = null;
        break;
      }
      default:
    }
  });
}
