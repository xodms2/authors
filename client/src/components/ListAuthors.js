import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ListAuthors() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors")
      .then((res) => {
        setAuthors(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const onClickDeleteAuthor = (id) => {
    axios
      .delete(`http://localhost:8000/api/authors/${id}`)
      .then((res) => {
        console.log(res);
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="ml30px">
      <div>
        <h3>We Have quotes by:</h3>
      </div>
      <div>
        <table style={{ border: "3px solid black" }}>
          <thead>
            <tr>
              <th>Author</th>
              <th>Actions available</th>
            </tr>
          </thead>
          <tbody>
            {authors.map((a, i) => (
              <tr key={i}>
                <td>{a.name}</td>
                <td>
                  <Link
                    to={`/api/authors/${a._id}/edit`}
                    style={{ margin: "0 10px 0 10px" }}
                  >
                    Edit
                  </Link>
                  <Link
                    to={"/"}
                    style={{ margin: "0 10px 0 10px" }}
                    onClick={() => {
                      onClickDeleteAuthor(a._id);
                    }}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListAuthors;
