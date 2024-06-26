'use client'

import styled from '@emotion/styled'
import React, { ChangeEvent, useEffect, useState } from 'react'
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

const options = [
  { label: '1 Star', value: 1 },
  { label: '2 Star', value: 2 },
  { label: '3 Star', value: 3 },
  { label: '4 Star', value: 4 },
  { label: '5 Star', value: 5 },
]

const AddCollection = (props: any) => {
  const { open, handleShowModal, handleAddCollection, edit } = props
  const [values, setValues] = useState({ title: '', ratings: 1 })
  const [image, setImage] = useState<File | undefined>()
  const [imageUrl, setImageUrl] = useState('')

  const handleChange = (e: any) => {
    const { value, name } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleIconChange = async (e: ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line prefer-destructuring
    const file = e.target.files?.[0]
    setImage(file)

    const formData = new FormData()
    formData.append('file', file as any)
    formData.append('upload_preset', 'j8epfynh')
    const res = await uploadImgToCloudinary(formData)
    setImageUrl(res?.secure_url)
  }

  useEffect(() => {
    if (edit?.title) {
      setImageUrl(edit?.image)
      setValues({ title: edit?.title, ratings: edit?.ratings })
    }
  }, [edit])

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
            {edit?.title ? 'Update ' : 'Add '} Collection
          </Typography>

          <label htmlFor="icon_">
            Image
            <input type="file" id="icon_" hidden onChange={handleIconChange} />
            <Box
              sx={{
                width: '100%',
                height: '38px',
                border: '1px solid #e1e1e1',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                pl: '10px',
                color: 'darkgray',
                fontSize: '14px',
                fontWeight: 300,
                mb: 3,
                mt: 1,
                overflow: 'hidden',
              }}
            >
              {image?.name ? image?.name : 'Upload file'}
            </Box>
          </label>

          <TextFieldWraper
            label="Title"
            placeholder="Enter Title."
            value={values?.title}
            name="title"
            onChange={(e: any) => handleChange(e)}
          />

          <CustomLabel
            id="demo-simple-select-label"
            sx={{ mb: '7px', fontFamily: 'Public Sans' }}
          >
            Star
          </CustomLabel>
          <CustomSelect
            placeholder="Select Stars."
            value={values?.ratings}
            options={options}
            name="ratings"
            onChange={(e: any) => handleChange(e)}
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
                if (!values?.title || !values?.ratings) return
                if (edit?.title) {
                  handleAddCollection(
                    {
                      ...values,
                      ratings: values?.ratings?.toString(),
                      image: imageUrl,
                    },
                    'edit'
                  )
                } else {
                  handleAddCollection(
                    {
                      ...values,
                      ratings: values?.ratings?.toString(),
                      image: imageUrl,
                    },
                    'add'
                  )
                }
                setValues({ title: '', ratings: 1 })
                setImage(undefined)
                handleShowModal()
              }}
            >
              {edit?.title ? 'Update ' : 'Add '}
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  )
}

export default AddCollection
