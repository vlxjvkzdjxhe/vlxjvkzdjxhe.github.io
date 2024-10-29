const express = require('express');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const PORT = 3000;

// JSON 요청 처리
app.use(express.json());

// OpenAI API로 운세 가져오기
app.post('/api/horoscope', async (req, res) => {
    const { sign } = req.body;
    const prompt = `${sign} 오늘의 운세를 알려줘.`;

    try {
        const response = await fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'text-davinci-003',
                prompt: prompt,
                max_tokens: 50
            })
        });

        const data = await response.json();
        const horoscope = data.choices[0].text.trim();

        res.json({ horoscope });
    } catch (error) {
        console.error("Error fetching horoscope:", error);
        res.status(500).json({ error: 'Unable to fetch horoscope' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
