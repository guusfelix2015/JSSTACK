import React from "react";
import PropTypes from "prop-types";

export default function Post({ title, subtitle, likes, onRemove, read }) {
  return (
    <>
      <article>
        {read ? <s>{title}</s> : <h3>{title}</h3>}
        <button onClick={onRemove}>Remover</button>
        <small>{subtitle}</small>
        <br />
        Media: {likes / 2}
      </article>
      <br />
    </>
  );
}

Post.propTypes = {
  likes: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  read: PropTypes.bool,
};
