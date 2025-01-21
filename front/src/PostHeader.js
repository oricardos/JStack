import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

export default function PostHeader({ post, onRemove }) {
  return (
    <>
      <strong>{post.read ? <s>{post.title}</s> : post.title}</strong>
      <Button onClick={() => onRemove(post.id)} id={post.id}>Remover Post</Button>
    </>
  );
}

PostHeader.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
  }),
};
