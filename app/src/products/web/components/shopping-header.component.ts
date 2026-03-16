import type { Locator, Page } from '@playwright/test';

export class ShoppingHeaderComponent {
  constructor(private readonly page: Page) {}

  private byTestId(testId: string): Locator {
    return this.page.locator(`[data-test="${testId}"]`);
  }

  get shoppingCartLink(): Locator {
    return this.byTestId('shopping-cart-link');
  }

  get shoppingCartBadge(): Locator {
    return this.byTestId('shopping-cart-badge');
  }

  async openCart(): Promise<void> {
    await this.shoppingCartLink.click();
  }
}
