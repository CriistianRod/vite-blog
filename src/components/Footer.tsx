import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import RestoreIcon from '@mui/icons-material/Restore'
import FavoriteIcon from '@mui/icons-material/Favorite'
import LocationOnIcon from '@mui/icons-material/LocationOn'

export default function Footer() {
    return(
        <>
        
        <BottomNavigation
                showLabels
            //   value={value}
            //   onChange={(event, newValue) => {
            //     setValue(newValue);
            //   }}
            >
                <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
            </BottomNavigation>
        </>
    )
};
