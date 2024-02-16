import { expect } from 'chai'
import sinon from 'sinon'
import Component from '../../src/Component.js'

describe('Component', function() {
  it('should render', async function() {
    const component = new Component()
    const result = await component.render()
    expect(result).to.be.true
  })

  it('should error', async function() {
    const component = new Component()
    sinon.stub(component, 'work').resolves(Promise.reject(new Error('error')))
    const result = await component.render()
    expect(result).to.be.false
  })
})
