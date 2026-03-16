import { test as base, expect } from '@playwright/test';
import { SaucedemoPageFactory } from '../../../app/src/products/web/pages/page.factory';
import { SaucedemoCartPage } from '../../../app/src/products/web/pages/saucedemo-cart.page';
import { SaucedemoCheckoutPage } from '../../../app/src/products/web/pages/saucedemo-checkout.page';
import { SaucedemoInventoryPage } from '../../../app/src/products/web/pages/saucedemo-inventory.page';
import { SaucedemoLoginPage } from '../../../app/src/products/web/pages/saucedemo-login.page';

type SaucedemoFixtures = {
  pageFactory: SaucedemoPageFactory;
  loginPage: SaucedemoLoginPage;
  inventoryPage: SaucedemoInventoryPage;
  cartPage: SaucedemoCartPage;
  checkoutPage: SaucedemoCheckoutPage;
};

export const test = base.extend<SaucedemoFixtures>({
  pageFactory: async ({ page }, use) => {
    await use(new SaucedemoPageFactory(page));
  },
  loginPage: async ({ pageFactory }, use) => {
    await use(pageFactory.loginPage());
  },
  inventoryPage: async ({ pageFactory }, use) => {
    await use(pageFactory.inventoryPage());
  },
  cartPage: async ({ pageFactory }, use) => {
    await use(pageFactory.cartPage());
  },
  checkoutPage: async ({ pageFactory }, use) => {
    await use(pageFactory.checkoutPage());
  },
});

export { expect };
