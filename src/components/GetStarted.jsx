import React from 'react'
import { 
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
import Title from './Title'
// img
import imgDetail from '../assets/How-often-do-I-dust-my-house.webp';
import imgDetail2 from '../assets/Nugenomics-Blog-2-1080x675.jpg';


const GetStarted = () => {

    const CustomGridItem = styled(Grid) ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    })
    
    const CustomTypography = styled(Typography) ({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    })

    return (
            
        <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}   
        sx={{
            py: 10,
            px: 2,
             
        }}
        >
            <CustomGridItem item xs={12} sm={8} md={6} 
            component = 'section'
           
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'Removal of Accumulated Dust and Debris'
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                        Over time, dust, dirt, pet dander, and other debris can accumulate in your HVAC (Heating, Ventilation, and Air Conditioning) system's ductwork. When the HVAC system operates, it circulates air through these ducts, pushing the particles into your living spaces. Cleaning the air ducts removes this built-up dust and debris, preventing it from continually being redistributed into the air you breathe.<br /> 
                    </CustomTypography> 
                </Box>

            </CustomGridItem>
            
            <Grid item xs={12} sm={4} md={6}>
                <img src={imgDetail} alt="" 
                style={{
                    width: '100%',
                }}
                />
            </Grid>

            <Grid item xs={12} sm={4} md={6}
            sx={{
                order: {xs: 4, sm: 4, md: 3}
            }}
            >
                <img src={imgDetail2} alt="" 
                style={{ 
                    width: "100%",
                }}
                />
            </Grid>

            <CustomGridItem item xs={12} sm={8} md={6}
            sx={{
                order: {xs: 3, sm: 3, md: 4}
            }}
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'Allergen Reduction'
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                        Allergens like pollen, mold spores, and dust mites can find their way into your HVAC system and get trapped in the ductwork. When the system is in operation, these allergens can be carried into your home, causing allergic reactions and respiratory problems for susceptible individuals. Air duct cleaning helps eliminate these allergens, reducing the risk of allergy-related discomfort and health issues.
                    </CustomTypography>
                </Box>
            </CustomGridItem>
            
        </Grid>
    )
}

export default GetStarted;