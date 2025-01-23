# Middleware

- Middleware : They are functions that execute during the request to the server, each middleware functions has access to request and response object.
  Middleware: is every were in express.
  When you work with middleware, you must always pass to the next middleware
  Next() is used to pass to the nest middleware
- app.use : applies middlware to all our routes
- express.urlencoded({encoded:false}) : built in middleware in express
- express.json() : Middleware used to handle json

## Middleware Options

1. Our own e.g Logger and Authorize created
2. Express
3. Third Party
