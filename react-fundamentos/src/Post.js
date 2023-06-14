import React from "react";
import PropTypes from "prop-types";

export default function Post({ title, subtitle, likes }) {
  return (
    <>
      <article>
        <h3>{title}</h3>
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
};
