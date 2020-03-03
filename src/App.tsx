import { defineComponent } from '@vue/composition-api'
import { LocaleProvider } from 'ant-design-vue'
import { langState } from '@/locales'

export default defineComponent({
  name: 'App',
  setup () {
    return () => (
      <LocaleProvider locale={langState.locale}>
        <div id="root">
          <router-view />
        </div>
      </LocaleProvider>
    )
  }
})
