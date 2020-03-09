import {
  SetDialogsChatMessagesAC,
} from "../../../redux/dialogsReducer";
import { connect } from "react-redux";
import DialogsChat from "./dialogsChat";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = state => {
  return {
    dialogsChatMessages: state.dialogs.dialogsChatMessages,
    currentMessageText: state.dialogs.currentMessageText
  };
};

export default compose(
  connect(mapStateToProps, {SetDialogsChatMessagesAC}),
  withAuthRedirect
)(DialogsChat);
