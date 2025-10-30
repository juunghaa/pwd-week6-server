// src/config/db.js
async function connectDB(uri, dbName) {
    await mongoose.connect(uri, {
      dbName: effectiveDbName,
      autoIndex: process.env.NODE_ENV !== 'production',
      maxPoolSize: 10,                    // 연결 풀 최대 크기
      serverSelectionTimeoutMS: 10000,    // 서버 선택 타임아웃
      family: 4,                          // IPv4 우선 사용
    });
  }