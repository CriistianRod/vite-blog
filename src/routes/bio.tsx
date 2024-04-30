import { Container, Grid, Typography } from '@mui/material'

import Navbar from '../components/Navbar'
import MainImage from '../components/MainImage'
import Footer from '../components/Footer'

export default function Bio() {
    return (
        <>
            <Navbar />
            <Container sx={{ p: 4 }}>
                <Grid
                    container
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <MainImage />
                    <Typography
                        variant='h3'
                        sx={{
                            m: 2
                        }}
                    >
                        Busco
                    </Typography>
                    <Typography>
                        Duis consectetur id Lorem cupidatat eiusmod aute. Aliquip nulla id nulla sit sit cillum cillum deserunt incididunt. Do ea qui non sit ea. Voluptate in ut excepteur esse ad excepteur ut quis excepteur. Eiusmod ullamco ea ipsum incididunt excepteur magna pariatur nulla.
                        Duis consectetur id Lorem cupidatat eiusmod aute. Aliquip nulla id nulla sit sit cillum cillum deserunt incididunt. Do ea qui non sit ea. Voluptate in ut excepteur esse ad excepteur ut quis excepteur. Eiusmod ullamco ea ipsum incididunt excepteur magna pariatur nulla. <br /><br />
                        Duis consectetur id Lorem cupidatat eiusmod aute. Aliquip nulla id nulla sit sit cillum cillum deserunt incididunt. Do ea qui non sit ea. Voluptate in ut excepteur esse ad excepteur ut quis excepteur. Eiusmod ullamco ea ipsum incididunt excepteur magna pariatur nulla.
                        Duis consectetur id Lorem cupidatat eiusmod aute. Aliquip nulla id nulla sit sit cillum cillum deserunt incididunt. Do ea qui non sit ea. Voluptate in ut excepteur esse ad excepteur ut quis excepteur. Eiusmod ullamco ea ipsum incididunt excepteur magna pariatur nulla. <br /><br />
                        Duis consectetur id Lorem cupidatat eiusmod aute. Aliquip nulla id nulla sit sit cillum cillum deserunt incididunt. Do ea qui non sit ea. Voluptate in ut excepteur esse ad excepteur ut quis excepteur. Eiusmod ullamco ea ipsum incididunt excepteur magna pariatur nulla.
                        Duis consectetur id Lorem cupidatat eiusmod aute. Aliquip nulla id nulla sit sit cillum cillum deserunt incididunt. Do ea qui non sit ea. Voluptate in ut excepteur esse ad excepteur ut quis excepteur. Eiusmod ullamco ea ipsum incididunt excepteur magna pariatur nulla. <br /><br />
                    </Typography>
                </Grid>
            </Container>
            <Footer />
        </>
    )
};
