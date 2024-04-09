exports.students = [];
let nextId = 1;

exports.addStudent = (req, res) => {
    const { fullName, code, fieldOfStudies } = req.body;

    const newStudent = {
        id: nextId,
        fullName,
        code,
        fieldOfStudies
    };

    exports.students.push(newStudent);

    nextId++;

    res.redirect('/success');
};

exports.getAddingNewStudentSuccessPage = (req, res) => {
    res.render('Success', {
        title: 'Success',
        message: 'Student has been added with success!',
        links: [
            { url: '/', text: 'Home' },
            { url: '/students-list', text: 'List' }
        ]
    });
};

exports.getStudentsListPage = (req, res) => {
    res.render('List', {
        title: 'List',
        students: exports.students
    });
};
