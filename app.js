const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes/tasks");
//middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("task manager");
});
app.use("/api/v1/tasks", routes);

app.listen(port, () => {
  console.log("server started");
});
