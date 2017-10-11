var AuthenticationController = require('./controllers/authentication'), 
    ProductController = require('./controllers/products'), 
    express = require('express'),
    passportService = require('../config/passport'),
    passport = require('passport'), 
    homePageController = ('./controllers/home');
 
var requireAuth = passport.authenticate('jwt', {session: false}),
    requireLogin = passport.authenticate('local', {session: false});
 
module.exports = function(app){
 
    var apiRoutes = express.Router(),
        authRoutes = express.Router(),
        ProductRoutes = express.Router();
 
    // Get home page 
    //app.use.get('/',homePageController.getHomePage);


    // Auth Routes
    apiRoutes.use('/auth', authRoutes);
 
    authRoutes.post('/register', AuthenticationController.register);
    authRoutes.post('/login', requireLogin, AuthenticationController.login);
 
    authRoutes.get('/protected', requireAuth, function(req, res){
        res.send({ content: 'Success'});
    });
 
    // Product Routes
    apiRoutes.use('/Products', ProductRoutes);
 
    ProductRoutes.get('/', ProductController.getProducts);
    //ProductRoutes.post('/', requireAuth, AuthenticationController.roleAuthorization(['creator','editor']), ProductController.createProduct);
    //ProductRoutes.delete('/:Product_id', requireAuth, AuthenticationController.roleAuthorization(['editor']), ProductController.deleteProduct);
 
    // Set up routes
    app.use('/api', apiRoutes);
 
}