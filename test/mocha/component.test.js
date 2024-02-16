import { expect } from 'chai'
import Component from '../../src/Component.js'

describe('Component', function() {
  it('should render', async function() {
    const component = new Component()
    const result = await component.render()
    expect(result).to.be.true
  })

  it('should error', async function() {
    const component = new Component()
    component.work = Promise.reject(new Error('error')) // doesn't throw an error
    const result = await component.render()
    expect(result).to.be.false
  })
})
