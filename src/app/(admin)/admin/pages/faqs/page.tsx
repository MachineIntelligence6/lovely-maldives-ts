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
import dynamic from 'next/dynamic'
import AddIcon from '@mui/icons-material/Add'
import React, { useEffect, useState, useTransition } from 'react'
import CustomLoader from '@/admin-components/common/CustomLoader'
import { CustomCard } from '@/admin-components/styled/CustomCard'
import HeadingWraper from '@/admin-components/common/HeadingWraper'
import TextFieldWraper from '@/admin-components/items/TextfieldWraper'
import TagsField from '@/admin-components/items/TagsField'
import AddFaq from '@/admin-components/pages/modals/AddFaq'
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
    categories: [] as any,
  })
  const [editId, setEditId] = useState(null as any)

  const handleShowModal = (index: any) => setOpen({ index, show: !open.show })

  const handleChangeCategories = (category: any) => {
    setValues({
      ...values,
      categories: [...values.categories, category],
    })
  }

  const removeCategory = (ind: number) => {
    setValues({
      ...values,
      categories: values.categories.filter((_: any, i: number) => i !== ind),
    })
  }

  const handleAddQuestion = (newQues: any, type: string) => {
    console.log('newQuestion ', newQues)
    if (type === 'add') {
      setPolicies(
        policies.map((pol: any, ind: any) => {
          if (ind === open?.index) {
            return { ...pol, questions: [...pol.questions, newQues] }
          }
        })
      )
    } else {
      setPolicies(
        policies.map((pol: any, ind: any) => {
          if (ind === open?.index) {
            pol?.questions?.map((qe: any, i: number) => {
              if (i === editId) {
                return newQues
              } else {
                return qe
              }
            })
          }
        })
      )
    }
    setEdit('')
  }
  console.log('policies ', policies)
  const editQuestion = (policy: any, id: any) => {
    setEditId(id)
    setEdit(policy)
    handleShowModal(null)
  }

  const deleteQuestion = (ques: string) => {
    const sure = window.confirm('Are you sure you want to delete?')
    if (!sure) return
    setPolicies(policies.filter((p: any) => p.question !== ques))
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
          setPolicies(data?.data?.policies)
          setValues({ ...values, title: data?.data?.title })
        } else {
          console.log('privacy policy else ', data)
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

      <Box sx={{ my: 3 }}>
        <TagsField
          label="Category"
          placeholder="Enter category."
          tags={values?.categories}
          name="categories"
          handleChangeTags={handleChangeCategories}
          removeTag={removeCategory}
        />
      </Box>

      <Button
        variant="outlined"
        sx={{
          border: '1px solid var(--brown)',
          textTransform: 'capitalize',
          mb: 3,
        }}
        onClick={() => setPolicies([...policies, { type: '', questions: [] }])}
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
          sx={{ border: '1px solid silver', p: 2, mb: 2, borderRadius: '6px' }}
        >
          <Box sx={{ mb: 3 }}>
            <TextFieldWraper
              label="Type"
              placeholder="Enter type."
              name="type"
              value={faqs?.type}
              onChange={(e: any) =>
                setPolicies(
                  policies?.map((pol: any, ind: number) => {
                    if (ind === index) {
                      return {
                        ...pol,
                        type: e.target.value,
                      }
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
                  {faq.question}
                </AccordionSummary>
                <AccordionDetails
                  sx={{ fontFamily: 'Century Gothic', px: { xs: 2, md: 4 } }}
                >
                  {faq.answer}
                </AccordionDetails>
              </Accordion>
            ))}
        </Box>
      ))}
    </CustomCard>
  )
}

export default FAQs
