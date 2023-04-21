const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Eleven22CT$',
  database: 'techblog'
});

exports.getAllPosts = (req, res) => {
  connection.query('SELECT * FROM posts', (error, results) => {
    if (error) throw error;
    res.render('home', { posts: results });
  });
};

exports.getPostById = (req, res) => {
  const id = req.params.id;
  connection.query('SELECT * FROM posts WHERE id = ?', id, (error, results) => {
    if (error) throw error;
    res.render('post', { post: results[0] });
  });
};

exports.createPost = (req, res) => {
  const { title, content } = req.body;
  connection.query('INSERT INTO posts SET ?', { title, content }, (error, results) => {
    if (error) throw error;
    res.redirect('/');
  });
};

exports.updatePost = (req, res) => {
  const id = req.params.id;
  const { title, content } = req.body;
  connection.query('UPDATE posts SET title = ?, content = ? WHERE id = ?', [title, content, id], (error, results) => {
    if (error) throw error;
    res.sendStatus(200);
  });
};

exports.deletePost = (req, res) => {
  const id = req.params.id;
  connection.query('DELETE FROM posts WHERE id = ?', id, (error, results) => {
    if (error) throw error;
    res.sendStatus(200);
  });
};
