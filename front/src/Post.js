import React from "react";
import PropTypes from "prop-types";

export default function Post({ post, likes, onRemove }) {
  return (
    <>
      <article>
        <strong>{post.title}</strong>
        <button onClick={() => onRemove(post.id)}>Remover post</button>
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
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
  likes: PropTypes.number.isRequired,
  onRemove: PropTypes.func.isRequired,
};
