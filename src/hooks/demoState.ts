import { reactive, ref } from '@vue/composition-api'

export const demoState = reactive({
  clickNum: ref<number>(0),
  name: ref<string>(null)
})
