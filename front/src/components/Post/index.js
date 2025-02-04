import React from "react";
import PropTypes from "prop-types";
import PostHeader from "../PostHeader";
import * as styles from "./Post.scss";

console.log(styles);
export default function Post({ post, onRemove }) {
  return (
    <article className={post.removed ? styles.postRemoved : styles.post}>
      <PostHeader post={post} onRemove={onRemove} />
      <br />
      <span>{post.subtitle}</span>
      <br />
      <small>{post.body}</small>
      <br />
      Likes: {post.likes}
    </article>
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
    removed: PropTypes.bool.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};
