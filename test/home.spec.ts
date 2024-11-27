import { test, expect } from '@playwright/test';

test('home page has my name visible as heading', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Fausto Moya' })).toBeVisible();
});

test('home page has a link that redirects to my LinkedIn profile', async ({ page }) => {
  await page.goto('/');
  const linkedInPage = page.waitForEvent('popup');
  const link = await page.getByLabel('Fausto Moya on LinkedIn');
  await expect(link).toBeVisible();
  await expect(link).toHaveAttribute('href', 'https://www.linkedin.com/in/fausto-moya');
  await link.click();
  expect((await linkedInPage).url()).toContain("https://www.linkedin.com/");
});

test('home page has a link that redirects to my GitHub profile', async ({ page }) => {
  await page.goto('/');
  const gitHubPromise = page.waitForEvent('popup');
  const link = await page.getByLabel('Fausto Moya on GitHub');
  await expect(link).toBeVisible();
  await link.click();
  const gitHubPage = await gitHubPromise;
  await expect(gitHubPage).toHaveURL('https://github.com/MoyaF');
});

test('home page has a link that has my email address', async ({ page }) => {
  await page.goto('/');
  const emailTo = page.getByLabel('Email Fausto Moya');
  await expect(emailTo).toHaveAttribute('href', 'mailto:faustomoya99@gmail.com');
});