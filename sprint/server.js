const jsonServer = require('json-server');
const jsonPort = 8080;

const jsonApp = jsonServer.create();
const jsonRouter = jsonServer.router('db.json'); 
const middlewares = jsonServer.defaults();

jsonApp.use(middlewares);
jsonApp.use(jsonRouter);

jsonApp.listen(jsonPort, () => {
  console.log(`JSON Server running at http://localhost:${jsonPort}`);
}); 