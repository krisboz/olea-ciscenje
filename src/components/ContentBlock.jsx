import React from "react";
import "../styles/components/ContentBlock.scss";
import { Link } from "react-router-dom";

const ContentBlock = ({
  imgSide,
  img,
  button,
  buttonTarget,
  title,
  paragraphs,
  stupidServicesCheck = false,
  isStupidNovaljaPhoto = false,
  bgColor,
  boldParagraph = null,
}) => {
  const textContainer = (
    <div className="text-block">
      <h1>{title}</h1>
      {boldParagraph && (
        <p>
          <b>{boldParagraph}</b>
        </p>
      )}
      {paragraphs.map((paragraph) => {
        return (
          <p
            className={stupidServicesCheck ? "text-to-enlarge" : ""}
            key={paragraph}
          >
            {paragraph}
          </p>
        );
      })}

      {button !== "none" && <Link to={buttonTarget}>{button}</Link>}
    </div>
  );

  const imageContainer = (
    <div
      className={`${isStupidNovaljaPhoto ? "novalja-block" : "image-block"}`}
    >
      <img src={img}></img>
    </div>
  );
  return (
    <div
      className={`content-block ${imgSide === "left" ? "is-left" : "is-right"}`}
      style={{
        backgroundColor: `${bgColor === "light" ? "#e6f2ff" : "#cce6ff"}`,
      }}
    >
      {imgSide === "left" ? (
        <>
          {imageContainer}
          {textContainer}
        </>
      ) : (
        <>
          {" "}
          {textContainer}
          {imageContainer}
        </>
      )}
    </div>
  );
};

export default ContentBlock;
