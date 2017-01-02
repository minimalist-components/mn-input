import {expect} from 'chai'

fixture `mn-input`
  .page('http://localhost:3000')
  .beforeEach(async page => await page.wait(5000))

test('type username', async page => {
  await page.typeText('#username', 'Darlan Mendonça')
  const input = await page.select('#username')

  expect(input.value).to.equal('Darlan Mendonça')
})

test('type password', async page => {
  await page.typeText('#password', 'loremipsum')
  const input = await page.select('#password')

  expect(input.value).to.equal('loremipsum')
})

test('type email', async page => {
  await page.typeText('#email', 'darlanmendonca@gmail.com')
  const input = await page.select('#email')

  expect(input.value).to.equal('darlanmendonca@gmail.com')
})
