import { expect, type Locator, type Page } from '@playwright/test';
import { CheckoutFormComponent } from '../components/checkout-form.component';
import { BasePage } from './base.page';

export class SaucedemoCheckoutPage extends BasePage {
  readonly checkoutForm: CheckoutFormComponent;

  constructor(page: Page, baseUrl?: string) {
    super(page, baseUrl);
    this.checkoutForm = new CheckoutFormComponent(page);
  }

  private byTestId(testId: string): Locator {
    return this.page.locator(`[data-test="${testId}"]`);
  }

  get summaryContainer(): Locator {
    return this.byTestId('checkout-summary-container');
  }

  async expectStepOneLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/.*checkout-step-one\.html/);
    await expect(this.checkoutForm.firstNameInput).toBeVisible();
  }

  async expectStepTwoLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/.*checkout-step-two\.html/);
    await expect(this.summaryContainer).toBeVisible();
  }

  async fillCustomerAndContinue(firstName: string, lastName: string, postalCode: string): Promise<void> {
    await this.checkoutForm.fillCustomerInformation(firstName, lastName, postalCode);
    await this.checkoutForm.continueCheckout();
  }

  async finishAndExpectCompleted(): Promise<void> {
    await this.checkoutForm.finishCheckout();
    await expect(this.page).toHaveURL(/.*checkout-complete\.html/);
    await expect(this.checkoutForm.completeHeader).toContainText('Thank you for your order');
  }
}
