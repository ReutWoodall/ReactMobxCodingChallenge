const usersR = require("./updateCurrentUser");

exports.routesInit = (app) => {
  console.log('routers on');
  app.use("/users", usersR);
   
  app.use((req,res) => {
    res.status(404).json({msg:"404 url page not found"});
  })
}