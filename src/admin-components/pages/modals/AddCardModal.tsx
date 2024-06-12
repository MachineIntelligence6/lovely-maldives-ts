/* eslint-disable no-nested-ternary */
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

const AddCardModal = (props: any) => {
  const { open, handleShowModal, handleAddCard, edit } = props
  const [title, setTitle] = useState('')
  const [image, setImage] = useState<File | undefined>()
  const [imageUrl, setImageUrl] = useState('')

  const handleChange = (e: any) => {
    const { value } = e.target
    setTitle(value)
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
      setTitle(edit?.title)
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
            {edit?.title ? 'Update ' : 'Add '} Card
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
              {image?.name
                ? image?.name
                : imageUrl
                  ? 'image.jpg'
                  : 'Upload file'}
            </Box>
          </label>

          <TextFieldWraper
            label="Title"
            placeholder="Enter Title."
            value={title}
            name="title"
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
                if (!title) return
                // handleAddCard({ title, image: imageUrl })
                if (edit?.title) {
                  handleAddCard(
                    {
                      image: imageUrl,
                      title,
                    },
                    'edit'
                  )
                } else {
                  handleAddCard(
                    {
                      image: imageUrl,
                      title,
                    },
                    'add'
                  )
                }
                setTitle('')
                setImageUrl('' as any)
                setImage('' as any)
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

export default AddCardModal
