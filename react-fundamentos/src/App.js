import React from "react";

import Post from "./Post";

function App() {
  return (
    <>
      <h1>JSstack's blog</h1>
      <h2>Posts da semana</h2>

      <hr />
      <Post title="Título da notícia 01" subtitle="Subtítulo da notícia 01" />
      <Post title="Título da notícia 02" subtitle="Subtítulo da notícia 02" />
      <Post title="Título da notícia 03" subtitle="Subtítulo da notícia 03" />
    </>
  );
}

export default App;
