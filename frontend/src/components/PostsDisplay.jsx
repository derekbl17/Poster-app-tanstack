import { usePostsQuery } from "../api/post";
import { Container, Row, Col } from "react-bootstrap";
import PostCard from "./PostCard";

const PostsDisplay = () => {
  const { data: posts, isLoading, error } = usePostsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error)
    return (
      <Container className="mt-4">
        <div className="alert alert-danger">
          Error loading posts: {error.message}
        </div>
      </Container>
    );

  return (
    <Container className="mt-4">
      <Row>
        {posts.data?.map((post) => (
          <Col md={4} key={post._id} className="mb-4">
            <PostCard post={post} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PostsDisplay;
