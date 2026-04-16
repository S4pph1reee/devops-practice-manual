const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, '../frontend')));

app.get('/api/hello', (req, res) => {
    res.json({
        message: '✅ Бэкенд работает! Данные получены вручную.',
        timestamp: new Date().toISOString()
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log('🚀 Backend запущен на http://0.0.0.0:${PORT}');
    console.log('🌐 Фронтенд доступен на http://0.0.0.0:${PORT}/');
});