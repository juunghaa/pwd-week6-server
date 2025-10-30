// src/services/restaurants.service.js
const { ensureSeededOnce } = require('./src/services/restaurants.service');

// server.js에서 서버 시작 시 자동 실행
async function start() {
  try {
    await connectDB(process.env.MONGODB_URI, process.env.DB_NAME);
    await ensureSeededOnce(); // 초기 데이터 자동 주입
    // ...
  }
}