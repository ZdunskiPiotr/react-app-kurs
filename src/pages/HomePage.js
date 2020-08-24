import React from "react";
import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Czym jest teoria strun?",
    author: "Jan Nowak",
    text:
      "12311LoremAdipisicing anim ipsum et Lorem elit aliqua veniam aliquip adipisicing fugiat proident elit.",
  },
  {
    id: 2,
    title: "Czym jest teoria Fermiego?",
    author: "Jan Nowak",
    text:
      "22345LoremAdipisicing anim ipsum et Lorem elit aliqua veniam aliquip adipisicing fugiat proident elit.",
  },
  {
    id: 3,
    title: "Ciemna materia i ciemna energia?",
    author: "Jan Nowak",
    text:
      "3333342LoremAdipisicing anim ipsum et Lorem elit aliqua veniam aliquip adipisicing fugiat proident elit.",
  },
];

const HomePage = () => {
  const artList = articles.map((article) => (
    <Article key={article.id} {...article} />
  ));
  return <div className="Home">{artList}</div>;
};

export default HomePage;
