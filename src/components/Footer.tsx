import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import PersonIcon from '@mui/icons-material/Person'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Link } from 'react-router-dom'

export default function Footer() {
    return(
        <>
        <BottomNavigation
                // showLabels
            >
                <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon />} href="https://www.linkedin.com/in/cristian-rodr%C3%ADguez-713bb3173/" target='_blank'/>
                <BottomNavigationAction label="GitHub" icon={<GitHubIcon />} href="https://github.com/CriistianRod" target='_blank'/>
                <BottomNavigationAction label="Instagram" icon={<InstagramIcon />} href="https://www.instagram.com/criistiianrod/" target='_blank'/>
                <BottomNavigationAction label="Contacto" icon={<PersonIcon />} LinkComponent={Link} to="/contact"/>
            </BottomNavigation>
        </>
    )
};
