import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BaseUrl } from "../config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BlogPage = () => {
    const [blog, setBlog] = useState({})
    const [otherBlogs,setOtherBlogs] = useState([])
    const {id} = useParams()
    const [comment, setComment] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(()=>{
        axios.get(`${BaseUrl}/api/get/blog/${id}`)
        .then((res)=>{
            setBlog(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[id])

    useEffect(() => {
        axios
          .get(`${BaseUrl}/api/get/Blogs`)
          .then((res) => {
            const filteredArr = res.data.filter((item) => item._id != id)
            setOtherBlogs(filteredArr)
          })
          .catch((err) => {
            console.log(err.message);
          });
      }, [id]);

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        
        axios.post(`${BaseUrl}/api/post/comment/${id}`,{comment, name, email})
        .then((res)=>{
            toast.success(res.data.message);
            setComment("");
            setName("");
            setEmail("");
        })
        .catch((err)=>{
            console.log(err)
        })
        
      };
  return (
    <>
    <div className="max-w-7xl mx-auto p-8 mt-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Main Blog Content */}
        <div className="md:col-span-2 bg-white rounded-lg overflow-hidden ">
          {/* Cover Image */}
          <img
            src={blog?.coverImage}
            alt={blog?.title}
            className="w-full h-64 object-cover border-t border-r border-l border-gray-200"
          />

          {/* Blog Content */}
          <div className="p-6 border-l border-r border-b border-gray-200">
            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{blog.title}</h1>

            {/* Content */}
            {blog?.content?.map((section) => (
              <div key={section._id} className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {section.heading}
                </h2>
                {section.paragraphs.map((para, index) => (
                  <p key={index} className="text-gray-700 text-base mb-4">
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Comment Section */}
          <div className="p-6 border border-gray-200 mt-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Leave a Comment</h2>
            <form onSubmit={handleCommentSubmit}>
              <div className="mb-4">
                <label htmlFor="comment" className="block text-gray-700 font-medium mb-2">
                  Comment
                </label>
                <textarea
                  id="comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  rows="5"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your comment here..."
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
              >
                Post Comment
              </button>
            </form>
          </div>
        </div>

        {/* Sidebar with Other Blogs */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Latest Blogs</h2>
          {otherBlogs.map((otherBlog) => (
            <Link
            to={`/blogpage/${otherBlog._id}`}
            className="card"
            key={otherBlog._id}
            style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
          >
            <div
              key={otherBlog._id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={otherBlog.coverImage}
                alt={otherBlog.title}
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{otherBlog.title}</h3>
                <p className="text-gray-600 text-sm mt-2">
                  {otherBlog.content[0]?.heading}
                </p>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    <ToastContainer />
    </>
  );
};

export default BlogPage;