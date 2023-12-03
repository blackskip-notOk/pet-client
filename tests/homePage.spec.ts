import { describe } from "node:test";
import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Home Page @page", () => {
	test.beforeEach(async ({ page }) => {
		await page.goto("/");
	});

	test("has a title", async ({ page }) => {
		await expect(page).toHaveTitle(/learning react/i);
	});

	test.describe("navbar navigation", () => {
		test("go to users page", async ({ page }) => {
			await page.getByRole("link", { name: /users/i }).click();

			await expect(page).toHaveURL("/users");
		});

		test("go to todo page", async ({ page }) => {
			await page.getByRole("link", { name: /todo list/i }).click();

			await expect(page).toHaveURL("/todo");
		});

		test("go to examples page", async ({ page }) => {
			await page.getByRole("link", { name: /examples/i }).click();

			await expect(page).toHaveURL("/examples");
		});
	});

	test.describe("accessibility @a11y", () => {
		test("should not have any automatically detectable accessibility issues", async ({
			page,
		}, testInfo) => {
			const accessibilityScanResults = await new AxeBuilder({ page })
				.withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
				.analyze();

			expect(accessibilityScanResults.violations).toEqual([]);
		});
	});
});
