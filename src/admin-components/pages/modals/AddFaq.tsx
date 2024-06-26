/* eslint-disable no-nested-ternary */

'use client'

import React, { useEffect, useState } from 'react'
import { Box, Typography, Button, Stack } from '@mui/material'
import dynamic from 'next/dynamic'
import TextFieldWraper from '@/admin-components/items/TextfieldWraper'

const JoditTextEditor = dynamic(
  () => import('@/admin-components/common/JoditTextEditor'),
  { ssr: false }
)

const AddFaq = (props: any) => {
  const { open, handleShowModal, handleAddQuestion, edit } = props
  const [values, setValues] = useState({ type: '', question: '', answer: '' })

  useEffect(() => {
    if (edit?.question) {
      setValues({
        type: edit?.type,
        question: edit.question,
        answer: edit.answer,
      })
    }
  }, [edit])

  return (
    <Box
      sx={{
        position: 'fixed',
        top: open ? 0 : '50%',
        left: open ? 0 : '50%',
        right: open ? 0 : '50%',
        bottom: open ? 0 : '50%',
        // transform: 'translate(-50%, -50%)',
        // width: '100%',
        // height: '100%',
        bgcolor: 'rgba(0,0,0,0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999999,
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          width: { xs: '96%', md: 700 },
          height: 'auto',
          bgcolor: 'white',
          p: 3,
          borderRadius: '6px',
        }}
      >
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{
            fontSize: '16px',
            fontWeight: 600,
            color: '#000',
            fontFamily: 'Public Sans',
            mb: 3,
          }}
        >
          {edit?.question ? 'Update' : 'Add'} Question
        </Typography>
        <Box
          sx={{
            width: '100%',
            height: 'calc(100% - 80px)',
            bgcolor: 'red',
          }}
        >
          <TextFieldWraper
            label="Type"
            placeholder="e.g. General Questions"
            value={values?.type}
            name="type"
            onChange={(e: any) =>
              setValues({ ...values, type: e.target.value })
            }
          />

          <TextFieldWraper
            label="Question"
            placeholder="Enter question."
            value={values?.question}
            name="question"
            onChange={(e: any) =>
              setValues({ ...values, question: e.target.value })
            }
          />

          <JoditTextEditor
            handleEditorValue={(val: any) =>
              setValues({ ...values, answer: val })
            }
            value={values?.answer}
          />
        </Box>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="end"
          gap="1rem"
          sx={{ mt: 3 }}
        >
          <Button
            variant="outlined"
            sx={{
              border: '1px solid var(--brown)',
              textTransform: 'capitalize',
              fontFamily: 'Public Sans',
            }}
            onClick={() => handleShowModal(null)}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            sx={{
              border: '1px solid var(--brown)',
              textTransform: 'capitalize',
              fontFamily: 'Public Sans',
            }}
            onClick={() => {
              if (!values?.question || !values?.answer || !values?.type) return
              handleAddQuestion(values)
              if (edit?.question) {
                handleAddQuestion(values, 'edit')
              } else {
                handleAddQuestion(values, 'add')
              }
              setValues({ question: '', answer: '', type: '' })
              handleShowModal(null)
            }}
          >
            {edit?.question ? 'Update' : 'Add'}
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default AddFaq
