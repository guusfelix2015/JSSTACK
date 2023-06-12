import React from "react";

export default function Post({ title, subtitle }) {
  return (
    <>
      <article>
        <h3>{title}</h3>
        <small>{subtitle}</small>
      </article>
      <br />
    </>
  );
}
