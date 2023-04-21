const express = require('express');
const app = express();
const port = 3000;

const blogController = require('./controllers/blogController');

// Set up middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));

// Set up view engine
app.set('view engine', 'handlebars');
app.engine('handlebars', require('handlebars'));

// Set up routes
app.get('/', blogController.getAllPosts);
app.get('/posts/:id', blogController.getPostById);
app.post('/posts', blogController.createPost);
app.put('/posts/:id', blogController.updatePost);
app.delete('/posts/:id', blogController.deletePost);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
