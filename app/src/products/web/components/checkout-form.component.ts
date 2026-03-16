import type { Locator, Page } from '@playwright/test';

export class CheckoutFormComponent {
  constructor(private readonly page: Page) {}

  private byTestId(testId: string): Locator {
    return this.page.locator(`[data-test="${testId}"]`);
  }

  get firstNameInput(): Locator {
    return this.byTestId('firstName');
  }

  get lastNameInput(): Locator {
    return this.byTestId('lastName');
  }

  get postalCodeInput(): Locator {
    return this.byTestId('postalCode');
  }

  get continueButton(): Locator {
    return this.byTestId('continue');
  }

  get finishButton(): Locator {
    return this.byTestId('finish');
  }

  get completeHeader(): Locator {
    return this.byTestId('complete-header');
  }

  async fillCustomerInformation(firstName: string, lastName: string, postalCode: string): Promise<void> {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(postalCode);
  }

  async continueCheckout(): Promise<void> {
    await this.continueButton.click();
  }

  async finishCheckout(): Promise<void> {
    await this.finishButton.click();
  }
}
