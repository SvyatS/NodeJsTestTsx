require('dotenv').config(); // Загружаем переменные окружения

const config = {
  mongodb: {
    // URL должен совпадать с тем, что используется в вашем приложении
    url: process.env.MONGODB_URI || "mongodb://localhost:27017",
    databaseName: process.env.MONGODB_DB || "payment_service",
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Можно добавить таймауты для медленных сетей
      connectTimeoutMS: 10000, 
      socketTimeoutMS: 45000,
    }
  },
  // Папка, где будут храниться файлы миграций
  migrationsDir: "src/migrations",
  // Коллекция, в которой MongoDB будет хранить историю примененных миграций
  changelogCollectionName: "changelog",
  migrationFileExtension: ".js",
  useFileHash: false,
  moduleSystem: 'commonjs'
};

module.exports = config;