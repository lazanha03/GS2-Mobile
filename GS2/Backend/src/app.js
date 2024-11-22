const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);

sequelize.sync({ force: false }).then(() => console.log('Database synced'));

app.listen(5000, () => console.log('Server running on port 5000'));
