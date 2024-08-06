/* eslint-disable consistent-return */
/* eslint-disable react-hooks/exhaustive-deps */
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
import dynamic from 'next/dynamic'
import AddIcon from '@mui/icons-material/Add'
import React, { useEffect, useState, useTransition } from 'react'
import CustomLoader from '@/admin-components/common/CustomLoader'
import { CustomCard } from '@/admin-components/styled/CustomCard'
import HeadingWraper from '@/admin-components/common/HeadingWraper'
import TextFieldWraper from '@/admin-components/items/TextfieldWraper'
import { CustomLabel } from '@/admin-components/styled/CustomLabels'
import { addFaqRequest, getFaqRequest } from '@/utils/api-requests/faqs.request'
import AddQuestion from '@/admin-components/pages/modals/AddQuestion'

const JoditTextEditor = dynamic(
  () => import('@/admin-components/common/JoditTextEditor'),
  { ssr: false }
)

const FAQs = () => {
  const [isPending, startTransition] = useTransition()
  const [alertMsg, setAlertMsg] = useState({ type: '', message: '' })
  const [detectChange, setDetectChange] = useState(true)
  const [policies, setPolicies] = useState([] as any)
  const [edit, setEdit] = useState('' as any)
  const [open, setOpen] = useState({ show: false, index: null as any })
  const [values, setValues] = useState({
    title: '',
    description: '',
  })
  const [editId, setEditId] = useState(null as any)

  const handleShowModal = (index: any) => setOpen({ index, show: !open.show })
  const handleAddQuestion = (newQues: any, type: string) => {
    if (type === 'add') {
      setPolicies(
        policies.map((pol: any, ind: any) => {
          if (ind === open?.index) {
            return { ...pol, questions: [...pol.questions, newQues] }
          } else {
            return pol
          }
        })
      )
    } else {
      const filtered = policies.map((pol: any, ind: any) => {
        if (ind === open?.index) {
          const result = pol?.questions?.map((qe: any, i: number) => {
            if (i === editId) {
              return newQues
            } else {
              return qe
            }
          })
          return { ...pol, questions: result }
        } else {
          return pol
        }
      })
      setPolicies(filtered)
    }
    setEdit('')
  }

  const editQuestion = (policy: any, id: any, ind: number) => {
    setEditId(ind)
    setEdit(policy)
    handleShowModal(id)
  }

  const deleteQuestion = (ques: string, index: number) => {
    const sure = window.confirm('Are you sure you want to delete?')
    if (!sure) return
    // setPolicies(policies.filter((p: any) => p.question !== ques))
    const filtered = policies?.map((pol: any, ind: number) => {
      if (ind === index) {
        const result = pol?.questions?.filter((p: any) => p.question !== ques)
        return {
          ...pol,
          questions: result,
        }
      } else {
        return pol
      }
    })
    setPolicies(filtered)
  }

  const deleteQuestionType = (category: string) => {
    const sure = window.confirm('Are you sure you want to delete?')
    if (!sure) return
    setPolicies(policies?.filter((p: any) => p.category !== category))
  }

  const handleSave = () => {
    try {
      startTransition(async () => {
        const res = await addFaqRequest({
          ...values,
          policies,
        })
        const data = res?.data
        if (data?.status === 201) {
          getFaqs()
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

  const getFaqs = async () => {
    try {
      startTransition(async () => {
        const res = await getFaqRequest()
        const data = res?.data
        if (data?.status === 200) {
          setPolicies(data?.data?.faqs)
          setValues({
            ...values,
            title: data?.data?.title,
            description: data?.data?.description,
          })
        }
      })
    } catch (error: any) {
      console.log('error ', error)
    }
  }

  useEffect(() => {
    getFaqs()
  }, [])
  return (
    <CustomCard sx={{ padding: '40px !important', mt: 2 }}>
      <AddQuestion
        open={open.show}
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
        title="FAQs"
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

      <Box>
        <CustomLabel id="demo-simple-select-label" sx={{ mb: 1 }}>
          Description
        </CustomLabel>
        <JoditTextEditor
          handleEditorValue={(val: any) =>
            setValues({ ...values, description: val })
          }
          value={values?.description}
        />
      </Box>

      <Button
        variant="outlined"
        sx={{
          border: '1px solid var(--brown)',
          textTransform: 'capitalize',
          my: 3,
        }}
        onClick={() =>
          setPolicies([...policies, { category: '', questions: [] }])
        }
      >
        <Stack direction="row" alignItems="center" gap="10px">
          <AddIcon sx={{ color: 'var(--brown)', fontSize: '22px' }} />
          <Typography variant="body1" color="var(--brown)">
            Add FAQs
          </Typography>
        </Stack>
      </Button>

      {policies.map((faqs: any, index: number) => (
        <Box
          key={index}
          sx={{
            border: '1px solid silver',
            p: 2,
            pt: 4,
            mb: 2,
            borderRadius: '6px',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              cursor: 'pointer',
              color: 'var(--brown)',
            }}
          >
            <DeleteIcon
              sx={{
                color: 'var(--red)',
                fontSize: '35px',
                cursor: 'pointer',
                p: '6px',
                border: '1px solid var(--red)',
                borderRadius: '50%',
              }}
              onClick={() => deleteQuestionType(faqs?.category)}
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <TextFieldWraper
              label="Category"
              placeholder="Enter category."
              name="category"
              value={faqs?.category}
              onChange={(e: any) =>
                setPolicies(
                  policies?.map((pol: any, ind: number) => {
                    if (ind === index) {
                      return {
                        ...pol,
                        category: e.target.value,
                      }
                    } else {
                      return pol
                    }
                  })
                )
              }
            />
          </Box>

          <Button
            variant="outlined"
            sx={{
              border: '1px solid var(--brown)',
              textTransform: 'capitalize',
              mb: 3,
            }}
            onClick={() => handleShowModal(index)}
          >
            <Stack direction="row" alignItems="center" gap="10px">
              <Typography variant="body1" color="var(--brown)">
                Add FAQ
              </Typography>
            </Stack>
          </Button>

          {faqs?.questions?.length > 0 &&
            faqs?.questions?.map((faq: any, ind: number) => (
              <Accordion
                key={ind}
                sx={{
                  py: 1,
                  boxShadow: 'none',
                  borderBottom: '1px solid rgb(223, 223, 223)',
                  borderTop: 'none',
                  // mx: 4,
                }}
              >
                <AccordionSummary
                  sx={{
                    fontWeight: 600,
                    // px: '0 !important',
                    fontFamily: 'Century Gothic',
                    px: { xs: 2, md: 4 },
                  }}
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        color: 'var(--brown)',
                        fontSize: { xs: '25px', md: '35px' },
                        bgcolor: { xs: '#E5E4E2', md: 'white' },
                        borderRadius: { xs: '100%', md: 'none' },
                        // px: 4,
                      }}
                    />
                  }
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    sx={{ width: '100%' }}
                  >
                    <Typography sx={{ px: 1 }}>{faq.question}</Typography>
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
                        onClick={() => editQuestion(faq, index, ind)}
                      />
                      <DeleteIcon
                        sx={{
                          color: 'var(--red)',
                          fontSize: '22px',
                          cursor: 'pointer',
                        }}
                        onClick={() => deleteQuestion(faq?.question, index)}
                      />
                    </Stack>
                  </Stack>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ fontFamily: 'Century Gothic', px: { xs: 2, md: 4 } }}
                >
                  <Box
                    className="jodit-editor-text-wraper"
                    sx={{
                      bgcolor: 'transparent',
                      '& *': {
                        bgcolor: 'transparent !important',
                      },
                    }}
                    dangerouslySetInnerHTML={{
                      __html: faq?.answer,
                    }}
                  />
                </AccordionDetails>
              </Accordion>
            ))}
        </Box>
      ))}
    </CustomCard>
  )
}

export default FAQs
