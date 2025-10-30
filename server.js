// server.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();

// ✅ CORS 설정 함수
function getCorsConfig() {
  const allowedOrigins = [
    'https://pwd-week6-juunghaa.vercel.app', // 실제 클라이언트 도메인
    process.env.CLIENT_URL,
    process.env.PRODUCTION_CLIENT_URL,
    'http://localhost:3000', // 로컬 개발용
  ].filter(Boolean);

  return {
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`CORS blocked: ${origin} not allowed`));
      }
    },
    credentials: true, // ✅ 쿠키/세션 허용
  };
}

// ✅ 미들웨어
app.use(cors(getCorsConfig()));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ MongoDB 연결
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: process.env.DB_NAME,
    });
    console.log(`[MongoDB] connected: ${process.env.DB_NAME}`);
  } catch (err) {
    console.error('[MongoDB] connection error:', err);
    process.exit(1);
  }
};

// ✅ DB 연결 닫기용 함수
export const closeDB = async () => {
  await mongoose.connection.close();
  console.log('[MongoDB] connection closed');
};

// ✅ 헬스 체크 라우트
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// ✅ 서버 시작
const port = process.env.PORT || 5000;
app.listen(port, async () => {
  await connectDB();
  console.log(`Server listening on port ${port}`);
});

// ✅ 종료 시 처리
process.on('SIGINT', async () => {
  console.log('Received SIGINT, shutting down...');
  await closeDB();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('Received SIGTERM, shutting down...');
  await closeDB();
  process.exit(0);
});
