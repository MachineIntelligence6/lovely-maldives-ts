'use client'

import styled from '@emotion/styled'
import React, { useState } from 'react'
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

const CustomLabel = styled(InputLabel)(({ theme }) => ({
  fontSize: '16px',
  fontFeatureSettings: "'clig' off, 'liga' off",
  fontWeight: 400,
  color: '#4B465C',
}))

const options = [
  { label: '1 Star', value: 1 },
  { label: '2 Star', value: 2 },
  { label: '3 Star', value: 3 },
  { label: '4 Star', value: 4 },
  { label: '5 Star', value: 5 },
  { label: '6 Star', value: 6 },
  { label: '7 Star', value: 7 },
]

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

const AddBrand = (props: any) => {
  const { open, handleShowModal, handleAddBrand } = props
  const [values, setValues] = useState({ title: '', stars: 1, description: '' })

  const handleChange = (e: any) => {
    const { value, name } = e.target
    setValues({
      ...values,
      [name]: value,
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
            Add Brand
          </Typography>

          <TextFieldWraper
            label="Title"
            placeholder="Enter Title."
            value={values?.title}
            name="title"
            onChange={(e: any) => handleChange(e)}
          />

          <TextFieldWraper
            label="description"
            placeholder="e.g. Ulta Luxury."
            value={values?.description}
            name="description"
            onChange={(e: any) => handleChange(e)}
          />

          <CustomLabel
            id="demo-simple-select-label"
            sx={{ mb: '7px', fontFamily: 'Public Sans' }}
          >
            Stars
          </CustomLabel>
          <CustomSelect
            placeholder="Select Stars."
            value={values?.stars}
            options={options}
            name="stars"
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
                if (!values?.title || !values?.stars) return
                handleAddBrand(values)
                setValues({ title: '', stars: 0, description: '' })
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

export default AddBrand
