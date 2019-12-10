const express = require("express");
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(express.static("public"));

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
  server.get("/yeni-post", (req, res) => {
    return app.render(req, res, "/newPost");
  });
  server.get("/gruplar", (req, res) => {
    return app.render(req, res, "/groups");
  });
  server.get("/gundem", (req, res) => {
    return app.render(req, res, "/trends", { slug: "gundem" });
  });
  server.get("/anasayfa", (req, res) => {
    return app.render(req, res, "/index");
  });
  server.get("/profil-duzenle", (req, res) => {
    return app.render(req, res, "/editProfile");
  });
  server.get("/n/:slug", (req, res) => {
    return app.render(req, res, "/index", { slug: req.params.slug });
  });
  server.get("/u/:slug", (req, res) => {
    return app.render(req, res, "/profile", {
      slug: req.params.slug,
      page: "postlar"
    });
  });
  server.get("/u/:slug/postlar", (req, res) => {
    return app.render(req, res, "/profile", {
      slug: req.params.slug,
      page: "postlar"
    });
  });
  server.get("/u/:slug/yorumlar", (req, res) => {
    return app.render(req, res, "/profile", {
      slug: req.params.slug,
      page: "yorumlar"
    });
  });
  server.get("/bildirimler", (req, res) => {
    return app.render(req, res, "/notifications");
  });
  server.get("/mesajlar", (req, res) => {
    return app.render(req, res, "/profile", {
      page: "postlar"
    });
  });
  server.get("/", (req, res) => {
    return app.render(req, res, "/index");
  });
  /*server.get("/:slug", (req, res) => {
    const slug = req.params.slug;
    if (slug.charAt(0) === "@") {
      return app.render(req, res, "/profile", { slug });
    }
    return app.render(req, res, "/index", { slug });
  });*/
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
