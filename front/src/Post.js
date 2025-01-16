import React from "react";
import PropTypes from "prop-types";

export default function Post({ post, likes }) {
  return (
    <>
      <article>
        <strong>{post.title}</strong>
        <br />
        <small>{post.body}</small>
        <br />
        Likes: {likes}
      </article>
      <br />
    </>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
  likes: PropTypes.number.isRequired,
};
