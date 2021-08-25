const AuthorController = require("../controllers/author.controller");

module.exports = (app) => {
  app.get("/api/authors", AuthorController.GetAllAuthors);
  app.post("/api/authors", AuthorController.AddNewAuthor);
  app.delete("/api/authors/:id", AuthorController.DeleteAuthor);
  app.put("/api/authors/:id", AuthorController.UpdateAuthor);
  app.get("/api/authors/:id", AuthorController.GetOneAuthor);
};
