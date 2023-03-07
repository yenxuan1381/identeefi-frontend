import { Box, Paper, Typography } from '@mui/material';
import bgImg from '../../img/bg.png';

const ManageAccount = () => {
    return (  
        <Box sx={{ 
            backgroundImage: `url(${bgImg})`, 
            minHeight: "80vh", 
            backgroundRepeat: "no-repeat",
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            zIndex: -2,
        }}>
            <Paper elevation={3} sx={{width: "50%", margin: "auto", marginTop: "10%", padding: "3%", backgroundColor: "#e3eefc"}}>
                <Typography
                    variant="h2"
                    sx={{
                        textAlign: "center", marginBottom: "3%",
                        fontFamily: 'Gambetta', fontWeight: "bold", fontSize: "2.5rem"
                    }}
                >
                    Manage Account
                </Typography>
            </Paper>
        </Box>
    );
}
 


export default ManageAccount;