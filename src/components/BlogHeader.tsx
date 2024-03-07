'use client'

import { Box, Link } from '@mui/material'

// const Search = styled('div')(({ theme }) => ({
//   // position: 'relative',
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: ' transparent',
//   '&:hover': {
//     backgroundColor: ' transparent',
//   },
//   color: '#666666',

//   width: '100%',
//   [theme.breakpoints.up('sm')]: {
//     // marginLeft: theme.spacing(1),
//     width: '100%',
//   },
// }))

// const SearchIconWrapper = styled('div')(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: '100%',
//   // position: 'absolute',
//   pointerEvents: 'none',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'flex-end',
//   marginLeft: 'auto',
// }))

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: 'white',
//   fontSize: '20px',
//   // width: '100%',
//   '& .MuiInputBase-input': {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create('width'),
//     [theme.breakpoints.up('sm')]: {
//       width: '12ch',
//       '&:focus': {
//         width: '20ch',
//       },
//     },
//   },
// }))
export default function BlogHeader() {
  return (
    <Box sx={{ mt: { xs: '100px', md: '0' } }}>
      {/* <Box sx={{bgcolor:'var(--brown)',display:'flex',alignItems:'center',justifyContent:'space-around',width:'100%'}}>
                <Typography sx={{fontSize:'24px',color:'white',py:'20px',width:'100%',px:'70px'}}>Lovely Blog</Typography>
                <Search sx={{pt:{xs:0 , md:0},display:'flex',px:2,alignItems:'center',justifyContent:'space-between',mx:'auto'}}>
                  <SearchIconWrapper>
                  <CiSearch className='searchIcon' style={{color:"white" ,pt:{xs:2 , md:0},fontSize:'35px',fontWeight:600,display:'block'}} />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
            </Box> */}
      <Box sx={{ color: 'white', width: '100%', overflowX: 'auto' }}>
        <Box
          sx={{
            bgcolor: 'black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: { xs: '768px', md: '100%' },
            overflowX: { xs: 'auto', md: 'hidden' },
          }}
        >
          <Link
            sx={{ color: 'white', py: 2, textDecoration: 'none' }}
            href="/blogs"
          >
            All Blogs
          </Link>
          <Link
            sx={{ color: 'white', py: 2, textDecoration: 'none' }}
            href="/latest-blog"
          >
            Latest Blog
          </Link>
          <Link
            sx={{ color: 'white', py: 2, textDecoration: 'none' }}
            href="/popular-blog"
          >
            Popular Blog
          </Link>
          <Link sx={{ color: 'white', py: 2, textDecoration: 'none' }} href="/">
            Blog Title
          </Link>
          <Link sx={{ color: 'white', py: 2, textDecoration: 'none' }} href="/">
            Fade
          </Link>
          <Link sx={{ color: 'white', py: 2, textDecoration: 'none' }} href="/">
            Pre-Opening
          </Link>
        </Box>
      </Box>
    </Box>
  )
}
