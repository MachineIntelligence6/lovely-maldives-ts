import React, { useState } from 'react'
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

const AddTitleModal = (props: any) => {
  const { open, handleShowModal, handleAddMenuBlock } = props
  const [title, setTitle] = useState('')

  const handleChange = (e: any) => {
    const { value } = e.target
    setTitle(value)
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
              mb:3
            }}
          >
            Add Column Title
          </Typography>

          <TextFieldWraper
            label="Title"
            placeholder="e.g. Links, Social Media etc."
            value={props?.menu?.title}
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
                handleAddMenuBlock(title)
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

export default AddTitleModal
