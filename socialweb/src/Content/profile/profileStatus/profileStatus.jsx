import React from "react";
import style from "./profileStatus.module.css";
import PreloaderMini from "../../../common/preloader/preloaderMini";

class ProfileStatus extends React.Component {
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
  updateStatus = () => {
    if (this.state.status === undefined) {
      this.setState({ status: "" });
    }
    this.setState({ status: this.props.updateUserStatus(this.state.status) });
  };
  onStatusChange = e => {
    this.setState({ status: e.currentTarget.value });
  };

  render() {
    return (
      <div className="profileStatus">
        {this.state.editMode ? (
          <div
            onBlur={() => setTimeout(this.deactivateEditMode, 1000)}
            // onBlur={this.deactivateEditMode}
            className={style.profileStatusContainer}
          >
            <textarea
              onClick={this.onStatusChange}
              onChange={this.onStatusChange}
              value={this.state.status}
              className={style.textarea}
              placeholder="Write your status here..."
            ></textarea>
            {!this.props.isFetching ? (
              <button
                onClick={this.updateStatus}
                className={style.button}
              >
                Send
              </button>
            ) : (
              <PreloaderMini className={style.preloader} />
            )}
          </div>
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
