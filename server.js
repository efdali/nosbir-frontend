const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/nos/:slug", (req, res) => {
    return app.render(req, res, "/post", { slug: req.params.slug });
  });
  server.get("/arama/:slug", (req, res) => {
    return app.render(req, res, "/search", {
      slug: req.params.slug,
      ...req.query
    });
  });
  server.get("/arama", (req, res) => {
    return app.render(req, res, "/search", { slug: "nos", ...req.query });
  });
  server.get("/:slug", (req, res) => {
    const slug = req.params.slug;
    if (slug.charAt(0) === "@") {
      return app.render(req, res, "/profile", { slug });
    }
    return app.render(req, res, "/index", { slug });
  });
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
