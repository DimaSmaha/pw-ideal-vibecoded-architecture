import type { Page } from '@playwright/test';
import { SaucedemoCartPage } from './saucedemo-cart.page';
import { SaucedemoCheckoutPage } from './saucedemo-checkout.page';
import { SaucedemoInventoryPage } from './saucedemo-inventory.page';
import { SaucedemoLoginPage } from './saucedemo-login.page';

export class SaucedemoPageFactory {
  constructor(
    private readonly page: Page,
    private readonly baseUrl = 'https://www.saucedemo.com',
  ) {}

  loginPage(): SaucedemoLoginPage {
    return new SaucedemoLoginPage(this.page, this.baseUrl);
  }

  inventoryPage(): SaucedemoInventoryPage {
    return new SaucedemoInventoryPage(this.page, this.baseUrl);
  }

  cartPage(): SaucedemoCartPage {
    return new SaucedemoCartPage(this.page, this.baseUrl);
  }

  checkoutPage(): SaucedemoCheckoutPage {
    return new SaucedemoCheckoutPage(this.page, this.baseUrl);
  }
}
