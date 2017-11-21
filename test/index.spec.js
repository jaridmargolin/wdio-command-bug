/* eslint-env mocha */
'use strict'

/* -----------------------------------------------------------------------------
 * dependencies
 * -------------------------------------------------------------------------- */

// 3rd party
const assert = require('chai').assert

/* -----------------------------------------------------------------------------
 * test
 * -------------------------------------------------------------------------- */

describe('components', function () {
  it('This test passes', function () {
    const body1 = browser.$('body')
    const body2 = browser.$('body')

    assert.ok(body1.value)
    assert.ok(body2.value)
  })

  it('This test fails due to body2 returing "No Such Element"', function () {
    browser.addCommand('returnBody', () => {
      return browser.$('body')
    })

    const body1 = browser.returnBody()
    const body2 = browser.$('body')

    assert.ok(body1.value)
    assert.ok(body2.value)
  })
})
