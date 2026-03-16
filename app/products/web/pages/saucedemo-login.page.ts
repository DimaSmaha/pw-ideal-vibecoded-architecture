import { expect, type Page } from '@playwright/test';
import { LoginFormComponent } from '../components/login-form.component';
import { BasePage } from './base.page';

export class SaucedemoLoginPage extends BasePage {
  readonly loginForm: LoginFormComponent;

  constructor(page: Page, baseUrl?: string) {
    super(page, baseUrl);
    this.loginForm = new LoginFormComponent(page);
  }

  async goto(): Promise<void> {
    await this.gotoPath('/');
    await expect(this.loginForm.usernameInput).toBeVisible();
  }

  async login(username: string, password: string): Promise<void> {
    await this.loginForm.login(username, password);
  }

  async expectLoginErrorContains(text: string): Promise<void> {
    await expect(this.loginForm.errorMessage).toContainText(text);
  }
}
