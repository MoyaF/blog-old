import { test, expect } from '@playwright/test';

test('home page has my name visible as heading', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Fausto Moya' })).toBeVisible();
});

test('home page has a link that redirects to my LinkedIn profile', async ({ page }) => {
  await page.goto('/');
  const linkedInPagePromise = page.waitForEvent('popup');
  const link = page.getByRole('link', { name: 'LinkedIn' });
  await expect(link).toBeVisible();
  await link.click();
  const linkedInPage = await linkedInPagePromise;
  await expect(linkedInPage).toHaveURL('https://www.linkedin.com/in/fausto-moya');
});

test('home page has a link that redirects to my GitHub profile', async ({ page }) => {
  await page.goto('/');
  const gitHubPromise = page.waitForEvent('popup');
  const link = page.getByRole('link', { name: 'GitHub' });
  await expect(link).toBeVisible();
  await link.click();
  const gitHubPage = await gitHubPromise;
  await expect(gitHubPage).toHaveURL('https://github.com/MoyaF');
});