import styles from './BasicLayout.module.less'
import { createComponent } from '@vue/composition-api'

export default createComponent({
  name: 'BasicLayout',
  setup () {
    return () => (
      <div class={styles.BasicLayout}>
        <router-view />
      </div>
    )
  }
})
