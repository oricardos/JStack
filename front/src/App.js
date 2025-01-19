import React, { useState } from "react";
import Header from "./Header";
import Post from "./Post";

function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: "Título do post1",
      body: "Corpo do post1",
      likes: 20,
    },
    {
      id: Math.random(),
      title: "Título do post2",
      body: "Corpo do post2",
      likes: 10,
    },
  ]);

  const handleAddPost = () => {
    setPosts([
      ...posts,
      {
        id: Math.random(),
        title: `Título do post${posts.length + 1}`,
        body: `Corpo do post${posts.length + 1}`,
        likes: 0,
      },
    ]);
  };

  const handleRemovePost = (postId) => {
    setPosts((prevState) => prevState.filter((post) => post.id !== postId));
  };

  return (
    <>
      <Header title="JStack's Blog">
        <h2>
          Posts da semana
          <button onClick={handleAddPost}>Adicionar Post</button>
        </h2>
      </Header>
      {posts.map((post) => (
        <>
          <Post
            key={post.id}
            post={post}
            likes={post.likes}
            onRemove={handleRemovePost}
          />
        </>
      ))}
    </>
  );
}

export default App;
