import { createClient, RedisClientType } from 'redis';

class RedisSingleton {
  private static instance: RedisSingleton;
  private client: RedisClientType | null = null;
  private isConnected: boolean = false;

  private constructor() {}

  public static getInstance(): RedisSingleton {
    if (!RedisSingleton.instance) {
      RedisSingleton.instance = new RedisSingleton();
    }
    return RedisSingleton.instance;
  }

  public async connect(url: string | undefined): Promise<void> {
    if (!url) {
        throw new Error('Redis url string is undefined.')
    }

    if (this.isConnected) {
      console.log('Using existing Redis connection instance.');
      return;
    }

     this.client = createClient({ url });

    this.client.on('error', (err) => console.error('Redis Client Error:', err));
    this.client.on('connect', () => console.log('Redis Client Connected to:', url));

    await this.client.connect();
  }

  public getClient(): RedisClientType {
    if (!this.client || !this.isConnected) {
      throw new Error('Redis client is not connected.');
    }

    return this.client;
  }

  public async disconnect(): Promise<void> {
    if (this.client && this.isConnected) {
      await this.client.quit();
      this.client = null;
      this.isConnected = false;
      console.log('Redis Client Disconnected');
    }
  }
}

export default RedisSingleton.getInstance();