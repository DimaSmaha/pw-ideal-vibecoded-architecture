import { expect, type Locator, type Page } from '@playwright/test';
import { ShoppingHeaderComponent } from '../components/shopping-header.component';
import { BasePage } from './base.page';

export class SaucedemoInventoryPage extends BasePage {
  readonly header: ShoppingHeaderComponent;

  constructor(page: Page, baseUrl?: string) {
    super(page, baseUrl);
    this.header = new ShoppingHeaderComponent(page);
  }

  private byTestId(testId: string): Locator {
    return this.page.locator(`[data-test="${testId}"]`);
  }

  get inventoryContainer(): Locator {
    return this.byTestId('inventory-container');
  }

  addToCartButtonFor(itemSlug: string): Locator {
    return this.byTestId(`add-to-cart-${itemSlug}`);
  }

  async expectLoaded(): Promise<void> {
    await expect(this.page).toHaveURL(/.*inventory\.html/);
    await expect(this.inventoryContainer).toBeVisible();
  }

  async addItemToCart(itemSlug: string): Promise<void> {
    await this.addToCartButtonFor(itemSlug).click();
  }
}
