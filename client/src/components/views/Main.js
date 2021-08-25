import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import ListAuthors from "../ListAuthors";

function Main() {
  return (
    <div>
      <Header />
      <Link to="/api/authors/new" className="ml30px">
        Add an author
      </Link>
      <ListAuthors />
    </div>
  );
}

export default Main;
