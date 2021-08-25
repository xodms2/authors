import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../Header";
import { useParams } from "react-router-dom";
import { createBrowserHistory as history } from "history";

function EditAuthor() {
  const [author, setAuthor] = useState("");
  const [editAuthor, setEditAuthor] = useState("");
  const { id } = useParams();

  const onChangeAuthorNameHandler = (e) => {
    setEditAuthor(e.target.value);
    console.log(editAuthor);
  };

  useEffect((req, res) => {
    axios
      .get(`http://localhost:8000/api/authors/${id}`)
      .then((res) => {
        console.log(res.data);
        setAuthor(res.data.name);
        setEditAuthor(res.data.name);
      })
      .catch((err) => console.log(err));
  }, []);

  const onClickSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/authors/${id}`, { name: editAuthor })
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
        <h3>Edit this author:</h3>
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
            defaultValue={author}
          />
          <div className="ml30px">
            {editAuthor === "" ? (
              <span style={{ color: "red" }}>Author name is required</span>
            ) : editAuthor.length < 3 ? (
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
            disabled={editAuthor === "" || editAuthor.length < 3 ? true : false}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default EditAuthor;
