const SET_DIALOGS_CHAT_MESSAGES = "SET-DIALOGS-CHAT-MESSAGES";
const UPDATE_CURRENT_MESSAGE_TEXT = "UPDATE-CURRENT-MESSAGE-TEXT";

const dialogsReducer = (stateReducer, action) => {
  switch (action.type) {
    case SET_DIALOGS_CHAT_MESSAGES:
      let newMessage = {
        id: 4,
        message: stateReducer.currentMessageText
      };
      stateReducer.dialogsChatMessages.push(newMessage);
      stateReducer.currentMessageText = "";
      return stateReducer;
    case UPDATE_CURRENT_MESSAGE_TEXT:
      stateReducer.currentMessageText = action.currentText;
      return stateReducer;
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
