import { test, expect } from './fixtures/saucedemo.fixture';

test.describe('Saucedemo website automation', () => {
  test('standard user can log in and see inventory', async ({ loginPage, inventoryPage }) => {
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.expectLoaded();
  });

  test('locked out user gets login error', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce');
    await loginPage.expectLoginErrorContains('locked out');
  });

  test(
    'standard user can add item to cart and complete checkout',
    async ({ loginPage, inventoryPage, cartPage, checkoutPage }) => {
      await loginPage.goto();
      await loginPage.login('standard_user', 'secret_sauce');
      await inventoryPage.expectLoaded();

      await inventoryPage.addItemToCart('sauce-labs-backpack');
      await expect(inventoryPage.header.shoppingCartBadge).toHaveText('1');

      await inventoryPage.header.openCart();
      await cartPage.expectLoaded();
      await cartPage.expectItemVisible('Sauce Labs Backpack');
      await cartPage.startCheckout();

      await checkoutPage.expectStepOneLoaded();
      await checkoutPage.fillCustomerAndContinue('Auto', 'Tester', '12345');
      await checkoutPage.expectStepTwoLoaded();
      await checkoutPage.finishAndExpectCompleted();
    },
  );
});
