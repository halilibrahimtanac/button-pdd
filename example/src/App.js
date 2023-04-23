import React from 'react'

import { Button } from 'button-pdd'
import 'button-pdd/dist/index.css'

const App = () => {
  return (
    <div
      style={{
        width: '400px',
        height: '50px',
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <Button type='primary'>primary</Button>
      <Button type='default'>default</Button>
      <Button type='dashed'>dashed</Button>
      <Button type='text'>text</Button>
      <Button type='link'>link</Button>
    </div>
  )
}

export default App
