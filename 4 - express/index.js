const express = require('express');
const app = express();
// application level middleware
app.use(express.json());

// function m1(req, res, next) {
//   if () {
//     res.json({});
//     return;
//   }
//   next();
// }

function m2(req, res, next) {
  try {
    // async calls
  } catch (e) {
    next(e);
  }
  if () {
    next(1);
    return;
  }
   if () {
    next(2);
    return;
   }
   if () {
    next(3);
    return;
  }
  next();
}

function errorMiddleware(error, req, res, next) {
  if (error is xxxError) {
    
    return;
  }
  next(error);
}

// middleware chain
// error middleware chain

// app.use('/v1/users', middleware1);
// app.use('/v1/users', middleware1, m2);
// app.get('/v1/users', middleware1);
// app.get('/v1/users', routeHandler);

// GET /users (start with /users, /users*)
app.use(middleware1);
app.use('/v1/users', middleware1);
// GET /users
app.get('/v1/users', middleware1);
app.get('/v1/users', routeHandler);
app.get('/v2/users', middleware1);
app.post('/', m2);
// application.http-method(path, callback function -> route handler)
// req -> request
// res -> result
app.get('/', (req, res) => {
  req.customProperty = 'abc';
  // return data back to client
  res.send('ok!!!!');
  // res.json() -> default status code 200
  // res.sendStatus() -> status code
  // res.status(201).json({});
});
// GET /
// path matcher

/**
 * get data from request
 * 1. body       -> POST,PUT,PATCH
 *    req.body (must use express.json middleware)
 * 2. query param /?query=value   (filtering)    -> GET
 * 3. route param /books/:id (on path)      -> GET, POST, PUT, DELETE
 */
// POST /users/xxxxxx
// /users/:userId/bookmark/:bookmarkId
app.post('/users/:id', (req, res) => {
  const { name } = req.body;
  const { title } = req.query;
  const { id } = req.params;
  // res.json({ name, title, id });
});
// app.put()
// app.delete()
// app.patch()

// regex

app.use(errorMiddleware1);
app.use(errorMiddleware2);
app.use(errorMiddleware3);

app.listen(3000);
