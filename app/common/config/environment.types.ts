export type ExecutionEnvironment = 'local' | 'qa' | 'staging' | 'prod';

export interface RuntimeConfig {
  environment: ExecutionEnvironment;
  baseUrl: string;
  apiBaseUrl: string;
  adminBaseUrl: string;
  defaultUsername: string;
  defaultPassword: string;
  smokeUserId: number;
  saucedemoBaseUrl: string;
}
