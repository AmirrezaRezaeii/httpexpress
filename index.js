const { http } = require("msw");
const { createMiddleware } = require("@mswjs/http-middleware");

const express = require("express");
const app = express();

app.get("/", (req, res, ctx) => {
  return res.send("Hello World!");
});

app.use(
  createMiddleware(
    http.get("/", (req, res, ctx) => {
      return res(ctx.text("salam"));
    })
  )
);

app.listen(3001, () => {
  console.log("working");
});
