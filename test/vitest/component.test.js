import { describe, expect, it } from 'vitest'
import Component from '../../src/Component.js'

describe('Component', () => {
  it('should render', async () => {
    const component = new Component()
    const result = await component.render()
    expect(result).toBe(true)
  })

  it('should error', async () => {
    const component = new Component()
    component.work = Promise.reject(new Error('error')) // throws an error
    // proper way around this is to either stub the method or enclose the reject in a function
    // component.work = () => Promise.reject(new Error('error'))
    const result = await component.render()
    expect(result).toBe(false)
  })
})
