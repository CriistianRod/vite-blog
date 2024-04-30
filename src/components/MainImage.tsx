import { Card, Box } from '@mui/material'

export default function MainImage() {
    const post = {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random?wallpapers',
        imageLabel: 'Image Text',
    }

    return (
        <>
            <Card
                // sx={{ m: 3 }}
            >
                <Box
                    component="img"
                    sx={{
                        height: 400,
                        width: 'fit-content',
                        maxHeight: { xs: 233, md: 466 },
                        maxWidth: { xs: 200, md: 700 },
                        objectFit: 'cover'
                    }}
                    alt="The house from the offer."
                    src={post.image}
                />
            </Card>
        </>
    )
};
