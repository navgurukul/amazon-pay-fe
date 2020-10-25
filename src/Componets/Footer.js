import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { SocialIcon } from 'react-social-icons';
import Box from '@material-ui/core/Box';


export default function Footer() {
    return (
        // <React.Fragment>


        <div className="Footer">
            <Box display="flex" justifyContent="center" bgcolor="background.paper" >
                <Box p={2} >
                    <SocialIcon url="https://x.facebook.com/navgurukul/" />
                </Box>
                <Box p={2} >
                    <SocialIcon url="https://www.instagram.com/navgurukul.bangalore/?hl" />
                </Box>
                <Box p={2}>
                    <SocialIcon url="https://www.youtube.com/channel/UC9yaihhuBLgke9O6IVC-Gsw" />
                </Box>
            </Box>
            <div style={{ backgroundColor: '#343a40' }}>
                <Container >
                    <Typography component="p" variant="p" className="text">
                        Made with love from NavGurukul
                 </Typography>
                </Container>
            </div>
        </div>
        // </React.Fragment>
    );
}
