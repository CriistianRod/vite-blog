import { Container } from '@mui/material'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Blog() {
    return (
        <>
            <Navbar />
            <Container
                sx={{ py: 16, px: 3, display: 'flex', justifyContent: 'center' }}
            >
                <div>I'm the blog </div>
            </Container>
            <Footer />
        </>
    )
};
