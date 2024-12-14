const express = require('express');
const cors = require('cors'); 
const postRoutes = require('./routes/postRoutes');

const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;

app.use(cors()); 
app.use(express.json());


app.use('/api/posts', postRoutes);
app.use(express.static(path.join(__dirname, 'fronted/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'fronted/build', 'index.html'));
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
