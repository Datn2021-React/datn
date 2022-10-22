import React from "react";

const Section = (props) => {
  const { children } = props;

  return <div className="section">{children}</div>;
};

export const SectionTitle = (props) => {
  const { children } = props;

  return <div className="section_title">{children}</div>;
};

export const SectionBody = (props) => {
  const { children } = props;

  return <div className="section_body">{children}</div>;
};

export default Section;
