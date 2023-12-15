const jsonServer = require('json-server');
const jsonPort = 8080;

const jsonApp = jsonServer.create();
const jsonRouter = jsonServer.router('db.json'); 
const middlewares = jsonServer.defaults();

// Custom route example: returns posts of a specific category
jsonRouter.render = (req, res) => {
  const category = req.query.category;
  if (category) {
    const data = res.locals.data.filter(post => post.category === category);
    return res.jsonp(data);
  }
  res.jsonp(res.locals.data);
};

jsonApp.use(middlewares);
jsonApp.use(jsonRouter);

jsonApp.listen(jsonPort, () => {
  console.log(`JSON Server running at http://localhost:${jsonPort}`);
}); 