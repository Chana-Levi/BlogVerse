const express = require('express');
const cors = require('cors'); // ייבוא של cors
const postRoutes = require('./routes/postRoutes');

const app = express();
const PORT = 7000;

app.use(cors()); // הפעלת CORS לכל הנתיבים
app.use(express.json());

// שימוש בתיקיית routes
app.use('/api/posts', postRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
