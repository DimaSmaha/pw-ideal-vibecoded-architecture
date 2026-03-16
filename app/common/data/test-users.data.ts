export interface TestUser {
  id: number;
  role: 'admin' | 'user';
}

export const TEST_USERS: TestUser[] = [
  { id: 1, role: 'admin' },
  { id: 2, role: 'user' },
];
