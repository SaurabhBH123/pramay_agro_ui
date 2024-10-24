import React, { useEffect, useState } from "react";
import LatestUpdates from "../components/LatestUpdates";
import axios from "axios";
import { BaseUrl } from "../config";
import { CiCalendarDate } from "react-icons/ci";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${BaseUrl}/api/get/Blogs`)
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  //   const totalPages = Math.ceil(blogs.length / itemsPerPage);

  //   const handleClick = (pageNumber) => {
  //     setCurrentPage(pageNumber);
  //   };

  //   const currentBlogs = blogs.slice(
  //     (currentPage - 1) * itemsPerPage,
  //     currentPage * itemsPerPage
  //   );

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        {blogs?.map((blog) => {
          return (
            <Link
              to={`/blogpage/${blog._id}`}
              className="card"
              key={blog._id}
              style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
            >
              <div className="card__image overflow-hidden rounded-lg mb-5">
                <img
                  className="object-cover"
                  src={blog.coverImage}
                  alt="Gaming"
                />
              </div>
              <div className="card__body">
                <div className="flex items-center ml-4 text-gray-600">
                  <CiCalendarDate className="text-lg mr-2" />
                  <p className="text-sm  font-bold">
                    {new Date(blog.createdAt).toDateString()}
                  </p>
                </div>
                <div className="card__title text-lg mb-2 font-bold font-heading ml-4 mt-2">
                  {blog.title}
                </div>
                {/* <div className="card__description text-sm text-grey-dark">
                  Microsoft has announced its acquisition of Bethesda in a $7.5
                  billion deal, expanding its gaming portfolio.
                </div> */}
              </div>
            </Link>
          );
        })}
      </div>
      {/* <div className="flex justify-center mt-6">
        <nav>
          <ul className="inline-flex items-center space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <li key={page}>
                <button
                  onClick={() => handleClick(page)}
                  className={`px-4 py-2 rounded ${
                    currentPage === page
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white"
                  }`}
                >
                  {page}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div> */}
    </div>
  );
};

export default Blogs;
