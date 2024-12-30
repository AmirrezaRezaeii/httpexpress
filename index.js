const { http } = require("msw");
const { createServer } = require("@mswjs/http-middleware");

const httpServer = createServer(
  http.get("/", (req, res, ctx) => {
    return res(ctx.text("Hello world"));
  })
);

httpServer.get("/", (req, res, ctx) => {
  return res(ctx.text("salam"));
});

httpServer.listen(3001);
