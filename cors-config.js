// CORS 설정 - 로컬 개발 및 배포 환경 대응
const getCorsConfig = () => {
    const isDevelopment = process.env.NODE_ENV === 'development';
  
    // 허용할 기본 Origin들
    const allowedOrigins = [
      'http://localhost:5173',    // Vite 개발 서버
      'http://localhost:3000',    // React 개발 서버
      'http://127.0.0.1:5173',    // 로컬 IP
      'https://pwd-week6-client.vercel.app',  // 기본 클라이언트
    ];
  
    // 환경변수로 추가된 URL들
    if (process.env.CLIENT_URL) {
      const clientUrls = process.env.CLIENT_URL.split(',');
      allowedOrigins.push(...clientUrls);
    }
  
    // 프로덕션 환경 추가 도메인들
    if (!isDevelopment) {
      if (process.env.VERCEL_URL) {
        allowedOrigins.push(`https://${process.env.VERCEL_URL}`);
      }
      if (process.env.PRODUCTION_CLIENT_URL) {
        allowedOrigins.push(process.env.PRODUCTION_CLIENT_URL);
      }
      const defaultClient =
        process.env.DEFAULT_CLIENT_URL ||
        'https://pwd-week6-juunghaa.vercel.app';
      allowedOrigins.push(defaultClient);
    }
  
    console.log('🔧 CORS Config:', {
      isDevelopment,
      allowedOrigins,
    });
  
    return {
      origin: (origin, callback) => {
        // Origin 헤더가 없으면 허용 (서버 간 요청 등)
        if (!origin) {
          console.log('✅ CORS: No origin header (server-to-server)');
          return callback(null, true);
        }
  
        console.log(`🔍 CORS: Checking origin: ${origin}`);
  
        // ✅ 정규식 기반 허용 로직 (vercel.app 서브도메인 전체 허용)
        const vercelPattern = /^https:\/\/pwd-week6-juunghaa-[a-z0-9-]+\.vercel\.app$/;
        const isAllowed =
          allowedOrigins.includes(origin) || vercelPattern.test(origin);
  
        if (isAllowed) {
          console.log('✅ CORS: Origin allowed');
          callback(null, true);
        } else {
          console.warn(`❌ CORS blocked origin: ${origin}`);
          console.log('Allowed origins:', allowedOrigins);
          callback(new Error('Not allowed by CORS'));
        }
      },
      credentials: true,
      optionsSuccessStatus: 200,
    };
  };
  
  module.exports = getCorsConfig;
  