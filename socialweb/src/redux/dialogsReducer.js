const SET_DIALOGS_CHAT_MESSAGES = "SET-DIALOGS-CHAT-MESSAGES";
const UPDATE_CURRENT_MESSAGE_TEXT = "UPDATE-CURRENT-MESSAGE-TEXT";

let initialState = {
  dialogsListItems: [
    { name: "Chandler", id: 1 },
    { name: "Ross", id: 2 },
    { name: "Joe", id: 3 },
    { name: "Monica", id: 4 },
    { name: "Raychel", id: 5 },
    { name: "Phoebe", id: 6 }
  ],
  dialogsChatMessages: [
    { id: 1, message: "Hi!" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Do you learn react.JS?" }
  ],
  currentMessageText: ""
};

const dialogsReducer = (stateReducer = initialState, action) => {
  switch (action.type) {
    case SET_DIALOGS_CHAT_MESSAGES: {
      if (!action.text) return stateReducer;
      let newMessage = {
        id: 4,
        message: action.text
      };
      let stateCopy = {
        ...stateReducer,
        dialogsChatMessages: [...stateReducer.dialogsChatMessages]
      };
      stateCopy.dialogsChatMessages.push(newMessage);
      return stateCopy;
    }
    case UPDATE_CURRENT_MESSAGE_TEXT: {
      let stateCopy = { ...stateReducer };
      stateCopy.currentMessageText = action.currentText;
      return stateCopy;
    }
    default:
      return stateReducer;
  }
};

//ACTION CREATORs:

export const SetDialogsChatMessagesAC = text => ({
  type: SET_DIALOGS_CHAT_MESSAGES,
  text: text
});

export default dialogsReducer;
