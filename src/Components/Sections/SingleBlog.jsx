import React from "react";
import { useParams } from "react-router-dom";
import { ResourcesSectionData } from "../../Data/data";

import RelatedBlogs from "../Sections/RelatedBlogs";

const SingleBlog = () => {
  const { List } = ResourcesSectionData;
  const { singleBlog } = useParams();
  const item = List.find((e) => e.id === singleBlog);
  const { title, image } = item;

  return (
    <div className="p100-section">
      <div className="Wrapper">
        <div className="max-w-[100%] w-[800px] m-auto">
          <span className="color5 fw-400">FINANCE</span>
          <h1 className="color5 fw-700 f2 pb-8">{title}</h1>
        </div>
      </div>
      <img src={image} alt="" className="w-full" />
      <div className="p50-section max-w-[100%] bg-color7 px-[2rem] ">
        <div className="max-w-[800px] m-auto">
          <h1 className="color5 fw-700 f3">
            The remarkable thing about startups is that thecreate.
          </h1>
          <p className="pb-8">
            Throughout my early career as a developer and product manager, I
            constantly felt that owning new technology development was something
            that could only be accomplished by a few departments in a company.
            What excites me the most about the no-code movement - and what we’ve
            delivered so far as part of it - is the ability to empower
            passionate, and customer-centric people to create customer
            experiences, at the level it can and should be in digital companies.
          </p>
          <p>
            EverAfter is about enabling customer-facing teams to pave the
            customer journey the way they imagine it, without depending on
            external resources to make that experience happen. That journey
            begins from the customer’s first touch, and goes on to onboarding,
            to the ongoing relationship and successful retention.
          </p>
          <div>
            <h2 className="color5 fw-700 f4 pt-6">
              The remarkable thing about startup.
            </h2>
            <p className="pt-4">
              Throughout my early career as a developer and product manager, I
              constantly felt that owning new technology development was
              something that could only be accomplished by a few departments in
              a company. What excites me the most about the no-code movement -
              and what we’ve delivered so far as part of it - is the ability to
              empower passionate, and customer-centric people .
            </p>
            <p className="pt-6">
              EverAfter is about enabling customer-facing teams to pave the
              customer journey the way they imagine it, without depending
            </p>
          </div>
          <div>
            <h2 className="color5 fw-700 f4 py-4">
              Technology can only really succeed
            </h2>
            <p>
              Throughout my early career as a developer and product manager, I
              constantly felt that owning new technology development was
              something that could only be accomplished by a few departments in
              a company. What excites me the most about the no-cod=
            </p>
          </div>
        </div>
      </div>
      <RelatedBlogs singleBlog={singleBlog} />
    </div>
  );
};

export default SingleBlog;
