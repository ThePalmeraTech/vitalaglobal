import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const BlogPosts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const url = "/api/v1/blog_posts";
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => setPosts(res))
      .catch(() => navigate("/")); // Redirects to home on error
  }, []);

  const allPosts = posts.map((post) => (
    <div key={post.id} className="col-md-6 col-lg-4">
      <div className="card mb-4">
        <img src={post.featured_image_url} alt={post.title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.content}</p>
          <Link to={`/blog_posts/${post.id}`} className="btn custom-button">
            Read More
          </Link>
        </div>
      </div>
    </div>
  ));

  const noPosts = (
    <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
      <h4>
        No blog posts yet. Why not <Link to="/new_post">create one</Link>
      </h4>
    </div>
  );

  return (
    <>
      <section className="jumbotron jumbotron-fluid text-center">
        <div className="container py-5">
          <h1 className="display-4">Blog Posts</h1>
          <p className="lead text-muted">
            Explore blog posts created by our community
          </p>
        </div>
      </section>
      <div className="py-5">
        <main className="container">
          <div className="text-end mb-3">
            <Link to="/blog_posts/new" className="btn custom-button">
              Create New Post
            </Link>
          </div>
          <div className="row">
            {posts.length > 0 ? allPosts : noPosts}
          </div>
          <Link to="/" className="btn btn-link">
            Home
          </Link>
        </main>
      </div>
    </>
  );
};

export default BlogPosts;
