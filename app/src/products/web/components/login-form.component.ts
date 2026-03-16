import type { Locator, Page } from '@playwright/test';

export class LoginFormComponent {
  constructor(private readonly page: Page) {}

  private byTestId(testId: string): Locator {
    return this.page.locator(`[data-test="${testId}"]`);
  }

  get usernameInput(): Locator {
    return this.byTestId('username');
  }

  get passwordInput(): Locator {
    return this.byTestId('password');
  }

  get loginButton(): Locator {
    return this.byTestId('login-button');
  }

  get errorMessage(): Locator {
    return this.byTestId('error');
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
