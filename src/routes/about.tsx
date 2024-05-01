import { Container, Grid, Typography } from '@mui/material'

import Navbar from '../components/Navbar'
import MainImage from '../components/MainImage'
import Footer from '../components/Footer'

export default function About() {
    return (
        <>
            <Navbar />
            <Container
            sx={{ py: 12, px: 3, display: 'flex', justifyContent: 'center' }}
            >
                <Grid
                    container
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        maxWidth: 'sm'
                    }}
                >
                    <MainImage />
                    <Typography variant='h4' sx={{ marginTop: 3, marginBottom: 1 }}>
                        Soy Cristian
                    </Typography>
                    <Typography>
                        Soy Desarrollador de Software y entusiasta de Ciencias de Datos, tengo 26 años y soy de Colombia. <br />
                        Llevo más de <b>4 años</b> trabajando en la Industria del Desarrollo, aprendiendo y contribuyendo a múltiples compañías. <br />
                        Me he desempeñado principalmente como <b>Frontend Developer</b>, y actualmente estoy haciendo un pivot a Ciencias de Datos. <br />
                        Disfruto mucho explorar, obtener información de los datos y exponerla. <br />
                    </Typography>
                    <Typography variant='h4' sx={{ marginTop: 5, marginBottom: 1 }}>
                        Experiencia
                    </Typography>
                    <Typography>
                        Duis consectetur id Lorem cupidatat eiusmod aute. Aliquip nulla id nulla sit sit cillum cillum deserunt incididunt. Do ea qui non sit ea. Voluptate in ut excepteur esse ad excepteur ut quis excepteur. Eiusmod ullamco ea ipsum incididunt excepteur magna pariatur nulla.
                        Duis consectetur id Lorem cupidatat eiusmod aute. Aliquip nulla id nulla sit sit cillum cillum deserunt incididunt. Do ea qui non sit ea. Voluptate in ut excepteur esse ad excepteur ut quis excepteur. Eiusmod ullamco ea ipsum incididunt excepteur magna pariatur nulla. <br /><br />
                        Duis consectetur id Lorem cupidatat eiusmod aute. Aliquip nulla id nulla sit sit cillum cillum deserunt incididunt. Do ea qui non sit ea. Voluptate in ut excepteur esse ad excepteur ut quis excepteur. Eiusmod ullamco ea ipsum incididunt excepteur magna pariatur nulla.
                        Duis consectetur id Lorem cupidatat eiusmod aute. Aliquip nulla id nulla sit sit cillum cillum deserunt incididunt. Do ea qui non sit ea. Voluptate in ut excepteur esse ad excepteur ut quis excepteur. Eiusmod ullamco ea ipsum incididunt excepteur magna pariatur nulla. <br /><br />
                        Duis consectetur id Lorem cupidatat eiusmod aute. Aliquip nulla id nulla sit sit cillum cillum deserunt incididunt. Do ea qui non sit ea. Voluptate in ut excepteur esse ad excepteur ut quis excepteur. Eiusmod ullamco ea ipsum incididunt excepteur magna pariatur nulla.
                        Duis consectetur id Lorem cupidatat eiusmod aute. Aliquip nulla id nulla sit sit cillum cillum deserunt incididunt. Do ea qui non sit ea. Voluptate in ut excepteur esse ad excepteur ut quis excepteur. Eiusmod ullamco ea ipsum incididunt excepteur magna pariatur nulla.
                    </Typography>
                    <Typography variant='h4' sx={{ marginTop: 5, marginBottom: 1 }}>
                        Otras cositas
                    </Typography>
                    <Typography>
                        La verdad es que el desarrollo es una parte pequeña de mi vida. El rango de mis intereses es muy amplio y me abruma un poco a veces, por la irremediable imposibilidad de dedicarme enteramente a todos ellos. <br /><br />
                        Me apasiona la literatura; me emociona la belleza, las posibilidades y la fuerza del lenguaje. Suelo escribir. Me gusta entender la vida y el universo escribiendo. <br />
                        He escrito cuentos, poemas, intentos de ensayos y reflexiones. <br />
                        Además de literatura, leo sobre budismo, psico-educación, recuperación emocional, matemáticas, estadística, análisis de datos, psicodélicos, finanzas y crecimiento. Una vida entera necesaria para dedicar a cada uno. <br /><br />
                        Me interesan mucho el ejercicio y los deportes: practico yoga, boxeo, running y voy (cada vez más) al gimnasio. Además, me interesa el entrenamiento de flexibilidad y fuerza, la calistenia, las artes marciales mixtas, el rugby y la gimnasia
                        (de fútbol, apenas me estoy volviendo un fifas).<br /><br />
                        Disfruto mucho la música: explorarla, cantar, tocar guitarra y espero retomar el teclado. He hecho parte de un par de grupos con amigos.<br />
                        Hablo inglés e falo brasileiro. <br /><br />
                        Llevo más de 5 años en procesos de psicoterapia, leyendo, aprendiendo y entendiendo sobre mí, por lo que me siento muy afortunado y agradecido por quien soy y por la vida que se me ofrece en este momento.
                    </Typography>
                </Grid>
            </Container>
            <Footer />
        </>
    )
};
