import React, { useState } from "react";
import Header from "./Header";
import Post from "./Post";
import { ThemeProvider } from "../context/ThemeContext";
import Title from "./Title";

function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: "Título do post1",
      subtitle: "Subtitulo do post1",
      body: "Corpo do post1",
      likes: 20,
      read: true,
      removed: true,
    },
    {
      id: Math.random(),
      title: "Título do post2",
      subtitle: "Subtitulo do post2",
      body: "Corpo do post2",
      likes: 10,
      read: false,
      removed: false,
    },
  ]);

  const handleAddPost = () => {
    setPosts([
      ...posts,
      {
        id: Math.random(),
        title: `Título do post${posts.length + 1}`,
        subtitle: `subtitulo do post${posts.length + 1}`,
        body: `Corpo do post${posts.length + 1}`,
        likes: 0,
        read: false,
      },
    ]);
  };

  const handleRemovePost = (postId) => {
    setPosts((prevState) =>
      prevState.map((post) =>
        post.id === postId ? { ...post, removed: true } : post
      )
    );
  };

  return (
    <ThemeProvider>
      <Header title="JStack's Blog">
        <Title as="h2">
          Posts da semana
          <button onClick={handleAddPost}>Adicionar Post</button>
        </Title>
      </Header>
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          likes={post.likes}
          onRemove={handleRemovePost}
        />
      ))}
    </ThemeProvider>
  );
}

export default App;
