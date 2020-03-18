import { defineComponent } from '@vue/composition-api'
import { ConfigProvider } from 'ant-design-vue'
import { langState } from '@/locales'

export default defineComponent({
  name: 'App',
  setup () {
    return () => (
      <ConfigProvider locale={langState.ant}>
        <div id="root">
          <router-view />
        </div>
      </ConfigProvider>
    )
  }
})
