import mongoose from 'mongoose';

export class Database {
  private static instance: Database | null = null;
  private isConnected = false;

  private constructor() {}

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public async connect(url: string | undefined): Promise<void> {
    if (!url) {
        throw new Error('MongoDb url string is undefined.')
    }

    if (this.isConnected) {
      console.log('Using existing MongoDB connection instance.');
      return;
    }

    try {
      const db = await mongoose.connect(url);
      this.isConnected = db.connections[0].readyState === 1;
      console.log('MongoDB successfully connected.');

      mongoose.connection.on('error', (err) => console.error('MongoDB connection error:', err));
      mongoose.connection.on('disconnected', () => {
        console.warn('MongoDB disconnected. Resetting connection state.');
        this.isConnected = false;
      });
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw error;
    }
  }

  public async disconnect(): Promise<void> {
    if (this.isConnected) {
      await mongoose.disconnect();
      this.isConnected = false;
      console.log('MongoDB disconnected successfully.');
    }
  }
}

export default Database.getInstance();