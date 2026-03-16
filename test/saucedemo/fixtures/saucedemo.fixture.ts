import { test as base, expect } from '@playwright/test';
import { getRuntimeConfig } from '../../../app/common/config';
import { SaucedemoPageFactory } from '../../../app/product/web/pages/page.factory';

type SaucedemoFixtures = {
  pageFactory: SaucedemoPageFactory;
};

export const test = base.extend<SaucedemoFixtures>({
  pageFactory: async ({ page }, use) => {
    const runtimeConfig = getRuntimeConfig();
    await use(new SaucedemoPageFactory(page, runtimeConfig.saucedemoBaseUrl));
  },
});

export { expect };
