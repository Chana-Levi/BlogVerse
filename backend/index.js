const express = require('express');
const postRoutes = require('./routes/postRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

// שימוש בתיקיית routes
app.use('/api/posts', postRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
