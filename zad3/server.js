const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

const studentsController = require('./controllers/students');
const errorController = require('./controllers/notFound');

app.get('/', (req, res) => {
    res.render('Home', { title: 'Home' });
});

app.get('/success', studentsController.getAddingNewStudentSuccessPage);

app.get('/students-list', studentsController.getStudentsListPage);

app.get('/add-student', (req, res) => {
    res.redirect('/students-list');
});

app.post('/add-student', studentsController.addStudent);

app.use(errorController.getNotFoundPage);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
