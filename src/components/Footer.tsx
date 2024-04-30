import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import ContactPageIcon from '@mui/icons-material/ContactPage'
import { Link } from 'react-router-dom'

export default function Footer() {
    return(
        <>
        <BottomNavigation
                showLabels
            >
                <BottomNavigationAction
                    label="LinkedIn"
                    icon={<LinkedInIcon />}
                    href="https://www.linkedin.com/in/cristian-rodr%C3%ADguez-713bb3173/"
                    />
                <BottomNavigationAction label="Instagram" icon={<InstagramIcon />} href="https://www.instagram.com/criistiianrod/"/>
                <BottomNavigationAction label="Contacto" icon={<ContactPageIcon />} LinkComponent={Link} to="/contact"/>
            </BottomNavigation>
        </>
    )
};
