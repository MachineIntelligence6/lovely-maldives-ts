/* eslint-disable react/no-array-index-key */
import { Container, Box, Typography } from '@mui/material'
import Image from 'next/image'
import { IArticle } from '@/app/blogs/page'
import blog from '../../public/Images/landingTree.jpg'
import articleImage from '../../public/Images/main.jpg'

export const articles: IArticle[] = [
  {
    image: blog,
    date: '04 Feb 2024',
    title: 'This is a news article that says alot',
  },
  {
    image: articleImage,
    date: '04 Feb 2024',
    title: 'This is a news article that says alot',
  },
  {
    image: blog,
    date: '04 Feb 2024',
    title: 'This is a news article that says alot',
  },
]
export default function Articles() {
  return (
    <Container>
      <Box
        sx={{
          width: { xs: '100%', md: '600px' },
          mx: 'auto',
          color: 'var(--white)',
        }}
      >
        <Typography sx={{ mt: '60px', fontSize: '35px', textAlign: 'center' }}>
          RELATED ARTICLES
        </Typography>
        <hr style={{ marginTop: '40px' }} />
        {articles.map((article: IArticle, index) => (
          <Box key={index} sx={{ borderBottom: '1px solid var(--white)' }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '600',
                mx: 'auto',
                my: '60px',
              }}
            >
              <Image
                src={article.image}
                alt="article"
                className="article"
                style={{ height: '200px', borderRadius: '20px' }}
              />
              <Box sx={{ mx: '30px' }}>
                <Typography>{article.date}</Typography>
                <Typography
                  sx={{ fontSize: '24px', mt: '20px', fontWeight: 600 }}
                >
                  {article.title}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  )
}
