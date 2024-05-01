import { Container, Grid, Card, Box, CardContent, CardMedia, Typography, IconButton } from '@mui/material'

// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';
// import { useTheme } from '@mui/material/styles';

import Footer from '../components/Footer'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'
import Navbar from '../components/Navbar'

export default function Contact() {
    // const theme = useTheme();

    return (
        <>
            <Navbar />
            <Container
            // sx={{ p: 4 }}
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
                                width: { xs: '100%', md: 400  }
                            }}
                            image="https://source.unsplash.com/random?wallpapers"
                            alt="Live from space album cover"
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5" sx={{ paddingBottom: 2 }} >
                                    ¡Charlemos!
                                </Typography>
                                {/* <Typography variant="subtitle1" color="text.secondary" component="div">
                                    Mac Miller
                                </Typography> */}
                                <Typography>
                                    Si quieres colaborar, preguntar o contarme algo, escríbeme. <br />
                                    Siempre estoy dispuesto a escuchar, aprender y encarar nuevos retos.
                                </Typography>
                            </CardContent>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'baseline', pl: 1, pb: 1 }}>
                                <IconButton aria-label="email">
                                    {/* {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />} */}
                                    <EmailIcon />
                                    <Typography sx={{ paddingLeft: 1 }}>cristian.frontend.dev@gmail.com</Typography>
                                </IconButton>
                                <IconButton aria-label="LinkedIn" href="https://www.linkedin.com/in/cristian-rodr%C3%ADguez-713bb3173/">
                                    {/* {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />} */}
                                    <LinkedInIcon />
                                    <Typography sx={{ paddingLeft: 1 }}>LinkedIn</Typography>
                                </IconButton>
                                <IconButton aria-label="GitHub" href="https://github.com/CriistianRod">
                                    {/* {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />} */}
                                    <GitHubIcon />
                                    <Typography sx={{ paddingLeft: 1 }}>GitHub</Typography>
                                </IconButton>
                                <IconButton aria-label="Instagram" href="https://www.instagram.com/criistiianrod/">
                                    {/* <PlayArrowIcon sx={{ height: 38, width: 38 }} /> */}
                                    <InstagramIcon />
                                    <Typography sx={{ paddingLeft: 1 }}>Instagram</Typography>
                                </IconButton>
                            </Box>
                        </Box>
                    </Card>
                    <footer style={{ position: "fixed", bottom: 0, width: '100%' }}>
                        <Footer />
                    </footer>
                </Grid>
            </Container>
        </>
    )
};
