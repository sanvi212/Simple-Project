import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleBookmark, handleMarkAsRead}) => {

    const [blogs, setblogs] = useState([])


    useEffect(() => {
        fetch("blogs.json")
        .then(res => res.json())
        .then(data => setblogs(data))
    },[])

    // console.log(blogs)
   
    return (
        <div>
             <h1 className='text-3xl font-bold'>Available Total: {blogs.length}</h1>

             <div className="all-box grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    blogs.map((blog) =>  <Blog key={blog.id} blog={blog}npm install react-icons handleBookmark={handleBookmark} handleMarkAsRead ={handleMarkAsRead}></Blog>)
                }
             </div>
        </div>
    );
};

export default Blogs;