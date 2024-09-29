import React, { forwardRef } from "react";
import "./index.css";
import HeadinContent from "../../widgets/HeadingContent";
import BlogCard from "../../widgets/BlogCard";

const Blog = forwardRef((props, ref) => {
  return (
    <>
      <section ref={ref} className="blog-section">
        <div className="container">
          <HeadinContent
            h1Heading="Experience"
            h2Heading="Experience"
            paraName="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
          />
          <div className="row d-flex">
            <BlogCard time="January 1-july 2024" what="Traninig (mern stack)" where="Zn infotech tedhi puliya(Lucnow)" />
            <BlogCard time="august-march-2024" what="Internship  (mern stack)" where="Softflew smart solution(Lucknow)" />

          </div>
        </div>
      </section>
    </>
  );
});

export default Blog;
