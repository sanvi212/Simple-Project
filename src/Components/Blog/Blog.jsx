import React from "react";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookmark, handleMarkAsRead}) => {
//   console.log(handleBookmark);
  return (
    <div className="m-5">
      <h2>{blog.id}</h2>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={blog.cover}
            alt="Blogs Cover"
          />
        </figure>

        <div>
            <div className="author flex justify-between mt-5">
                
                <img className="w-13 h-14 rounded-full item-center justify-center flex" src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/481239137_122139977000477182_1978439424223505988_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=F_vNHJEi4AUQ7kNvwH2q8H8&_nc_oc=AdmSMzTeZfYquNHPlVrjMkUhvMUkTzvwxJEkrhcOmCGu2OicfB1ANjfxJCyRbijDNwM&_nc_zt=23&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=DIGOj65aBBouPsVnoetFhg&oh=00_AfF-HU07DxaKjHDZN0imY-7ECzVAVlZnh_lkRUFs9rSJhw&oe=6810B015" alt="" />
                <h3 className="text-xl font-bold p-3">{blog.author}</h3>
            </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">{blog.title}</h2>


            <div className="flex mt-5">
            {
                blog.hashtags.map((hash) => <p key= {hash}className="">{hash}</p>)
            }
            </div>
         

          <div className="card-actions flex justify-between item-center my-4">
           
            <button onClick={() => handleMarkAsRead(blog.reading_time, blog.id)} className="btn btn btn-primary mt-4 ">Mark as read</button>

            <button onClick={() => handleBookmark(blog)}>
            <FaBookmark  size={30}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
