const app = require('./app');
const db = require('./db/db');

const port = process.env.PORT;


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});