import React, { ChangeEvent, useState } from 'react'
import { Box, Typography, Modal, Button, Stack } from '@mui/material'
import TextFieldWraper from '@/admin-components/items/TextfieldWraper'

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
  const { open, handleShowModal, handleAddCard } = props
  const [title, setTitle] = useState('')
  const [image, setImage] = useState<File | undefined>()

  const handleChange = (e: any) => {
    const { value } = e.target
    console.log('value is ', value)
    setTitle(value)
  }

  const handleIconChange = (e: ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line prefer-destructuring
    const files = e.target.files
    if (files && files.length > 0) {
      setImage(files[0])
    }
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
            Add Card
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
                handleAddCard({ title, image })
                setTitle('')
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

export default AddCardModal
