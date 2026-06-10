import * as dotenv from 'dotenv';
dotenv.config();
// import 'tsconfig-paths/register';

import { app } from '#/app';

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    const server = app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });

    // setupGracefulShutdown(server);

  } catch (error) {
    console.error('Failed to start server: ', error);
    process.exit(1);
  }
}

/**
 * Обеспечивает корректное завершение работы (Graceful Shutdown)
 * Позволяет дообработать текущие запросы и закрыть соединения с БД
 */
function setupGracefulShutdown(server: any) {
  const shutdown = async (signal: string) => {
    console.log(`\n⚠️  ${signal} received. Shutting down gracefully...`);
    
    // Перестаем принимать новые соединения
    server.close(async () => {
      console.log('server closed');
      
      try {
        process.exit(0);
      } catch (err) {
        console.error('Error during shutdown:', err);
        process.exit(1);
      }
    });

    setTimeout(() => {
      console.error('Could not close connections in time');
      process.exit(1);
    }, 10000);
  };

  process.on('SIGTERM', () => shutdown('SIGTERM'));
  process.on('SIGINT', () => shutdown('SIGINT'));
}

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception thrown:', error);
  process.exit(1);
});

startServer();