import {
  SetDialogsChatMessagesAC,
  UpdateCurrentMessageTextAC
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



// let AuthRedirectComponent = withAuthRedirect(DialogsChat);

// const DialogsChatContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(AuthRedirectComponent);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(DialogsChat);
