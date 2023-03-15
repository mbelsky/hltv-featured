const alerter = require('@hltvf/monitoring/alerter')
const playwright = require('playwright-chromium')

async function launchChromium() {
  return await playwright.chromium.launch()
}

async function scrap(browser, url) {
  const context = await browser.newContext({
    acceptDownloads: false,
    javaScriptEnabled: false,
    locale: 'en-GB',
  })

  const page = await context.newPage()

  page.setExtraHTTPHeaders({
    accept:
      'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'accept-language': 'en-US,en;q=0.9',
    'cache-control': 'no-cache',
    pragma: 'no-cache',
    'sec-ch-ua':
      '"Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"macOS"',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'none',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1',
    'user-agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
  })

  // Too lazy to remove these comments
  // const requestPromise = page.waitForRequest(url, {
  //   timeout: 5000,
  // })
  // const responsePromise = page.waitForResponse(url, {
  //   timeout: 5000,
  // })

  // const [req, res] = await Promise.all([
  //   requestPromise,
  //   responsePromise,
  //   page.goto(url),
  // ])

  // const resH = await res.allHeaders()
  // const reqH = await req.allHeaders()
  // const text = await res.text()

  await page.goto(url)

  const innerHtml = await page.content()
  return innerHtml
}

async function getHtml(url) {
  const browser = await launchChromium()

  try {
    const result = await scrap(browser, url)

    return result
  } finally {
    try {
      await browser.close()
    } catch (e) {
      alerter.error('Failed to close browser', e)
    }
  }
}

module.exports = {
  getHtml,
}
