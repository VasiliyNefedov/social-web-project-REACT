
import { rerenderEntireTree } from './../render';


let state = {
  profile: {
    profileBlogItems: [
      { id: 1, message: "Hi all!", likesCount: 8 },
      { id: 2, message: "Glad to see you!", likesCount: 4 }
    ],
    currentPostText: ''
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
    currentMessageText: ''
  }
};

export let SetProfileBlogItems = () => {
  let newPost = { id: 5, message: state.profile.currentPostText, likesCount: 0 };
  state.profile.profileBlogItems.push(newPost);
  state.profile.currentPostText = '';
  rerenderEntireTree(state);
};

export let UpdateCurrentPostText = (currentText) => {
  state.profile.currentPostText = currentText;
  rerenderEntireTree(state);
};

export let SetDialogsChatMessages = () => {
  
  let newMessage = { id: 4, message: state.dialogs.currentMessageText };
  state.dialogs.dialogsChatMessages.push(newMessage);
  state.dialogs.currentMessageText = '';
  debugger;
  rerenderEntireTree(state);
};

export let UpdateCurrentMessageText = (currentText) => {
  state.dialogs.currentMessageText = currentText;
  rerenderEntireTree(state);
}



// export let AddProfileBlogPost = (postMessage) => {
//   let newPost = { id = 5, message = postMessage, likesCount = 0 };
//   state.profile.profileBlogItems.push(newPost);
// }

export default state;

window.state = state