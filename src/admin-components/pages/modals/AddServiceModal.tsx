/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEvent, useEffect, useState } from 'react'
import { Box, Typography, Modal, Button, Stack } from '@mui/material'
import TextFieldWraper from '@/admin-components/items/TextfieldWraper'
import { uploadImgToCloudinary } from '@/utils/cloudinaryImgUpload'

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

const AddServiceModal = (props: any) => {
  const { open, handleShowModal, handleAddService, edit } = props
  const [values, setValues] = useState({ title: '', captionText: '' })
  const [icon, setIcon] = useState<File | undefined>()
  const [image, setImage] = useState<File | undefined>()
  const [iconUrl, setIconUrl] = useState('')
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
    setIcon(file)

    const formData = new FormData()
    formData.append('file', file as any)
    formData.append('upload_preset', 'j8epfynh')
    const res = await uploadImgToCloudinary(formData)
    console.log('res ', res)
    setIconUrl(res?.secure_url)
  }

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line prefer-destructuring
    const file = e.target.files?.[0]
    setImage(file)
    console.log('filesss ', file)
    const formData = new FormData()
    formData.append('file', file as any)
    formData.append('upload_preset', 'j8epfynh')
    const res = await uploadImgToCloudinary(formData)
    console.log('res ', res)
    setImageUrl(res?.secure_url)
  }
  console.log('image url ', imageUrl)
  useEffect(() => {
    if (edit?.icon) {
      setIconUrl(edit?.icon)
      setImageUrl(edit?.bgImage)
      setValues({ ...values, title: edit?.title, captionText: edit?.captionText })
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
            {edit?.icon ? 'Update ' : 'Add '} Service
          </Typography>

          <label htmlFor="icon_">
            Icon
            <input
              type="file"
              id="icon_"
              name="icon"
              hidden
              onChange={handleIconChange}
            />
            <Box
              sx={{
                width: '100%',
                height: '38px',
                border: '1px solid #e1e1e1',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                pl: '10px',
                color: 'var(--black)',
                fontSize: '14px',
                fontWeight: 300,
                mb: 3,
                mt: 1,
                overflow: 'hidden',
              }}
            >
              {icon?.name
                ? icon?.name
                : iconUrl
                  ? 'our_service_icon.jpg'
                  : 'Upload icon.'}
            </Box>
          </label>

          <label htmlFor="bgImage">
            Background Image
            <input
              type="file"
              id="bgImage"
              name="bgImage"
              hidden
              onChange={handleImageChange}
            />
            <Box
              sx={{
                width: '100%',
                height: '38px',
                border: '1px solid #e1e1e1',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                pl: '10px',
                color: 'var(--black)',
                fontSize: '14px',
                fontWeight: 300,
                mb: 3,
                mt: 1,
                overflow: 'hidden',
              }}
            >
              {image?.name
                ? image?.name
                : imageUrl
                  ? 'our_service_bgimg.jpg'
                  : 'Upload Background Image.'}
            </Box>
          </label>

          <TextFieldWraper
            label="Title"
            placeholder="Enter Title."
            value={values.title}
            name="title"
            onChange={(e: any) => handleChange(e)}
          />

          <TextFieldWraper
            label="Caption"
            placeholder="Enter caption text."
            value={values.captionText}
            name="captionText"
            onChange={(e: any) => handleChange(e)}
          />

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="end"
            gap="1rem"
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
                if (!values.title) return
                if (edit?.icon) {
                  handleAddService(
                    {
                      ...values,
                      icon: iconUrl,
                      bgImage: imageUrl,
                    },
                    'edit'
                  )
                } else {
                  handleAddService(
                    {
                      ...values,
                      icon: iconUrl,
                      bgImage: imageUrl,
                    },
                    'add'
                  )
                }
                setValues({ title: '', captionText: '' })
                setIcon(null as any)
                setImage(null as any)
                handleShowModal()
              }}
            >
              {edit?.icon ? 'Update ' : 'Add '}
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  )
}

export default AddServiceModal
