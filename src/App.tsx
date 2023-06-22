import React from 'react';
import PostContainer from "./components/PostContainer";
import PostContainer2 from "./components/PostContainer2";
import UserItem from "./components/UserItem";

function App() {
  return (
    <div className="App">
      <h1>Списки пользователей и постов!</h1>
      <hr />
      <UserItem />
      <hr />
      <div style={{display: "flex"}}>
        <PostContainer />
        <PostContainer2 />
      </div>
    </div>
  );
}

export default App;
