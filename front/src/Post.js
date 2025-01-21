import React from "react";
import PropTypes from "prop-types";
import PostHeader from "./PostHeader";

export default function Post({ post, onRemove }) {
  return (
    <>
      <article>
        <PostHeader post={post} onRemove={onRemove} /><br />
        <span>{post.subtitle}</span><br />
        <small>{post.body}</small>
        <br />
        Likes: {post.likes}
      </article>
      <br />
    </>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};
