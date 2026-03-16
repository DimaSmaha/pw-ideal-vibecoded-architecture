import type { ExecutionEnvironment, RuntimeConfig } from './environment.types';
import { normalizeBaseUrl } from '../utils/url.util';

const toNumber = (value: string | undefined, fallback: number): number => {
  if (!value) {
    return fallback;
  }

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
};

const resolveEnvironment = (): ExecutionEnvironment => {
  const env = (process.env.TEST_ENV ?? 'qa').toLowerCase();

  if (env === 'local' || env === 'qa' || env === 'staging' || env === 'prod') {
    return env;
  }

  return 'qa';
};

const resolveApiBaseUrl = (baseUrl: string): string =>
  process.env.API_BASE_URL ? normalizeBaseUrl(process.env.API_BASE_URL) : `${baseUrl}/api`;

const resolveAdminBaseUrl = (baseUrl: string): string =>
  process.env.ADMIN_BASE_URL ? normalizeBaseUrl(process.env.ADMIN_BASE_URL) : `${baseUrl}/admin`;

export const getRuntimeConfig = (): RuntimeConfig => {
  const baseUrl = normalizeBaseUrl(process.env.BASE_URL ?? 'https://qa.example.local');

  return {
    environment: resolveEnvironment(),
    baseUrl,
    apiBaseUrl: resolveApiBaseUrl(baseUrl),
    adminBaseUrl: resolveAdminBaseUrl(baseUrl),
    defaultUsername: process.env.DEFAULT_USERNAME ?? 'qa_user',
    defaultPassword: process.env.DEFAULT_PASSWORD ?? 'dummy_pass',
    smokeUserId: toNumber(process.env.SMOKE_USER_ID, 1001),
    saucedemoBaseUrl: normalizeBaseUrl(process.env.SAUCEDEMO_BASE_URL ?? 'https://www.saucedemo.com'),
  };
};

export const getConfig = getRuntimeConfig;
