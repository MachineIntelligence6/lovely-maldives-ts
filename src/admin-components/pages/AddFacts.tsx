'use client'

import {
  Box,
  Button,
  Grid,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import FactsModel from './modals/FactsModel'
import { ModeOfTravel } from '@mui/icons-material'

const AddFacts = (props: any) => {
  const { handleAddFacts, facts } = props
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = () => setShowModal(!showModal)

  return (
    <Box>
      <FactsModel
        open={showModal}
        handleShowModal={handleShowModal}
        handleAddFacts={handleAddFacts}
      />
      <Button
        variant="outlined"
        sx={{
          border: '1px solid var(--brown)',
          mt: 1,
          textTransform: 'capitalize',
        }}
        onClick={handleShowModal}
      >
        <Stack direction="row" alignItems="center" gap="10px">
          <AddIcon sx={{ color: 'var(--brown)', fontSize: '22px' }} />
          <Typography variant="body1" color="var(--brown)">
            Add Fact
          </Typography>
        </Stack>
      </Button>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 1,
          width: '100%',
        }}
      >
        <Grid container spacing={2} sx={{ width: '100%', mt: 2 }}>
          {facts?.length > 0 &&
            facts?.map((fact: any, index: number) => (
              <Grid key={index} item xs={12} sm={6}>
                <ListItem
                  sx={{
                    p: 0,
                    display: 'flex',
                    alignItems: 'start',
                  }}
                >
                  <ListItemIcon sx={{ minWidth: '30px', mt: 1.2 }}>
                    <ModeOfTravel />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography sx={{ fontWeight: 600, mb: 0.5 }}>
                        {fact?.title}
                      </Typography>
                    }
                    secondary={fact?.subTags?.map(
                      (subTag: string, ind: number) => (
                        <Typography
                          key={ind}
                          variant="body2"
                          color="var(--brown)"
                        >
                          {subTag}
                        </Typography>
                      )
                    )}
                  />
                </ListItem>
              </Grid>
            ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default AddFacts
