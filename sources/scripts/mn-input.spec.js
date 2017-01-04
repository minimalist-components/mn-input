import {expect} from 'chai'

fixture `mn-input`
  .page('http://localhost:3000/demo.html')

test('is visible', async page => {
  const username = await page.select('#username')
  const password = await page.select('#password')
  const email = await page.select('#email')

  expect(username.visible).to.be.true
  expect(password.visible).to.be.true
  expect(email.visible).to.be.true
})

test('display a placeholder', async page => {
  const username = await page.select('#username')
  const password = await page.select('#password')
  const email = await page.select('#email')

  expect(username.textContent).to.equal('username')
  expect(password.textContent).to.equal('password')
  expect(email.textContent).to.equal('email')
})

test('type value', async page => {
  await page.typeText('#username', 'John Snow')
  await page.typeText('#password', 'loveygrit')
  await page.typeText('#email', 'john@snow.com')

  const username = await page.select('#username')
  const password = await page.select('#password')
  const email = await page.select('#email')

  expect(username.value).to.equal('John Snow')
  expect(password.value).to.equal('loveygrit')
  expect(email.value).to.equal('john@snow.com')
})

test('set value', async page => {
  const username = await page.select('#username')
  const password = await page.select('#password')
  const email = await page.select('#email')

  username.value = 'John Snow'
  password.value = 'loveygrit'
  email.value = 'john@snow.com'

  expect(username.value).to.equal('John Snow')
  expect(password.value).to.equal('loveygrit')
  expect(email.value).to.equal('john@snow.com')
})
