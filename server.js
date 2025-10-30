// server.js
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