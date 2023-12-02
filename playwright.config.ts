import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
	testDir: "./tests",
	outputDir: "./test-results/",
	timeout: 30000,
	// fullyParallel: true,
	// forbidOnly: !!process.env.CI,
	// retries: process.env.CI ? 2 : 0,
	// workers: process.env.CI ? 1 : "50%",
	// reporter: "html",
	use: {
		baseURL: "http://localhost:5173/",
		// trace: "on-first-retry",
		// screenshot: "only-on-failure",
		// video: "on-first-retry",
		// colorScheme: "dark",
		// locale: "en",
		// viewport: { width: 1280, height: 720 },
		// acceptDownloads: false,
		// ignoreHTTPSErrors: true,
		// httpCredentials: {
		// 	username: "user",
		// 	password: "pass",
		// },
		// 	offline: true,
		// 	actionTimeout: 500,
		// 	browserName: "chromium",
		// 	bypassCSP: true,
		// 	channel: "chrome",
		// 	headless: true,
		// 	testIdAttribute: "pw-test-id",
	},
	// projects: [
	// 	{
	// 		name: "chromium",
	// 		use: { ...devices["Desktop Chrome"] },
	// 	},

	// 	{
	// 		name: "firefox",
	// 		use: { ...devices["Desktop Firefox"] },
	// 	},

	// 	{
	// 		name: "webkit",
	// 		use: { ...devices["Desktop Safari"] },
	// 	},
	// ],
	// webServer: {
	// 	command: "yarn dev",
	// 	url: "http://127.0.0.1:5173",
	// 	reuseExistingServer: !process.env.CI,
	// },
	// expect: {
	// 	timeout: 5000,
	// 	toHaveScreenshot: {
	// 		maxDiffPixels: 10,
	// 	},
	// 	toMatchSnapshot: {
	// 		maxDiffPixelRatio: 0.1,
	// 	},
	// },
});
