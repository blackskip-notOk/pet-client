import { describe } from "node:test";
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
});
