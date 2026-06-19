import type { Post } from "../types";
import { useNavigate } from "react-router-dom";

interface Props {
  post: Post;
}

export default function PostCard({ post }: Props) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/post/${post.id}`)}
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        overflow: "hidden",
        cursor: "pointer",
        marginBottom: "16px",
        maxWidth: "400px"
      }}
    >
      <img
        src={post.image}
        alt={post.title}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover"
        }}
      />

      <div style={{ padding: "12px" }}>
        <h2 style={{ margin: 0 }}>{post.title}</h2>
        <p style={{ color: "#666" }}>{post.description}</p>
      </div>
    </div>
  );
}