/* eslint-disable no-nested-ternary */

'use client'

import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import {
  Box,
  Typography,
  Modal,
  Button,
  Stack,
} from '@mui/material'
import dynamic from 'next/dynamic'
import TextFieldWraper from '@/admin-components/items/TextfieldWraper'
import { CustomLabel } from '@/admin-components/styled/CustomLabels'

const JoditTextEditor = dynamic(
  () => import('@/admin-components/common/JoditTextEditor'),
  { ssr: false }
)

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '96%', md: 700 },
  bgcolor: 'background.paper',
  boxShadow: 24,
  maxHeight: '500px',
  overflow: 'auto',
  borderColor: '0px solid transparent',
  borderRadius: '6px',
  py: '30px',
  px: '18px',
}

const AddQuestion = (props: any) => {
  const { open, handleShowModal, handleAddQuestion, edit } = props
  const [values, setValues] = useState({ question: '', answer: '' })
  console.log('edit s ', edit)
  useEffect(() => {
    if (edit?.question) {
      setValues({ question: edit.question, answer: edit.answer })
    }
  }, [edit])

  return (
    <div>
      <Modal
        open={open}
        onClose={() => handleShowModal(null)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-tag"
      >
        <Box sx={style}>
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

          <TextFieldWraper
            label="Question"
            placeholder="Enter question."
            value={values?.question}
            name="question"
            onChange={(e: any) =>
              setValues({ ...values, question: e.target.value })
            }
          />

          <CustomLabel id="demo-simple-select-label" sx={{ mb: 2, fontFamily: 'Public Sans' }}>
            Answer
          </CustomLabel>
          <JoditTextEditor
            handleEditorValue={(val: any) =>
              setValues({ ...values, answer: val })
            }
            value={values?.answer}
          />

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
                if (!values?.question || !values?.answer) return
                handleAddQuestion(values)
                if (edit?.question) {
                  handleAddQuestion(values, 'edit')
                } else {
                  handleAddQuestion(values, 'add')
                }
                setValues({ question: '', answer: '' })
                handleShowModal(null)
              }}
            >
              {edit?.question ? 'Update' : 'Add'}
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  )
}

export default AddQuestion
