import profileReducer, { SetProfileBlogItemsAC } from "./profileReducer";

test("post's list should be incremented", () => {
  //test data
  let action = SetProfileBlogItemsAC("testText");
  let state = {
    profileBlogItems: [
      { id: 1, message: "Hi all!", likesCount: 8 },
      { id: 2, message: "Glad to see you!", likesCount: 4 }
    ],
    currentPostText: "",
    displayProfile: null,
    status: "",
    isFetching: false
  };

  // action
  let newState = profileReducer(state, action);

  // expect
  expect(newState.profileBlogItems.length).toBe(3);
  expect(newState.profileBlogItems[2].message).toBe("testText");
});
