import { useEffect, useState } from 'react';
import axios from 'axios';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/posts')
            .then(res => setBlogs(res.data))
            .catch(err => {
                console.error(err);
                setError('Failed to load blogs.');
            });
    }, []);

    return (
        <div>
            <h1>All Blogs</h1>
            {error ? (
                <p>{error}</p>
            ) : blogs.length === 0 ? (
                <p>No blogs available.</p>
            ) : (
                blogs.map(blog => (
                    <div key={blog._id}>
                        <h2>{blog.title}</h2>
                        <p>{blog.content}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default BlogList;
