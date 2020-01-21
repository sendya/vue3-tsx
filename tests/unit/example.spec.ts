import { shallowMount } from '@vue/test-utils'
import Test from '@/views/Test.tsx'

describe('Test.tsx', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Test, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
