import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";


let store = {
  _state: {
    profile: {
      profileBlogItems: [
        { id: 1, message: "Hi all!", likesCount: 8 },
        { id: 2, message: "Glad to see you!", likesCount: 4 }
      ],
      currentPostText: ""
    },
    dialogs: {
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
    },
    sidebar: {}
  },
  _callSubscriber() {},
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  SetProfileBlogItems() {
    let newPost = {
      id: 5,
      message: this._state.profile.currentPostText,
      likesCount: 0
    };
    this._state.profile.profileBlogItems.push(newPost);
    this._state.profile.currentPostText = "";
    this._callSubscriber(this._state);
  },
  UpdateCurrentPostText(currentText) {
    this._state.profile.currentPostText = currentText;
    this._callSubscriber(this._state);
  },
  SetDialogsChatMessages() {
    let newMessage = { id: 4, message: this._state.dialogs.currentMessageText };
    this._state.dialogs.dialogsChatMessages.push(newMessage);
    this._state.dialogs.currentMessageText = "";
    this._callSubscriber(this._state);
  },
  UpdateCurrentMessageText(currentText) {
    this._state.dialogs.currentMessageText = currentText;
    this._callSubscriber(this._state);
  },
  dispatch(action) {
    this._state.profile = profileReducer(this._state.profile, action);
    this._state.dialogs = dialogsReducer(this._state.dialogs, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  }
};

export default store;

window.store = store;
