import { useState } from 'react'
import type { Dayjs } from 'dayjs'
import { Button, DatePicker, message, Space, version } from 'antd'

function TestPage() {
  const [date, setDate] = useState<Dayjs | null>(null)
  const [messageApi, contextHolder] = message.useMessage()
  const handleChange = (value: Dayjs | null) => {
    messageApi.info(`您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`)
    setDate(value)
  }

  return (
    <>
      <div style={{ width: 400, margin: '100px auto' }}>
        <h1>antd version: {version}</h1>
        <h1 className='text-3xl font-bold underline'>Hello world!</h1>
        <Space>
          <DatePicker onChange={handleChange} />
          <Button>Primary Button</Button>
        </Space>
        <div style={{ marginTop: 16 }}>当前日期：{date ? date.format('YYYY年MM月DD日') : '未选择'}</div>
      </div>
      {contextHolder}
    </>
  )
}

export default TestPage
