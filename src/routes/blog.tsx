import { Container, Grid } from '@mui/material'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeaturedPost from '../components/FeaturedPost';

export default function Blog() {
    const featuredPosts = [
        {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random?wallpapers',
        imageLabel: 'Image Text',
        },
        {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random?wallpapers',
        imageLabel: 'Image Text',
        },
        {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random?wallpapers',
        imageLabel: 'Image Text',
        },
        {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random?wallpapers',
        imageLabel: 'Image Text',
        },
    ];

    return (
        <>
            <Navbar />
            <Container
                sx={{ py: 16, px: 3, display: 'flex', justifyContent: 'center', flexDirection: 'column' }}
            >
                <Hero />
                
                <Grid container spacing={4}>
                    {featuredPosts.map((post) => (
                    <FeaturedPost key={post.title} post={post} />
                    ))}
                    {/* <FeaturedPost /> */}
                </Grid>
            </Container>
            <Footer />
        </>
    )
};
