const { http, HttpResponse } = require("msw");

const handlers = [
  http.get("/", (req, res, ctx) => {
    return res(ctx.text("salam donya"));
  }),
];

module.exports = { handlers };
