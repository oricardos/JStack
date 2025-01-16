import React from "react";
import Header from "./Header";
import Post from "./Post";

function App() {
  return (
    <>
      <Header title="JStack's Blog">
        <h2>Posts da semana</h2>
      </Header>

      <Post 
        post={{ title: "Título do post1", body: "Corpo do post1"}}
        likes={20}
      />
      <Post 
        post={{ title: "Título do post2", body: "Corpo do post2"}}
        likes={10}
      />
    </>
  );
}

export default App;
