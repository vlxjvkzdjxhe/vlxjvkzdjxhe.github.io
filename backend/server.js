// backend/server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// 미들웨어 설정
app.use(cors());
app.use(express.json());

// 기본 운세 데이터
const fortuneDB = {
    "총운": [
        "오늘은 매우 행운이 따르는 날입니다!",
        "차분하게 하루를 보내시면 좋은 결과가 있을 거예요.",
        "작은 실수에 주의하세요. 그래도 전반적으로 평온한 하루가 될 거예요.",
        "오늘은 특별한 만남이 있을 수 있어요. 주변을 잘 살펴보세요.",
        "컨디션 관리에 신경 쓰세요. 휴식도 필요한 날이에요."
    ],
    "금전운": [
        "예상치 못한 수입이 생길 수 있어요!",
        "오늘은 지출을 조심하시는 것이 좋겠어요.",
        "투자나 재테크에 좋은 기회가 올 수 있어요.",
        "비상금을 준비해두면 좋을 것 같아요.",
        "소소한 재물운이 있는 날이에요."
    ],
    "연애운": [
        "오늘은 로맨틱한 일이 생길 수 있어요!",
        "마음에 드는 사람에게 적극적으로 다가가보세요.",
        "연인과의 대화가 필요한 날이에요.",
        "소소한 데이트가 특별하게 느껴지는 날이에요.",
        "새로운 인연을 만날 수 있는 날이에요."
    ]
};

// 운세 응답을 가져오는 함수
function getFortune(type) {
    const fortunes = fortuneDB[type] || fortuneDB["총운"];
    return fortunes[Math.floor(Math.random() * fortunes.length)];
}

// API 엔드포인트 설정
app.post('/api/fortune', (req, res) => {
    try {
        const { type } = req.body;
        const fortune = getFortune(type);
        res.json({ fortune });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: '서버 오류가 발생했습니다.' });
    }
});

// 서버 시작
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});