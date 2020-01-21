import styles from './Test.module.less'

import { createComponent, onMounted } from '@vue/composition-api'
import { Pagination, Select, Radio, DatePicker, TimePicker, Divider } from 'ant-design-vue'
import { useStore } from '@/store'

export default createComponent({
  setup (props, { root: { $i18n } }) {
    const store = useStore()

    onMounted(() => {
      console.log('Test onMounted.')
    })
    return () => (
      <div class={styles.TestPage}>
        <h1>{ $i18n.t('main.test') }</h1>
        <div style={{ margin: '12px 0' }}>
          <Radio.Group
            value={store.getters['app/lang']}
            onChange={(e: Event) => {
              const localeValue = (e.target as HTMLInputElement).value
              store.dispatch('app/SET_LANG', localeValue)
            }}
          >
            <Radio.Button key="en" value={'en-US'}>English</Radio.Button>
            <Radio.Button key="zh" value={'zh-CN'}>中文</Radio.Button>
          </Radio.Group>
        </div>
        <div class="locale">
          <div class="example">
            <Pagination defaultCurrent={1} total={50} showSizeChanger />
          </div>
          <div class="example" style={{ margin: '12px 0' }}>
            <Select showSearch style={{ width: '200px', marginRight: '12px' }}>
              <Select.Option value={'jack'}>Jack</Select.Option>
              <Select.Option value={'lucy'}>Lucy</Select.Option>
            </Select>
            <DatePicker style={{ marginRight: '12px' }} />
            <TimePicker />
          </div>
          <Divider />
          <p>{ $i18n.t('main.week.mon') }</p>
          <p>{ $i18n.t('main.week.tue') }</p>
        </div>
      </div>
    )
  }
})
