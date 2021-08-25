import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../Header";

function NewAuthor() {
  const [newAuthor, setNewAuthor] = useState("");

  const onChangeAuthorNameHandler = (e) => {
    setNewAuthor(e.target.value);
    console.log(newAuthor);
  };

  const onClickSubmitHandler = (e) => {
    e.preventDefault();
    console.log(`adding ${newAuthor}`);
    axios
      .post("http://localhost:8000/api/authors", { name: newAuthor })
      .then((res) => {
        console.log(res);
        window.history.back();
      })
      .catch((err) => console.log(err));
  };

  const onClickCancelHandler = (e) => {
    e.preventDefault();
    window.history.back();
  };
  return (
    <>
      <Header />
      <div>
        <Link to="/" className="ml30px">
          Home
        </Link>
      </div>
      <div className="ml30px">
        <h3>Add a new author:</h3>
      </div>
      <div
        className="ml30px"
        style={{
          width: "300px",
          border: "3px solid black",
        }}
      >
        <div style={{ margin: "10px 0 10px 30px" }}>
          <label>Name:</label>
        </div>
        <div>
          <input
            onChange={onChangeAuthorNameHandler}
            className="ml30px"
            type="text"
            name="name"
            id="name"
          />
          <div className="ml30px">
            {newAuthor === "" ? (
              <span style={{ color: "red" }}>Author name is required</span>
            ) : newAuthor.length < 3 ? (
              <span style={{ color: "red" }}>
                Must be at least 3 characters
              </span>
            ) : (
              <span></span>
            )}
          </div>
        </div>
        <div>
          <button
            onClick={onClickCancelHandler}
            className="ml30px"
            style={{ margin: "15px 0 15px 30px" }}
          >
            Cancel
          </button>
          <button
            onClick={onClickSubmitHandler}
            className="ml30px"
            style={{ margin: "15px 0 15px 30px" }}
            disabled={newAuthor === "" || newAuthor.length < 3 ? true : false}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default NewAuthor;
