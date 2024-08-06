'use client'

import {
  Box,
  IconButton,
  InputBase,
  Paper,
  List,
  ListItem,
  CircularProgress,
  Typography,
} from '@mui/material'
import React, { useState, useTransition, useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { useRouter } from 'next/navigation'
import StarRateIcon from '@mui/icons-material/StarRate'
import Image from 'next/image'
import CloseIcon from '@mui/icons-material/Close'
import { getGlobalSearchResults } from '@/utils/api-requests/global-search.request'

const debounce = (func: (...args: any[]) => void, delay: number) => {
  let timer: any
  return (...args: any[]) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      func(...args)
    }, delay)
  }
}

const SearchModal = (props: any) => {
  const { open, handleSearchModelOpen } = props
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [search, setSearch] = useState('')
  const [suggestions, setSuggestions] = useState<any>({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (search.trim() !== '') {
      debouncedFetchResults(search)
    } else {
      setSuggestions([])
    }
  }, [search])

  const fetchResults = async (query: string) => {
    try {
      setLoading(true)
      const res = await getGlobalSearchResults(query)
      const data = res?.data
      setLoading(false)
      console.log('data: ', data)
      setSuggestions(data?.data || [])
    } catch (err: any) {
      setLoading(false)
      console.log('error ', err)
    }
  }

  const debouncedFetchResults = debounce(fetchResults, 300)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  const handleSearchedResults = () => {
    try {
      startTransition(async () => {
        const res = await getGlobalSearchResults(search)
        const data = res?.data
        console.log('data: ', data)
        // handleSearchModelOpen()
      })
    } catch (err: any) {
      console.log('error ', err)
    }
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        top: open ? 0 : '15%',
        left: open ? 0 : '80%',
        right: open ? 0 : '20%',
        bottom: open ? 0 : '85%',
        bgcolor: 'white',
        transition: 'all .2s ease-in-out',
        zIndex: 99999,
        overflow: 'hidden',
        px: 2,
      }}
    >
      <Box
        sx={{
          width: '100%',
          position: 'relative',
          display: 'flex',
          pt: 4,
          justifyContent: 'center',
          transition: 'all 1s ease-in-out',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            right: { xs: '1rem', md: '2rem' },
            top: { xs: '1rem', md: '2rem' },
          }}
        >
          <CloseIcon
            sx={{
              fontSize: { xs: '25px', md: '40px' },
              color: 'var(--brown)',
              cursor: 'pointer',
            }}
            onClick={handleSearchModelOpen}
          />
        </Box>
        <Paper
          component="form"
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            maxWidth: '500px',
            mt: { xs: 2, md: 1 },
            boxShadow: 'none',
            border: '1px solid silver',
            borderRadius: 50,
            bgcolor: 'transparent',
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search here"
            inputProps={{ 'aria-label': 'search here' }}
            value={search}
            onChange={handleSearchChange}
          />
          <IconButton
            type="button"
            sx={{ px: '10px' }}
            aria-label="search"
            onClick={handleSearchedResults}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
        {search ? (
          <List
            sx={{
              position: 'absolute',
              top: '100px',
              width: '100%',
              maxWidth: '500px',
              maxHeight: { xs: 'calc(100vh - 110px)', md: '70vh' },
              minHeight: { xs: 'calc(100vh - 110px)', md: 'auto' },
              overflowY: 'auto',
              bgcolor: 'white',
              boxShadow: { xs: 'none', md: '0 2px 8px rgba(0, 0, 0, 0.1)' },
              zIndex: 100,
              borderRadius: '8px',
              padding: '8px 0',
              '::-webkit-scrollbar': {
                width: '8px',
              },
              '::-webkit-scrollbar-thumb': {
                backgroundColor: '#c1c1c1',
                borderRadius: '4px',
              },
              '::-webkit-scrollbar-thumb:hover': {
                backgroundColor: '#a8a8a8',
              },
              '::-webkit-scrollbar-track': {
                backgroundColor: '#f1f1f1',
                borderRadius: '4px',
              },
            }}
          >
            {loading ? (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  width: '100%',
                  mt: 2,
                }}
              >
                <CircularProgress
                  size={20}
                  thickness={2.5}
                  sx={{ color: '#000', marginBottom: 2 }}
                />
              </Box>
            ) : (
              <>
                {suggestions?.hotels?.length > 0 && (
                  <Box
                    sx={{
                      borderBottom:
                        suggestions?.blogs?.length > 0
                          ? '1px solid silver'
                          : 'none',
                      mb: 3,
                      pb: 3,
                    }}
                  >
                    <ListItem>
                      <Typography
                        variant="body1"
                        color="black"
                        sx={{ fontWeight: '600' }}
                      >
                        Hotels
                      </Typography>
                    </ListItem>
                    {suggestions?.hotels?.map((hotel: any) => (
                      <ListItem
                        button
                        key={hotel?.id}
                        onClick={() => {
                          setSuggestions({})
                          router.push(
                            `/resorts/${encodeURIComponent(hotel?.title)}`
                          )
                        }}
                        sx={{
                          display: 'flex',
                          gap: 2,
                        }}
                      >
                        <Box
                          sx={{
                            width: '80px',
                            height: '70px',
                            borderRadius: '6px',
                            overflow: 'hidden',
                          }}
                        >
                          <Image
                            src={hotel?.coverImg}
                            alt="cover-hotel-img"
                            width={80}
                            height={70}
                            style={{
                              width: '80px',
                              height: '70px',
                              objectFit: 'cover',
                            }}
                          />
                        </Box>
                        <Box>
                          <Typography
                            variant="body1"
                            color="#333"
                            sx={{
                              fontSize: '18px',
                              fontWeight: 'bold',
                            }}
                          >
                            {hotel?.title}
                          </Typography>
                          <Box
                            sx={{
                              fontSize: '14px',
                              mt: 1,
                              display: 'flex',
                            }}
                          >
                            <Typography
                              variant="body1"
                              color="#333"
                              sx={{ mr: 1, mt: '-3px' }}
                            >
                              Ratings:{' '}
                            </Typography>
                            {hotel?.ratings
                              ? [...Array(parseInt(hotel?.ratings, 10))].map(
                                  (_: any) => (
                                    <StarRateIcon
                                      sx={{
                                        color: 'var(--orange)',
                                        width: '18px',
                                        height: '18px',
                                      }}
                                      key={hotel?.id}
                                    />
                                  )
                                )
                              : 'N/A'}
                          </Box>
                        </Box>
                      </ListItem>
                    ))}
                  </Box>
                )}

                {suggestions?.blogs?.length > 0 && (
                  <>
                    <ListItem button>
                      <Typography
                        variant="body1"
                        color="black"
                        sx={{
                          fontWeight: '600',
                        }}
                      >
                        Blogs
                      </Typography>
                    </ListItem>
                    {suggestions?.blogs?.map((blog: any) => (
                      <ListItem
                        button
                        key={blog?.id}
                        onClick={() => {
                          setSuggestions({})
                          router.push(`/blogs/${blog?.title}`)
                        }}
                        sx={{
                          display: 'flex',
                          gap: 2,
                        }}
                      >
                        <Box
                          sx={{
                            width: '80px',
                            height: '70px',
                            borderRadius: '6px',
                            overflow: 'hidden',
                          }}
                        >
                          <Image
                            src={blog?.coverImage}
                            alt="cover-hotel-img"
                            width={80}
                            height={70}
                            style={{
                              width: '80px',
                              height: '70px',
                              objectFit: 'cover',
                            }}
                          />
                        </Box>
                        <Box>
                          <Typography
                            variant="body1"
                            color="#333"
                            sx={{
                              fontSize: '18px',
                              fontWeight: 'bold',
                            }}
                          >
                            {blog?.title}
                          </Typography>
                          <Box
                            sx={{
                              fontSize: '14px',
                              mt: 1,
                              display: 'flex',
                            }}
                          >
                            <Typography
                              variant="body1"
                              color="#333"
                              sx={{ mr: 1, mt: '-3px' }}
                            >
                              {blog?.category}
                            </Typography>
                          </Box>
                        </Box>
                      </ListItem>
                    ))}
                  </>
                )}
              </>
            )}
            {suggestions?.blogs?.length === 0 &&
            suggestions?.hotels?.length === 0 ? (
              <Typography variant="body1" color="initial" sx={{ p: 3 }}>
                No data found.
              </Typography>
            ) : (
              ''
            )}
          </List>
        ) : (
          ''
        )}
      </Box>
    </Box>
  )
}

export default SearchModal
