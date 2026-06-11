import config from '#/config';
import MongoInstance from '#/libs/Mongoose';
import RedisInstance from '#/libs/Redis';

import { app } from '#/app';

async function startServer() {
  try {
    MongoInstance.connect(config.MONGO_URL);
    RedisInstance.connect(config.REDIS_URL);

    const server = app.listen(config.PORT, () => {
      console.log(`Server is running on port: ${config.PORT}`);
    });

    setupGracefulShutdown(server);

  } catch (error) {
    console.error('Failed to start server: ', error);
    process.exit(1);
  }
}

function setupGracefulShutdown(server: any) {

  const forceExitTimeout = setTimeout(() => {
    console.error('Shutdown timed out. Forcing process exit.');
    process.exit(1);
  }, 10000);

  const shutdown = async (signal: string) => {
    console.log(`${signal} received. Shutting down gracefully...`);
    
    try {
      await new Promise<void>((resolve, reject) => {
        server.close((err: any) => {
          if (err) return reject(err);
          console.log('HTTP server closed. No active requests remaining.');
          resolve();
        });
      });

      MongoInstance.disconnect();
      RedisInstance.disconnect();

      clearTimeout(forceExitTimeout);

      process.exit(0);
    } catch (error) {
      clearTimeout(forceExitTimeout);
      process.exit(1);
    }
  }

  process.on('SIGTERM', () => shutdown('SIGTERM'));
  process.on('SIGINT', () => shutdown('SIGINT'));
};

startServer();