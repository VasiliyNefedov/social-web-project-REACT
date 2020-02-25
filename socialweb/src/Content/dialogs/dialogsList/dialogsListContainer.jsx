import DialogsList from "./dialogsList";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    dialogsListItems: state.dialogs.dialogsListItems
  };
};

const DialogsListContainer = connect(mapStateToProps)(DialogsList);

export default DialogsListContainer;
