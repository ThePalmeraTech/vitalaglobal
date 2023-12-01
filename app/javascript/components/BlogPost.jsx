import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`/api/v1/blog_posts/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        return response.json();
      })
      .then(data => setPost(data))
      .catch(error => console.error('Error:', error));
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className='container mt-5 pt-4'>
      <h1 className='mt-5'>{post.title}</h1>
      <img className='mt-3' src={post.featured_image_url} alt={post.title} />
      <p className='mt-3'>{post.content}</p>
      {/* Add any other post details you want to display */}
    </div>
  );
};

export default BlogPost;
