import React from "react";

import Post from "./Post";
import Header from "./Header";

function App() {
  return (
    <>
      <Header title="Post da semana">
        <h2>Post da semana</h2>
      </Header>
      <hr />
      <Post
        title="Título da notícia 01"
        subtitle="Subtítulo da notícia 01"
        likes={10}
      />
      <Post
        title="Título da notícia 02"
        subtitle="Subtítulo da notícia 02"
        likes={20}
      />
      <Post
        title="Título da notícia 03"
        subtitle="Subtítulo da notícia 03"
        likes={50}
      />
    </>
  );
}

export default App;
