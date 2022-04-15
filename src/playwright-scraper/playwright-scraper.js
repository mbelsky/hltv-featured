const alerter = require('@hltvf/monitoring/alerter')

const playwright = require('playwright-chromium')

async function launchChromium() {
  return await playwright.chromium.launch()
}

async function scrap(browser, url) {
  const context = await browser.newContext({
    // acceptDownloads: false,
    // javaScriptEnabled: false,
    locale: 'en-GB',
  })

  const page = await context.newPage()

  // await page.goto(url, {
  //   waitUntil: 'domcontentloaded',
  //   // waitUntil: 'load',
  // })
  // await page.goto(url)

  try {
    const requestPromise = page.waitForRequest(url, {
      timeout: 5000,
    })
    const responsePromise = page.waitForResponse(url, {
      timeout: 5000,
    })

    const [req, res] = await Promise.all([
      requestPromise,
      responsePromise,
      page.goto(url),
    ])
    const resH = await res.allHeaders()
    const reqH = await req.allHeaders()
    const text = await res.text()
    console.log(text.substring(0, 1))
    console.log(`reqH`, reqH)
    console.log(`resH`, resH)
  } catch (e) {
    console.log('hru')
  }
  //   const content = await page.content()

  //   throw new Error(
  //     `Wait for wq list selector failed. Page content: ${content}`,
  //   )
  // }

  const innerHtml = await page.content()
  return innerHtml
}

async function getHtml() {
  const browser = await launchChromium()

  try {
    const result = await scrap(browser, 'https://www.hltv.org/matches')

    return result
  } finally {
    try {
      await browser.close()
    } catch (e) {
      alerter.error('Failed to close browser', e)
    }
  }
}

getHtml().then((value) => {
  console.log(value)
})
