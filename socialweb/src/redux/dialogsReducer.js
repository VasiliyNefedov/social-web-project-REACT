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
      let newMessage = {
        id: 4,
        message: stateReducer.currentMessageText
      };
      let stateCopy = {
        ...stateReducer,
        dialogsChatMessages: [...stateReducer.dialogsChatMessages]
      };

      if (stateReducer.currentMessageText !== "") {
        stateCopy.dialogsChatMessages.push(newMessage);
      } else {
        return stateReducer;
      }
      stateCopy.currentMessageText = "";
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

export const SetDialogsChatMessagesAC = () => ({
  type: SET_DIALOGS_CHAT_MESSAGES
});

export const UpdateCurrentMessageTextAC = text => ({
  type: UPDATE_CURRENT_MESSAGE_TEXT,
  currentText: text
});

export default dialogsReducer;
