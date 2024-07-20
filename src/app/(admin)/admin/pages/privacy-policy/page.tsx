/* eslint-disable array-callback-return */
/* eslint-disable no-else-return */
/* eslint-disable no-alert */

'use client'

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Box,
  Button,
  Stack,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import React, { useEffect, useState, useTransition } from 'react'
import CustomLoader from '@/admin-components/common/CustomLoader'
import { CustomCard } from '@/admin-components/styled/CustomCard'
import HeadingWraper from '@/admin-components/common/HeadingWraper'
import {
  addPrivacyPolicyRequest,
  getPrivacyPolicyRequest,
} from '@/utils/api-requests/privacy-policy.request'
import AddQuestion from '@/admin-components/pages/modals/AddQuestion'
import TextFieldWraper from '@/admin-components/items/TextfieldWraper'

const PrivacyPolicy = () => {
  const [isPending, startTransition] = useTransition()
  const [alertMsg, setAlertMsg] = useState({ type: '', message: '' })
  const [detectChange, setDetectChange] = useState(true)
  const [policies, setPolicies] = useState([] as any)
  const [edit, setEdit] = useState('' as any)
  const [open, setOpen] = useState(false)
  const [values, setValues] = useState({ title: '' })
  const [editId, setEditId] = useState('')

  const handleShowModal = () => setOpen(!open)

  const handleAddQuestion = (newQues: any, type: string) => {
    if (type === 'add') {
      setPolicies([...policies, newQues])
    } else {
      setPolicies(
        policies.map((pol: any, ind: any) => {
          if (ind === editId) {
            return newQues
          } else {
            return pol
          }
        })
      )
    }
    setEdit('')
  }
  const editQuestion = (policy: any, id: any) => {
    setEditId(id)
    setEdit(policy)
    handleShowModal()
  }

  const deleteQuestion = (ques: string) => {
    const sure = window.confirm('Are you sure you want to delete?')
    if (!sure) return
    setPolicies(policies.filter((p: any) => p.question !== ques))
  }

  const handleSave = () => {
    try {
      startTransition(async () => {
        const res = await addPrivacyPolicyRequest({
          title: values?.title,
          policies,
        })
        const data = res?.data
        if (data?.status === 201) {
          getPrivacyPolicy()
          setAlertMsg({ type: 'success', message: 'Data saved successfully.' })
          setTimeout(() => {
            setAlertMsg({ type: '', message: '' })
          }, 3000)
        } else {
          setAlertMsg({ type: 'error', message: data?.message })
          setTimeout(() => {
            setAlertMsg({ type: '', message: '' })
          }, 3000)
        }
      })
      // setDetectChange(false)
    } catch (error: any) {
      setAlertMsg({
        type: 'error',
        message: 'Error occured while saving data, please try again.',
      })
      setTimeout(() => {
        setAlertMsg({ type: '', message: '' })
      }, 3000)
      console.log('error ', error)
    }
  }

  const getPrivacyPolicy = async () => {
    try {
      startTransition(async () => {
        const res = await getPrivacyPolicyRequest()
        const data = res?.data
        if (data?.status === 200) {
          setPolicies(data?.data?.policies)
          setValues({ title: data?.data?.title })
        }
      })
    } catch (error: any) {
      console.log('error ', error)
    }
  }

  useEffect(() => {
    getPrivacyPolicy()
  }, [])
  return (
    <CustomCard sx={{ padding: '40px !important', mt: 2 }}>
      <AddQuestion
        open={open}
        edit={edit}
        handleShowModal={handleShowModal}
        handleAddQuestion={handleAddQuestion}
      />
      {isPending && <CustomLoader />}
      {alertMsg.message && (
        <Alert sx={{ mb: 2 }} severity={alertMsg.type as any}>
          {alertMsg.message}
        </Alert>
      )}

      <HeadingWraper
        title="Privacy Policy"
        detectChange={detectChange}
        handleSave={handleSave}
      />

      <Box sx={{ mb: 3 }}>
        <TextFieldWraper
          label="Title"
          placeholder="Enter title."
          name="title"
          value={values.title}
          onChange={(e: any) => setValues({ ...values, title: e.target.value })}
        />
      </Box>

      <Button
        sx={{
          bgcolor: 'var(--blue)',
          color: 'white',
          mt: 1,
          width: '160px',
          height: '36px',
          '&:hover': {
            bgcolor: 'var(--blue)',
          },
        }}
        onClick={handleShowModal}
      >
        Add Question
      </Button>

      {policies?.length > 0 && (
        <Box sx={{ mt: 7, mb: 12 }}>
          {policies?.map((policy: any, index: number) => {
            return (
              <Accordion
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                sx={{
                  mt: '15px',
                  py: '10px',
                  px: '0 !important',
                  boxShadow: 'none',
                  border: '1px solid rgb(223, 223, 223)',
                  bgcolor: 'white',
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ width: '100%' }}
                  >
                    <Typography sx={{ px: 1 }}>{policy.question}</Typography>
                    <Stack
                      direction="row"
                      alignItems="center"
                      sx={{ mr: 2, gap: 1 }}
                    >
                      <EditIcon
                        sx={{
                          color: 'var(--blue)',
                          fontSize: '22px',
                          cursor: 'pointer',
                        }}
                        onClick={() => editQuestion(policy, index)}
                      />
                      <DeleteIcon
                        sx={{
                          color: 'var(--red)',
                          fontSize: '22px',
                          cursor: 'pointer',
                        }}
                        onClick={() => deleteQuestion(policy?.question)}
                      />
                    </Stack>
                  </Stack>
                </AccordionSummary>
                <AccordionDetails>
                  <Box sx={{ px: 1 }}>
                    <Box
                      sx={{
                        bgcolor: 'transparent',
                        '& *': {
                          bgcolor: 'transparent !important',
                        },
                      }}
                      dangerouslySetInnerHTML={{
                        __html: policy?.answer,
                      }}
                    />
                  </Box>
                </AccordionDetails>
              </Accordion>
            )
          })}
        </Box>
      )}
    </CustomCard>
  )
}

export default PrivacyPolicy
