import React, { useState } from "react";

import Post from "./Post";
import Header from "./Header";

function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: "Título da notícia 01",
      subtitle: "Subtítulo da notícia 01",
      likes: 10,
      read: false,
    },
    {
      id: Math.random(),
      title: "Título da notícia 02",
      subtitle: "Subtítulo da notícia 02",
      likes: 20,
      read: true,
    },
    {
      id: Math.random(),
      title: "Título da notícia 03",
      subtitle: "Subtítulo da notícia 03",
      likes: 50,
      read: false,
    },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Título da notícia ${prevState.length + 1}`,
        subtitle: `Subtítulo da notícia ${prevState.length + 1}`,
        likes: Math.floor(Math.random() * 2),
      },
    ]);
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => prevState.filter((post) => post.id !== postId));
  }

  return (
    <>
      <Header title="Post da semana">
        <h2>Post da semana</h2>
        <button onClick={handleRefresh}>Atualizar</button>
      </Header>
      <hr />
      {posts.map((post) => (
        <Post
          onRemove={() => {
            handleRemovePost(post.id);
          }}
          read={post.read}
          key={post.id}
          title={post.title}
          subtitle={post.subtitle}
          likes={post.likes}
        />
      ))}
    </>
  );
}

export default App;
