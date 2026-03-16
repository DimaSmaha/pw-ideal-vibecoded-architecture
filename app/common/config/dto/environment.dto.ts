export type ExecutionEnvironment = 'local' | 'qa' | 'staging' | 'prod';

export interface EnvironmentConfig {
  environment: ExecutionEnvironment;
  baseUrl: string;
  apiBaseUrl: string;
  adminBaseUrl: string;
  defaultUsername: string;
  defaultPassword: string;
  smokeUserId: number;
}
