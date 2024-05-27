/* eslint-disable import/no-extraneous-dependencies */

'use client'

import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const ReactQuillEditor = () => {
  const [value, setValue] = useState('')

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={setValue}
      style={{ height: '200px' }}
    />
  )
}

export default ReactQuillEditor
