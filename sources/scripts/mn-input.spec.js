import {expect} from 'chai'

fixture `mn-input`
  .page('http://localhost:3000')

test('type username', async page => {
  await page.typeText('#username', 'Darlan Mendonça')
  const input = await page.select('#username')

  expect(input.value).to.equal('Darlan Mendonça')
});
