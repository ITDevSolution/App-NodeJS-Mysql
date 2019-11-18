const express = require('express');
const morgan = require('morgan');
const exhbs = require('express-handlebars');
const path = require ('path');

//Initializations
const app = express();

//Settings
app.set('port',process.env.PORT || 4000);

app.set('views',path.join(__dirname,'views'))
//configurar el motor de plantillas
app.engine('.hbs', exhbs({
     defaultLayout: 'main', //partes comunes de la aplicacion
     layoutsDir: path.join(app.get('views'),'layouts'),
     partialsDir: path.join(app.get('views'),'partials'),
     extname: '.hbs', // configura que los archivos handlerbars sean .hbs
     helpers: require('./lib/handlebars')
}));
//para usar el motor llamamos esta funcion
app.set('view engine', '.hbs');

//Middlewares
app.use(morgan('dev')); //muestra un determinado mensaje en consola
app.use(express.urlencoded({extended: false})) //para aceptar los formularios los datos que enviar los usuarios pero limitado(datos sencillos como strings)
app.use(express.json());

//Global Variables
app.use((req,res,next)=>{
     next();
});
//Routes
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/links',require('./routes/links'));

// Files Publics
app.use(express.static(path.join(__dirname,'public')))

//Starting the server
app.listen(app.get('port'), ()=>{
     console.log('Server ON port', app.get('port'));
});