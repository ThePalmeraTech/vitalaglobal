import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const BlogPosts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  useEffect(() => {
    const url = `/api/v1/blog_posts?page=${currentPage}&limit=${postsPerPage}`;

    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => setPosts(res))
      .catch(() => navigate("/")); // Redirects to home on error
  }, [currentPage, postsPerPage]);

  const noPosts = (
    <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
      <h4>
        No blog posts yet. Why not <Link to="/new_post">create one</Link>
      </h4>
    </div>
  );

  // Calculate page count
  const pageCount = Math.ceil(posts.length / postsPerPage);

  // Functions to handle page changes
  const handlePreviousPage = () => {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage => Math.min(currentPage + 1, pageCount));
  };

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Map over the current posts instead of all posts
  const postList = currentPosts.map((post) => (
    <div key={post.id} className="col-md-6 col-lg-4">
      <div className="card mb-4">
        <img src={post.featured_image_url} alt={post.title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.content}</p>
          <Link to={`/blog-posts/${post.id}`} className="btn btn-sm custom-button">
            Read More
          </Link>
        </div>
      </div>
    </div>
  ));

  // Render pagination controls
  const renderPaginationControls = () => (
    <div className="pagination-controls container text-center">
      <button className="btn btn-primary btn-sm m-2" onClick={handlePreviousPage} disabled={currentPage === 1}>
        Previous
      </button>
      <span>Page {currentPage} of {pageCount}</span>
      <button className="btn btn-primary btn-sm m-2" onClick={handleNextPage} disabled={currentPage === pageCount}>
        Next
      </button>
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
      <div className="py-2">
        <main className="container">
          <div className="text-end mb-3">
          </div>
          <div className="row">
            {posts.length > 0 ? postList : noPosts}
          </div>
          {renderPaginationControls()}
        </main>
      </div>
    </>
  );
};

export default BlogPosts;
