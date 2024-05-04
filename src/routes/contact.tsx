import { Container, Grid, Card, Box, CardContent, CardMedia, Typography, IconButton } from '@mui/material'

import Footer from '../components/Footer'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import Navbar from '../components/Navbar'

export default function Contact() {
    return (
        <>
            <Navbar />
            <Container
                sx={{ py: 16 }}
            >
                <Grid
                    container
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <Card sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' }
                    }}>
                        <CardMedia
                            component="img"
                            sx={{
                                width: { xs: '100%', md: 400 }
                            }}
                            image="https://source.unsplash.com/random?wallpapers"
                            alt="Live from space album cover"
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5" sx={{ paddingBottom: 2 }} >
                                    ¡Charlemos!
                                </Typography>
                                <Typography>
                                    Si quieres colaborar, preguntar o contarme algo, escríbeme. <br />
                                    Siempre estoy dispuesto a escuchar, aprender y encarar nuevos retos.
                                </Typography>
                            </CardContent>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'baseline', pl: 1, pb: 1 }}>
                                <IconButton aria-label="email">
                                    <EmailIcon />
                                    <Typography sx={{ paddingLeft: 1 }}>cristian.frontend.dev@gmail.com</Typography>
                                </IconButton>
                                <IconButton aria-label="LinkedIn" href="https://www.linkedin.com/in/cristian-rodr%C3%ADguez-713bb3173/" target='_blank'>
                                    <LinkedInIcon />
                                    <Typography sx={{ paddingLeft: 1 }}>LinkedIn</Typography>
                                </IconButton>
                                <IconButton aria-label="GitHub" href="https://github.com/CriistianRod" target='_blank'>
                                    <GitHubIcon />
                                    <Typography sx={{ paddingLeft: 1 }}>GitHub</Typography>
                                </IconButton>
                                <IconButton aria-label="Instagram" href="https://www.instagram.com/criistiianrod/" target='_blank'>
                                    <InstagramIcon />
                                    <Typography sx={{ paddingLeft: 1 }}>Instagram</Typography>
                                </IconButton>
                            </Box>
                        </Box>
                    </Card>
                </Grid>
            </Container>
            <Footer />
        </>
    )
};
