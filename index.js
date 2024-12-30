const { http, HttpResponse } = require("msw");
const { createMiddleware } = require("@mswjs/http-middleware");

const express = require("express");
const app = express();

app.use(
  createMiddleware(
    http.get("/", () => {
      return HttpResponse.text("salam");
    })
  )
);

app.get("/", (req, res, ctx) => {
  return res.send("Hello World!");
});

app.listen(3001, () => {
  console.log("working");
});
