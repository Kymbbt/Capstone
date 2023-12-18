import * as _React from 'react'; 
import { styled } from '@mui/system'; 
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom'; 


import shopImage from '../../assets/images/merry.gif'; 
import { NavBar } from '../sharedComponents';

interface Props {
    title: string
}


const Root = styled('div')({
    padding: 0,
    margin: 0
})

const Main = styled('main')({
    backgroundImage: `linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .5)), url(${shopImage});`,
    width: '100%',
    height: '100vh', 
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top 5px',
    position: 'relative', 
    marginTop: '10px',
    overflow: 'hidden', 
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)', 
});

const MainText = styled('div')({
    textAlign: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)'
});





export const Home = (props: Props) => {
    const myAuth = localStorage.getItem('auth')

    
    return (
        <Root>
          <NavBar />
          <Main>
            <MainText>
              <Typography variant='h3'> {props.title}</Typography>
              <Button
                sx={{
                  marginTop: '20px',
                  borderRadius: '20px', 
                  padding: '15px 30px',
                  fontSize: '1.5rem', 
                }}
                component={Link}
                to={myAuth === 'true' ? '/shop' : '/auth'}
                variant='contained'
              >
                MAKE A WISH
              </Button>
            </MainText>
          </Main>
        </Root>
      );
    };







//     return (
//         <Root>
//             <NavBar />
//             <Main>
//                 <MainText>
										
//                     <Typography variant='h3'> { props.title }</Typography>
//                     <Button sx={{ marginTop: '10px'}} component={Link} to={myAuth === 'true' ? "/shop" : "/auth"} variant='contained'>Enter if you dare.....☠</Button>
//                 </MainText>
//             </Main>
//         </Root>
//     )
// }