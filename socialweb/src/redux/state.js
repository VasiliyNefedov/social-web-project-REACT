let state = {
  profile: {
    profileBlogItems: [
      { id: 1, message: "Hi all!", likesCount: 8 },
      { id: 2, message: "Glad to see you!", likesCount: 4 }
    ]
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
      { id: 3, message: "Did you learn react.JS?" }
    ]
  }
};

export default state;
