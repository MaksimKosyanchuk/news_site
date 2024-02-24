const express = require('express');
const app = express();
const port = 3001; // Порт, на котором будет работать сервер

// Обработка GET запроса на корневой URL
app.get('/', (req, res) => {
    res.send('Привет, мир!');
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
