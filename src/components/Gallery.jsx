import React,{ useState } from 'react'
// mui
import { 
    Typography,
    Box,
    Stack,
} from "@mui/material";
// carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// components
import Title from './Title'
import Paragraph from './Paragraph'


const Gallery = () => {
    
    const [currentIndex, setCurrentIndex] = useState();

    const imageData = [
        {
            alt: 'image1',
            url: 'https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/291980285_476574974468703_7188253895566488783_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=52f669&_nc_ohc=FPS2HUGxOXQAX8aGGpW&_nc_ht=scontent-mia3-2.xx&oh=00_AfDVyKrdX1EQZkTnC4-IMUftnTMvlwle4VccVOA1MFewIA&oe=64FC1A98'
        },
        {
            alt: 'image2',
            url: 'https://soscarpettilecleaning.com/wp-content/uploads/2022/01/sos-carpet-and-tile-family.jpg'
        },
        {
            alt: "image3",
            url: 'https://soscarpettilecleaning.com/wp-content/themes/yootheme/cache/c9/sos-team-contact-us-bg-c9591996.jpeg'
        },
        {
            alt: "image4",
            url: 'https://scontent-mia3-1.xx.fbcdn.net/v/t1.6435-9/108592192_3181173318617281_6478881692573621195_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=xE-Dxg_ymSsAX9YIXDP&_nc_ht=scontent-mia3-1.xx&oh=00_AfBIbvKjy4iHo3B7Ju6Au3uwI92Ht3Xh8x43yH-aBlwzVQ&oe=651DE61C'
        },

    ];
  
    const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
        <img src={image.url} alt={image.alt} />
    </div>
    ));


    const handleChange = (index) => {
        setCurrentIndex(index);
    }

    return (
        <Stack
        direction='column'
        justifyContent= 'center'
        alignItems= 'center'
        sx={{
            py: 8,
            px: 2,
            display: { xs: 'flex'},
        }}
        >
            <Box
            component='section'
            sx={{
                paddingBottom: 3,
            }}
            >
                <Title 
                text={
                    'SOS Air Duct & Dryer Vent Cleaning'
                }
                textAlign={'center'}
                />
                <Typography
                variant='h5'
                component='h4'
                align='center'
                sx={{
                    paddingTop: 1,
                }}
                >
                    Family Owned & Operated for over 28 years
                </Typography>
                <Paragraph text={
                    "Discover Our South Florida Legacy. Family-Owned and Operated Since 1995.SOS, your trusted source for air duct and dryer vent cleaning services in sunny South Florida. For nearly three decades, we've been proudly serving our local community, delivering top-notch indoor air quality solutions that make a difference. A Family Tradition of Service. Our journey began in 1995 when Mitch Pope decided to turn his passion for cleaner, healthier homes into a thriving business. With a hands-on approach and an unwavering commitment to excellence, Mitch Pope built SOS from the ground up, establishing it as a household name throughout South Florida."
                } 
                maxWidth = {'sm'}
                mx={'auto'}
                textAlign={'center'}
                />
            </Box>
            
            <Box sx={{ 
                maxWidth: 700,
                width: '100%',
            }}>
                <Carousel
                centerSlidePercentage={40}
                thumbWidth={180}
                dynamicHeight={false}
                centerMode={false}
                showArrows={false}
                autoPlay={false}
                infiniteLoop={true}
                selectedItem={imageData[currentIndex]}
                onChange={handleChange}
                className="carousel-container"
                >
                {renderSlides}
                </Carousel>
            </Box>
        </Stack>
    )
}

export default Gallery