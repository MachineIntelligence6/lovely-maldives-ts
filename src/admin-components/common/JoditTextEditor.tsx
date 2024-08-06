/* eslint-disable object-shorthand */
/* eslint-disable import/no-extraneous-dependencies */

'use client'

import React, { useMemo, useRef } from 'react'
import JoditEditor, { Jodit } from 'jodit-react'

const JoditTextEditor = (props: any) => {
  const { handleEditorValue, value } = props
  const editor = useRef(null)

  const config = useMemo(
    () => ({
      controls: {
        font: {
          component: 'select',
          // Redefine font.list
          list: Jodit.atom({
            'Century Gothic': 'Century Gothic',
            'Tahoma,Geneva,sans-serif': 'Tahoma',
            'Public Sans': 'Public Sans',
            'Roboto Medium,Arial,sans-serif': 'Roboto',
          }),
        },
      },
      uploader: {
        insertImageAsBase64URI: true, // Allows uploading images as base64
        url: '/upload', // URL to your backend upload endpoint
        format: 'json',
        method: 'POST',
        headers: {
          Authorization: 'Bearer <your-token>', // Optional, if you need to send headers
        },
        process: function (response: any) {
          // Custom processing of the response from the server
          return {
            files: response.files || [],
            path: response.path || '',
            baseurl: response.baseurl || '',
            error: response.error || '',
          }
        },
      },
      buttons: [
        'source',
        '|',
        'bold',
        'italic',
        'underline',
        '|',
        'ul',
        'ol',
        '|',
        'outdent',
        'indent',
        '|',
        'font',
        'fontsize',
        'brush',
        'paragraph',
        '|',
        'image',
        'video',
        'table',
        'link',
        '|',
        'align',
        'undo',
        'redo',
        '|',
        'hr',
        'eraser',
        'fullsize',
        '|',
        'file',
      ],
    }),
    []
  )

  // const config = useMemo(
  // 	{
  // 		readonly: false, // all options from https://xdsoft.net/jodit/docs/,
  // 		placeholder: 'Start typings...'
  // 	},
  // 	[]
  // );

  return (
    <JoditEditor
      ref={editor}
      value={value}
      config={config as any}
      onBlur={(newContent) => {
        handleEditorValue(newContent)
      }}
    />
  )
}

export default JoditTextEditor
