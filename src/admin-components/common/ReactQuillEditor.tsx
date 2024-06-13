/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */

'use client'

import React, { useEffect, useRef } from 'react'
import ReactQuill, { Quill } from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize-module-react'

Quill.register('modules/imageResize', ImageResize)

const Font = ReactQuill.Quill.import('formats/font')
Font.whitelist = ['large', 'medium', 'small', 'regular', 'bold', 'pullquote']

ReactQuill.Quill.register(Font, true)

const ReactQuillEditor = (props: any) => {
  const { height, handleEditorValue, value } = props
  const quillRef = useRef(null)

  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        {
          color: ['#F00', '#0F0', '#00F', '#000', '#FFF', 'color-picker'],
        },
      ],
      [{ align: [] }],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    clipboard: {
      matchVisual: false,
    },
    imageResize: {
      parchment: ReactQuill.Quill.import('parchment'),
      modules: ['Resize', 'DisplaySize'],
    },
  }

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
    'color',
    'background',
    'align',
  ]

  useEffect(() => {
    const quill = (quillRef.current as unknown as ReactQuill)?.getEditor()
    const toolbar = quill?.getModule('toolbar')

    const showColorPicker = (val: any) => {
      if (val === 'color-picker') {
        const picker = document.createElement('input')
        picker.type = 'color'
        picker.style.display = 'none'
        picker.value = '#FF0000'
        document.body.appendChild(picker)

        picker.addEventListener(
          'change',
          () => {
            quill.format('color', picker.value)
          },
          false
        )

        picker.click()
      } else {
        quill.format('color', val)
      }
    }

    toolbar.addHandler('color', showColorPicker)
  }, [])

  return (
    <ReactQuill
      theme="snow"
      ref={quillRef}
      value={value}
      onChange={(val: any) => {
        console.log('val ->>>', val)
        // setValue(val)
        handleEditorValue(val)
      }}
      style={{ height: height || '250px' }}
      modules={modules}
      formats={formats}
      bounds="#root"
    />
  )
}

export default ReactQuillEditor
