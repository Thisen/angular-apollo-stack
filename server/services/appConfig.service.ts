export class AppConfig {

  public readonly isProduction: boolean;
  public readonly isDevelopment: boolean;
  public readonly mongoDbUrl: string;
  public readonly graphQLPort: number;

  constructor() {
    this.isProduction = process.env.NODE_ENV === 'prod';
    this.isDevelopment = !this.isProduction;

    this.graphQLPort = process.env.PORT || 5000;

    if (this.isProduction) {
      this.mongoDbUrl = process.env.MONGO_URL_PROD;
    } else {
      this.mongoDbUrl = 'mongodb://localhost:27017/';
    }

    if (!this.mongoDbUrl) {
      throw Error('AppConfig: No MongoDB URL defined. \n' +
      'Use environment variable to specify to the MongoDB instance to use.');
    }
  }
}
