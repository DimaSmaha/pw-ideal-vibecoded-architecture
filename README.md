# pw-ideal-architecture

**Generated with Warp**

Playwright-based test automation architecture with a layered folder design for web, API, data, and cross-product testing.

## Purpose

This repository demonstrates a scalable automation structure for:

- UI testing (web and placeholder mobile layers)
- API-level validation
- shared test data/configuration
- multi-product test organization

## Tech stack

- Node.js + npm
- TypeScript
- Playwright (`@playwright/test`)
- `dotenv` for environment configuration

## Quick start

1. Install dependencies: `npm ci`
2. Install Playwright browser binaries: `npx playwright install`
3. Create your local env file from template:
   - Copy `.env.example` to `.env`
   - Update values for your target environment
4. Run tests: `npm test`

## Environment configuration

The project loads environment variables in this order:

1. `.env` (base defaults)
2. `.env.<TEST_ENV>` (override layer)

Details:

- `TEST_ENV` defaults to `qa` when not provided.
- If `TEST_ENV=qa`, values from `.env.qa` override matching keys from `.env`.
- `BASE_URL` is used by Playwright as `use.baseURL`.

Example keys in `.env.example`:

- `TEST_ENV`
- `BASE_URL`
- `API_BASE_URL`
- `ADMIN_BASE_URL`
- `DEFAULT_USERNAME`
- `DEFAULT_PASSWORD`
- `SMOKE_USER_ID`

## Available npm scripts

- `npm test` — run all Playwright tests
- `npm run test:headed` — run tests in headed mode
- `npm run test:ui` — open Playwright UI mode
- `npm run test:debug` — run tests in debug mode
- `npm run report` — open HTML test report

## Repository structure

Below is the intended structure with descriptions for each major area.

### Tree view

```text
pw-ideal-architecture/
├─ app/
│  ├─ admin_website/
│  │  └─ admin.routes.ts
│  ├─ common/
│  │  ├─ config/
│  │  │  ├─ ConfigProvider/config.provider.ts
│  │  │  ├─ dto/environment.dto.ts
│  │  │  ├─ environment.types.ts
│  │  │  ├─ runtime.config.ts
│  │  │  └─ index.ts
│  │  ├─ data/
│  │  │  ├─ test-users.data.ts
│  │  │  ├─ test-users.ts
│  │  │  └─ index.ts
│  │  ├─ mail/mail.template.ts
│  │  ├─ mailservice/mail.template.ts
│  │  ├─ testrail/
│  │  │  ├─ test-cases.ts
│  │  │  └─ testcases.sample.ts
│  │  ├─ utils/
│  │  │  ├─ helpers.ts
│  │  │  ├─ time.util.ts
│  │  │  ├─ url.util.ts
│  │  │  └─ index.ts
│  │  ├─ web/
│  │  │  ├─ api.client.ts
│  │  │  ├─ page.client.ts
│  │  │  ├─ web-client.ts
│  │  │  └─ index.ts
│  │  └─ index.ts
│  ├─ other_product_shared_be/
│  │  └─ overview.ts
│  └─ product/
│     ├─ api/
│     │  ├─ controller/user_controller/CRUD/
│     │  │  ├─ readme.txt
│     │  │  └─ user.controller.ts
│     │  ├─ dto/user.dto.json
│     │  └─ facade/businessObjects/StepObject/user-step.object.ts
│     ├─ data/product-data.json
│     ├─ db/
│     │  ├─ common/connection/db.config.json
│     │  ├─ entity/user.entity.json
│     │  └─ facede/dao/user.dao.ts
│     ├─ event/mq/kafka/etc/
│     │  ├─ dto/user-event.dto.json
│     │  └─ topic/user-events.topic.txt
│     ├─ mobile/native/
│     │  ├─ component/tabbar.component.json
│     │  └─ screen/home.screen.json
│     └─ web/
│        ├─ component/header.component.json
│        ├─ components/
│        │  ├─ checkout-form.component.ts
│        │  ├─ login-form.component.ts
│        │  └─ shopping-header.component.ts
│        ├─ facade/bo/steps/precondition.steps.ts
│        └─ pages/
│           ├─ base.page.ts
│           ├─ page.factory.ts
│           ├─ saucedemo-cart.page.ts
│           ├─ saucedemo-checkout.page.ts
│           ├─ saucedemo-inventory.page.ts
│           └─ saucedemo-login.page.ts
├─ test/
│  ├─ admin_website/admin-web.spec.ts
│  ├─ common/global-fixtures.json
│  ├─ e2e/web_all_products/all-products.e2e.spec.ts
│  ├─ other_product_shared_be/other-product.spec.ts
│  ├─ product/
│  │  ├─ api/user-api.spec.ts
│  │  ├─ common/
│  │  │  ├─ data_preparations/prepare-user-data.ps1
│  │  │  └─ fixture/user.fixture.json
│  │  ├─ e2e/multi_role_business_flows/business-flow.spec.ts
│  │  └─ web/specific_pages/small_flows/specific_roles/role-flow.spec.ts
│  └─ saucedemo/
│     ├─ fixtures/saucedemo.fixture.ts
│     └─ saucedemo.spec.ts
├─ .env
├─ .env.example
├─ .env.qa
├─ .gitignore
├─ package.json
├─ package-lock.json
├─ playwright.config.ts
├─ node_modules/ (generated)
├─ playwright-report/ (generated)
└─ test-results/ (generated)
```

### Root level

- `app/` — automation framework code (routes, page objects, API/controller layers, data, utilities)
- `test/` — executable test specs, fixtures, and test-side data preparation scripts
- `playwright.config.ts` — Playwright runtime config, project definitions, retries/workers, env loading
- `.env.example` — environment template for local setup
- `.env` — base local environment variables (developer-maintained)
- `.env.qa` — QA-specific overrides (applied when `TEST_ENV=qa`)
- `package.json` — dependencies and npm scripts
- `node_modules/` — installed dependencies (generated)
- `playwright-report/` — HTML report output (generated)
- `test-results/` — Playwright run artifacts (generated)

### `app/` (framework and reusable automation logic)

- `app/admin_website/`
  - `admin.routes.ts` — admin-site route definitions or route constants

- `app/common/` (shared cross-domain building blocks)
  - `config/`
    - `ConfigProvider/config.provider.ts` — config provider abstraction
    - `dto/environment.dto.ts` — typed environment DTOs
    - `environment.types.ts` — environment type definitions
    - `runtime.config.ts` — runtime configuration assembly
    - `index.ts` — config exports
  - `data/`
    - `test-users.data.ts`, `test-users.ts` — shared user data definitions
    - `index.ts` — data exports
  - `mail/`, `mailservice/`
    - `mail.template.ts` — email template placeholders
  - `testrail/`
    - `test-cases.ts`, `testcases.sample.ts` — test case mapping/sample data
  - `utils/`
    - `helpers.ts`, `time.util.ts`, `url.util.ts`, `index.ts` — common utility helpers
  - `web/`
    - `api.client.ts`, `page.client.ts`, `web-client.ts`, `index.ts` — base clients/wrappers for web/API interactions
  - `index.ts` — top-level common exports

- `app/other_product_shared_be/`
  - `overview.ts` — placeholder/overview for shared backend integration area

- `app/product/` (product-specific domain)
  - `api/`
    - `controller/user_controller/CRUD/user.controller.ts` — user controller operations
    - `controller/user_controller/CRUD/readme.txt` — placeholder CRUD note
    - `dto/user.dto.json` — user DTO contract
    - `facade/businessObjects/StepObject/user-step.object.ts` — step object/business object layer
  - `data/`
    - `product-data.json` — product domain data set
  - `db/`
    - `common/connection/db.config.json` — DB connection config
    - `entity/user.entity.json` — user entity model/schema
    - `facede/dao/user.dao.ts` — DAO layer for user operations
  - `event/`
    - `mq/kafka/etc/dto/user-event.dto.json` — event DTO contract
    - `mq/kafka/etc/topic/user-events.topic.txt` — topic naming/reference
  - `mobile/`
    - `native/component/tabbar.component.json` — mobile component placeholder
    - `native/screen/home.screen.json` — mobile screen placeholder
  - `web/`
    - `component/header.component.json` — component metadata placeholder
    - `components/*.ts` — reusable UI component helpers
    - `facade/bo/steps/precondition.steps.ts` — step definitions/preconditions
    - `pages/*.ts` — page objects and page factory for saucedemo flows

### `test/` (specs and test-side resources)

- `test/admin_website/`
  - `admin-web.spec.ts` — admin website test spec

- `test/common/`
  - `global-fixtures.json` — shared fixture definitions

- `test/e2e/`
  - `web_all_products/all-products.e2e.spec.ts` — cross-product end-to-end flow

- `test/other_product_shared_be/`
  - `other-product.spec.ts` — other product/backend shared validation

- `test/product/`
  - `api/user-api.spec.ts` — product API tests
  - `common/data_preparations/prepare-user-data.ps1` — PowerShell data preparation utility
  - `common/fixture/user.fixture.json` — product fixture data
  - `e2e/multi_role_business_flows/business-flow.spec.ts` — multi-role flow tests
  - `web/specific_pages/small_flows/specific_roles/role-flow.spec.ts` — focused role-based page flow tests

- `test/saucedemo/`
  - `fixtures/saucedemo.fixture.ts` — saucedemo fixture setup
  - `saucedemo.spec.ts` — saucedemo UI spec

## Notes

- Several areas are intentionally placeholders to illustrate architecture layers (`mobile`, some JSON contracts, CRUD readme placeholder).
- Keep generated folders (`node_modules`, `playwright-report`, `test-results`) out of manual edits.
- Add new test domains under both `app/<domain>` and `test/<domain>` to keep framework and spec layers aligned.
