var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();

var PORT = process.env.port || 3000;

var Sequelize = require('sequelize'),
	connection;
if (process.env.JAWSDB_URL) {
	connection = new Sequelize(process.env.JAWSDB_URL);
} else {
	connection = new Sequelize('todo_db', 'root', 'password', {
		host: 'localhost',
		dialect: 'mysql',
		port: '3306'
	})
}

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

app.listen(PORT);
