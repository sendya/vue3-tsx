import styles from './BasicLayout.module.less'
import { defineComponent } from '@vue/composition-api'
import { Divider } from 'ant-design-vue'
import { i18nRender } from '@/locales'

export default defineComponent({
  name: 'BasicLayout',
  setup () {
    return () => (
      <div class={styles.BasicLayout}>
        <div class={styles.nav}>
          <router-link to={'/'}>{ i18nRender('main.nav.home')}</router-link>
          <Divider type={'vertical'} />
          <router-link to={'/page2'}>{ i18nRender('main.nav.page2') }</router-link>
        </div>
        <router-view />
      </div>
    )
  }
})
