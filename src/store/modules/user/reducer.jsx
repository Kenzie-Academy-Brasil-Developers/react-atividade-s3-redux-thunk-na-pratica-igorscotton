import { ADD_MESSAGE } from "./actionType";

const initialState = {name: "Kenzie", message: []}


const messageReducer = (state = initialState, action) => {

      switch (action.type) {
            case ADD_MESSAGE:
                  return action.updateUser
              default:
                  return state
      }

}

export default messageReducer