const { firefox } = require('playwright')

async function main () {
  const browser = await firefox.launch()
  const context = await browser.newContext()
  const page = await context.newPage()

  await page.goto('file://' + __dirname + '/html/index.html')

  page.on('console', (msg) => {
    console.info(msg)
  })

  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        await browser.close()
        resolve()
      } catch (err) {
        reject(err)
      }
    }, 5000)
  })
}

main()
  .catch(err => {
    console.error(err)
    process.exit(1)
  })
