import React from 'react'
import { 
  Box, 
  Stack, 
  styled, 
  Typography,
} from '@mui/material'
import FooterTitle from './FooterTitle'
import FooterLink from './FooterLink'
import { Link } from 'react-router-dom'
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {

  const StackColumn = styled(Stack) (() => ({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    gap: 8,
    textAlign: 'center',
  }));

  const BoxRow = styled(Box) (({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ededed',
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: 30,
    }
    
  }));

  return (
    
    <BoxRow 
    component = 'footer'
    sx={{
      py: 4,
      px: 2,
    }}
    >
      <StackColumn>
        <FooterTitle text={'Servicing Broward & Palm Beach County'} />
        {/* <FooterLink 
        text={'15th Louis St, london 92382, eng'} 
        /> */}
        <FooterLink 
        text={'954.551.4546'}
        href='tel:9545514546' 
        />
        <FooterLink 
        text={'sossteamers@gmail.com'} 
        />
      </StackColumn>
      
      <StackColumn>
        <FooterTitle text={'our services'} />
        <FooterLink text={'Air Duct Cleaning'} />
        <FooterLink text={'Dryer Vent Cleaning'} />
        {/* <FooterLink text={'build house'} /> */}
      </StackColumn>
      <StackColumn>
        <FooterTitle text={'our company'} />
        <FooterLink 
        text={'About Us'}         
        component={Link}
        to='/about'/>
        <FooterLink text={'Get In Touch'} />
      </StackColumn>

      <StackColumn>
        <FooterTitle text={'SOS Air Duct & Dryer Vent Cleaning'} />
        <Stack 
        direction='row' 
        width= '70px'
        maxWidth='100%'
        justifyContent='space-between'
        >
          {/* <Link href="#" variant="body2" 
          sx={{
            color: '#414141',
            "&:hover": {
              color: '#1c2859',
            }
          }}
          >
            <InstagramIcon />  
          </Link> 
          <Link href="#"variant="body2" 
          sx={{
            color: '#414141',
            "&:hover": {
              color: '#1c2859',
            }
          }}
          >
            <FacebookIcon />
          </Link>  */}
        </Stack>
        <Typography 
        variant='caption'
        component='p' 
        >
          &copy; 2022 SOS Air Duct & Dryer Vent Cleaning
        </Typography>
      </StackColumn>
    </BoxRow>
  )
}

export default Footer