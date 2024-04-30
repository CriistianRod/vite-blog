import { Container, Grid } from '@mui/material';
import { useRouteError } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <Navbar></Navbar>
      <Container sx={{ p: 2 }}>
        <Grid
          container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
        <div id="error-page">
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
        <footer style={{ position: "fixed", bottom: 0 }}>
          <Footer></Footer>
        </footer>
        </Grid>
      </Container>
    </>
  );
}