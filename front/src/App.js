import React from "react";
import Header from "./Header";
import Post from "./Post";

function App() {
  const posts = [
    { title: "Título do post1", body: "Corpo do post1", likes: 20 },
    { title: "Título do post2", body: "Corpo do post2", likes: 10 },
  ];

  return (
    <>
      <Header title="JStack's Blog">
        <h2>Posts da semana</h2>
      </Header>
      {posts.map((post, index) => (
        <Post key={index} post={post} likes={post.likes} />
      ))}
    </>
  );
}

export default App;
