import React, { forwardRef } from "react";
import "./index.css";
import HeadinContent from "../../widgets/HeadingContent";

const Project = forwardRef((props, ref) => {
  return (
    <>
      <section ref={ref} className="project-section">
        <div className="container">
          <HeadinContent
            h1Heading="Project"
            h2Heading="Our Project"
            paraName="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
          />
          <div className="row">
            <div className="col-md-6">
              <div className="img-project-1 mb-4 d d-flex">
                <div className="overlay"></div>
                <div className="text text-center">
                  <div className="content">
                    <h3>
                      <a href="#">Student greivance stystem</a>
                    </h3>
                    <span>node.js,react.js & mongodb</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-project-2 mb-4 d-flex">
                <div className="text text-center">
                  <div className="content">
                    <h3>
                      <a href="#">ATM funtionality with localStorage</a>
                    </h3>
                    <span>react.js & database</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-project-3 mb-4 d-flex">
                <div className="text text-center">
                  <div className="content">
                    <h3>
                      <a href="#">Text editor</a>
                    </h3>
                    <span>react.js</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="img-project-4 mb-4 d-flex">
                <div className="text text-center">
                  <div className="content">
                    <h3>
                      <a href="#">Unbrew frontend Design</a>
                    </h3>
                    <span>React.js</span>
                  </div>
                </div>
              </div>
            </div>
            <details className="d-flex">
              <summary>view more</summary>
              <div className="col-md-6">
                <div className="img-project-5 mb-4 d-flex">
                  <div className="text text-center">
                    <div className="content">
                      <h3>
                        <a href="#">Our portfolio other than this one</a>
                      </h3>
                      <span>react.js</span>
                    </div>
                  </div>
                </div>
              </div>
              <details>
                <summary>more</summary>
                <div className="col-md-6">
                  <div className="img-project-7 mb-4 d-flex">
                    <div className="text text-center">
                      <div className="content">
                        <h3>
                          <a href="#">Password generator</a>
                        </h3>
                        <span>react.js</span>
                      </div>
                    </div>
                  </div>
                </div>
                <details>
                  <summary>more</summary>
                  <div className="col-md-6">
                    <div className="img-project-8 mb-4 d-flex">
                      <div className="text text-center">
                        <div className="content">
                          <h3>
                            <a href="#">social media appp to create a post</a>
                          </h3>
                          <span>react.js</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <details>
                    <summary>more</summary>
                    <div className="col-md-6">
                      <div className="img-project-6 mb-4 d-flex">
                        <div className="text text-center">
                          <div className="content">
                            <h3>
                              <a href="#">flipkart clone with technology used</a>
                            </h3>
                            <span>react.js ,node.js,mongodb&bootstrap</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </details>
                </details>
              </details>
            </details>
          </div>
        </div>
      </section>
    </>
  );
});
export default Project;
