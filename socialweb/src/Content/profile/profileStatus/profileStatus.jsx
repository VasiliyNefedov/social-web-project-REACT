import React from "react";
import style from "./profileStatus.module.css";
// import PreloaderMini from "../../../common/preloader/preloaderMini";
import { StatusReduxForm } from "./statusForm";

class ProfileStatus extends React.Component {
  onSubmit = formData => {
    this.deactivateEditMode();
    return this.props.updateUserStatus(formData.statusText);
  };
  state = {
    editMode: false,
    status: this.props.status
  };
  componentDidMount = () => {
    this.setState({ status: this.props.status });
  };
  activateEditMode = () => {
    this.setState({ editMode: true });
  };
  deactivateEditMode = () => {
    this.setState({ editMode: false });
    // this.props.updateUserStatus(this.state.status);
  };

  render() {
    return (
      <div className="profileStatus">
        {this.state.editMode ? (
          <StatusReduxForm
            onSubmit={this.onSubmit}
            onBlur={this.deactivateEditMode}
          />
        ) : (
          <div className={style.profileStatusContainer}>
            <textarea
              onClick={this.activateEditMode}
              value={this.props.status}
              className={style.textarea}
              placeholder="Write your status here..."
            ></textarea>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
