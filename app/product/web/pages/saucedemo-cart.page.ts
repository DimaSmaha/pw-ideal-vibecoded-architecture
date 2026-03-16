import { expect, type Locator, type Page } from '@playwright/test';
import { ShoppingHeaderComponent } from '../components/shopping-header.component';
import { BasePage } from './base.page';

export class SaucedemoCartPage extends BasePage {
  readonly header: ShoppingHeaderComponent;

  constructor(page: Page, baseUrl?: string) {
    super(page, baseUrl);
    this.header = new ShoppingHeaderComponent(page);
  }

  private byTestId(testId: string): Locator {
    return this.page.locator(`[data-test="${testId}"]`);
  }

  get checkoutButton(): Locator {
    return this.byTestId('checkout');
  }

  get cartList(): Locator {
    return this.byTestId('cart-list');
  }

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/.*cart\.html/);
    await expect(this.cartList).toBeVisible();
  }

  async expectItemVisible(itemName: string): Promise<void> {
    await expect(this.page.getByText(itemName)).toBeVisible();
  }

  async startCheckout(): Promise<void> {
    await this.checkoutButton.click();
  }
}
