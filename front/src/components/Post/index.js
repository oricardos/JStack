import React from "react";
import PropTypes from "prop-types";
import PostHeader from "../PostHeader";
import { Container, Subtitle, Likes } from "./styles";

export default function Post({ post, onRemove }) {
  return (
    <Container removed={post.removed}>
      <PostHeader post={post} onRemove={onRemove} />
      <br />
      <span>{post.subtitle}</span>
      <Subtitle>{post.body}</Subtitle>
      <Likes>Likes: {post.likes}</Likes>
    </Container>
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
