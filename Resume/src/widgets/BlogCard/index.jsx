import React from "react";
import "./index.css";
import { MdOutlineMessage } from "react-icons/md";

const BlogCard = ({ time, what, where }) => {
  return (
    <>
      <div className="col-md-4 experience p-5 w-100 d-flex">
        <div className="blog-content">
          <div className="blog-text mt-3 d-flex">
            <div className="d-flex align-items-center mb-3 meta">
              <p className="mb-0">
                <span className="mr-2">{time}</span>
              </p>
            </div>
          </div>
          <h3 className="heading">
            <span>{what}</span>
          </h3>
          <p>
            {where}
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
