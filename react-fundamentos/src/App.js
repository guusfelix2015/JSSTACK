import React from "react";

import Post from "./Post";
import Header from "./Header";

const posts = [
  {
    title: "Título da notícia 01",
    subtitle: "Subtítulo da notícia 01",
    likes: 10,
  },
  {
    title: "Título da notícia 02",
    subtitle: "Subtítulo da notícia 02",
    likes: 20,
  },
  {
    title: "Título da notícia 03",
    subtitle: "Subtítulo da notícia 03",
    likes: 50,
  },
];

function App() {
  return (
    <>
      <Header title="Post da semana">
        <h2>Post da semana</h2>
      </Header>
      <hr />
      {posts.map((post, index) => (
        <Post
          key={index}
          title={post.title}
          subtitle={post.subtitle}
          likes={post.likes}
        />
      ))}
    </>
  );
}

export default App;
