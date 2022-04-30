import { addMessage } from "./action";

export const addMessageThunk = (comment) => {
      return (dispatch, getState) => {
            const {user} = getState();
            const uptadeUser = {...user, message: [...user.message, comment]}
            dispatch(addMessage(uptadeUser))
      }
}

