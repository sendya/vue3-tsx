import styles from './Test.module.less'

import { defineComponent, onMounted, reactive, ref, SetupContext } from '@vue/composition-api'
import { Pagination, Select, Radio, DatePicker, TimePicker, Divider, Button } from 'ant-design-vue'
import { useStore } from '@/store'
import { i18nRender } from '@/locales'

const useState = reactive({
  name: ref<string>(null),
  clicked: ref<boolean>(false),
  clickNumber: ref<number>(0)
})

export default defineComponent({
  setup (props: {}, { root: { $i18n } }: SetupContext) {
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
        <div class={styles.locale}>
          <div class={styles.example}>
            <Pagination defaultCurrent={1} total={50} showSizeChanger />
          </div>
          <div class={[styles.example, styles.mgr]}>
            <Select showSearch style={{ width: '200px', marginRight: '12px' }}>
              <Select.Option value={'jack'}>Jack</Select.Option>
              <Select.Option value={'lucy'}>Lucy</Select.Option>
            </Select>
            <DatePicker style={{ marginRight: '12px' }} />
            <TimePicker />
          </div>
          <Divider>i18n example</Divider>
          <p>{ i18nRender('main.week.mon') }</p>
          <p>{ i18nRender('main.week.tue') }</p>
          <p><Button onClick={() => { useState.clickNumber++ }}>{ i18nRender('main.clickme') }</Button></p>
          {useState.clickNumber > 0 && (
            <i18n path="main.clickmsg" tag="p" places={{ number: useState.clickNumber }} />
          )}
          <Divider />
        </div>
      </div>
    )
  }
})
