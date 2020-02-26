import React from "react";

const Users = props => {
  if (props.userList.length === 0) {
    props.setUsers([
      {
        id: 1,
        fullName: "Chandler",
        status: "Hi all!",
        location: { country: "USA", city: "New-York" },
        followed: true,
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNg0mCcWWLrbjprtngxdGQQt3HiTxnmXaZ0XIzw9mQ9AZA7Xv0"
      },
      {
        id: 2,
        fullName: "Ross",
        status: "Hi all!",
        location: { country: "USA", city: "New-York" },
        followed: false,
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNg0mCcWWLrbjprtngxdGQQt3HiTxnmXaZ0XIzw9mQ9AZA7Xv0"
      },
      {
        id: 3,
        fullName: "Joe",
        status: "Hi all!",
        location: { country: "Mexico", city: "Mehico" },
        followed: true,
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNg0mCcWWLrbjprtngxdGQQt3HiTxnmXaZ0XIzw9mQ9AZA7Xv0"
      },
      {
        id: 4,
        fullName: "Monica",
        status: "Hi all!",
        location: { country: "USA", city: "New-York" },
        followed: true,
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNg0mCcWWLrbjprtngxdGQQt3HiTxnmXaZ0XIzw9mQ9AZA7Xv0"
      },
      {
        id: 5,
        fullName: "Raychel",
        status: "Hi all!",
        location: { country: "USA", city: "New-York" },
        followed: false,
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNg0mCcWWLrbjprtngxdGQQt3HiTxnmXaZ0XIzw9mQ9AZA7Xv0"
      },
      {
        id: 6,
        fullName: "Phoebe",
        status: "Hi all!",
        location: { country: "USA", city: "New-York" },
        followed: false,
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNg0mCcWWLrbjprtngxdGQQt3HiTxnmXaZ0XIzw9mQ9AZA7Xv0"
      }
    ]);
  }

  return (
    <div className="users">
      Users will be here
      {props.userList.map(el => (
        <div key={el.id}>
          <span>
            <div>
              <img src={el.avatar} alt=" :^( " />
            </div>
            <div>
              {el.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(el.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(el.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{el.fullName}</div>
              <div>{el.status}</div>
            </span>
            <span>
              <div>{el.location.country}</div>
              <div>{el.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
