import { defineComponent } from '@vue/composition-api'
import { demoState } from '@/hooks/demoState'
import { Button, Divider, Input, Popover } from 'ant-design-vue'

export default defineComponent({
  setup () {
    return () => (
      <div style={{ textAlign: 'center', fontSize: '24px' }}>
        <h3>simple page2</h3>
        <Button onClick={() => {
          demoState.clickNum++
        }}>点我</Button>
        <h4>{demoState.clickNum}</h4>
        <Divider />
        <h4>
          你的名字：{demoState.name}
        </h4>
        <Popover content={(
          <Input value={demoState.name} onChange={(e: Event) => {
            demoState.name = (e.target as HTMLInputElement).value
          }
          } />
        )}>
          <Button>换名字</Button>
        </Popover>

      </div>
    )
  }
})
