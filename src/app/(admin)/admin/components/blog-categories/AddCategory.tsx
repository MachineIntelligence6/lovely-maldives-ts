'use client'

import React, { useEffect, useState } from 'react'
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

const AddCategory = (props: any) => {
  const { open, handleShowModal, handleAddCategory, edit, handleEditCategory } =
    props
  const [category, setCategory] = useState('')

  const handleChange = (e: any) => {
    const { value } = e.target
    setCategory(value)
  }

  useEffect(() => {
    if (edit) {
      setCategory(edit?.category)
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
            {edit ? 'Update' : 'Add'} Category
          </Typography>

          <TextFieldWraper
            label="Blog Category"
            placeholder="Enter blog category."
            value={category}
            name="category"
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
                if (!category) return
                if (edit) {
                  handleEditCategory(category, edit?.index)
                } else {
                  handleAddCategory(category)
                }
                setCategory('')
                handleShowModal()
              }}
            >
              {edit ? 'Update' : 'Add'}
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  )
}

export default AddCategory
