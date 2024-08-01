'use client'

import styled from '@emotion/styled'
import React, { ChangeEvent, useState } from 'react'
import {
  Box,
  Typography,
  Modal,
  Button,
  Stack,
  InputLabel,
} from '@mui/material'
import TextFieldWraper from '@/admin-components/items/TextfieldWraper'
import CustomSelect from '@/admin-components/items/CustomSelect'
import TagsField from '@/admin-components/items/TagsField'
import IconUploader from '@/admin-components/common/IconUploader'
import { uploadImgToCloudinary } from '@/utils/cloudinaryImgUpload'

const CustomLabel = styled(InputLabel)(({ theme }) => ({
  fontSize: '16px',
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontWeight: 400,
  color: '#4B465C',
}))

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderColor: '0px solid transparent',
  borderRadius: '6px',
  py: '30px',
  px: '18px',
}

const FactsModel = (props: any) => {
  const { open, handleShowModal, handleAddFacts } = props
  const [values, setValues] = useState({
    title: '',
    icon: '',
    subTags: [],
    stars: 1,
  } as any)
  const [icon, setIcon] = useState<File | undefined>()

  const handleChange = (e: any) => {
    const { value, name } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleIconChange = async (e: any) => {
    const file = e.target.files?.[0]
    setIcon(file)
    console.log('file ', file)
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'j8epfynh')
    const res = await uploadImgToCloudinary(formData)
    console.log('file icon res ', res)
    setValues({ ...values, icon: res?.secure_url })
  }

  const handleChangeTags = (tag: any) => {
    setValues({
      ...values,
      subTags: [...values.subTags, tag],
    })
  }

  const removeTag = (ind: number) => {
    setValues({
      ...values,
      subTags: values.subTags.filter((_: any, i: number) => i !== ind),
    })
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleShowModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
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
            Add Fact
          </Typography>

          <TextFieldWraper
            label="Title"
            placeholder="Enter Title."
            value={values?.title}
            name="title"
            onChange={(e: any) => handleChange(e)}
          />

          <TagsField
            label="Tags"
            placeholder="Enter Tags."
            tags={values?.subTags}
            name="subTags"
            handleChangeTags={handleChangeTags}
            removeTag={removeTag}
          />

          <IconUploader
            label="Icon"
            onChange={handleIconChange}
            iconName={icon?.name ?? values?.icon ? 'icon.jpg' : 'Upload Icon'}
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
              onClick={handleShowModal}
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
                if (!values?.title) return
                handleAddFacts(values)
                setValues({ title: '', stars: 0, subTags: [] })
                handleShowModal()
              }}
            >
              ADD
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  )
}

export default FactsModel
