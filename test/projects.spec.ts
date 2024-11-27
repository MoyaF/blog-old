import { expect, test } from "@playwright/test";

test("should display the Projects heading", async ({ page }) => {
  await page.goto("/projects");
  await expect(page.getByRole("heading", { name: "Projects" })).toBeVisible();
});
