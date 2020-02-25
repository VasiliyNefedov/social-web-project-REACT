import {
  SetDialogsChatMessagesAC,
  UpdateCurrentMessageTextAC
} from "../../../redux/dialogsReducer";
import { connect } from "react-redux";
import DialogsChat from './dialogsChat';

let mapStateToProps = state => {
  return {
    dialogsChatMessages: state.dialogs.dialogsChatMessages,
    currentMessageText: state.dialogs.currentMessageText
  };
};
let mapDispatchToProps = dispatch => {
  return {
    UpdateCurrentMessageTextAC: text => {
      dispatch(UpdateCurrentMessageTextAC(text));
    },
    SetDialogsChatMessagesAC: () => {
      dispatch(SetDialogsChatMessagesAC());
    }
  };
};

const DialogsChatContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogsChat);

export default DialogsChatContainer;
