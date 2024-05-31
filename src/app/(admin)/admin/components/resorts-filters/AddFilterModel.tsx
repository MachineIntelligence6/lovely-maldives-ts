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

const AddFilterModel = (props: any) => {
  const { open, handleShowModal, handleAddFilter, edit, handleEditFilter } =
    props
  const [values, setValues] = useState({ type: '', filter: '' })

  const handleChange = (e: any) => {
    const { value, name } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  useEffect(() => {
    if (edit) {
      setValues(edit)
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
            {edit ? 'Update' : 'Add'} Filter
          </Typography>

          <TextFieldWraper
            label="Type"
            placeholder="Enter filter type."
            value={values?.type}
            name="type"
            onChange={(e: any) => handleChange(e)}
          />

          <TextFieldWraper
            label="Filter"
            placeholder="Enter filter."
            value={values?.filter}
            name="filter"
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
                if (!values?.type || !values?.filter) return
                if (edit) {
                  handleEditFilter(values)
                } else {
                  handleAddFilter(values)
                }
                setValues({ type: '', filter: '' })
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

export default AddFilterModel
