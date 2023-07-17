import Chatbot from 'src/components/Chatbot/Chatbot';
import logo from './logo.svg';
import './App.css';
import { Box, Button, ResponsiveContext, Text, Layer, Avatar } from 'grommet';

import { Grommet } from 'grommet';

import { hpe } from 'grommet-theme-hpe';
import AppRoutes from './routes/AppRoutes';
import { AppFooter } from './components/footer/AppFooter';
import NavBar from './components/navBar/NavBar';
import { useContext, useState } from 'react';
import convertToSVG from './utils/convertToSVG';
import ElementMaker from './ElementMaker';
const App = () => {

const [selectedButton, setSelectedButton] = useState(false)
  const name = "Sumit Mandlik";
const handleprop = () => {
      console.log("Click here");
      setSelectedButton(true);
    };
    const handleCancel = () => {
      setSelectedButton(false);
    };
  const getInitials = () => {
    
    const parts = name.split(' ');
    let initials = '';
    for (const element of parts) {
      if (element.length > 0 && element !== '') {
        initials += element[0].toUpperCase();
      }
    }
    return initials;
  };
    return (
        <Grommet theme={hpe} full >   
      {/* <Box height='100%' overflow={{vertical:'scroll'}}> */}
 
        <NavBar initials={getInitials} selectedButton={selectedButton} setSelectedHandle={setSelectedButton} onOpenProfilePopup={handleprop} />
        <Box flex>
          <AppRoutes />
        </Box>
        <AppFooter />
        {selectedButton && (
                  <Layer
                    //  background={{opacity: false}}
                    margin={{top:"large", right:"small"}}
                    style={{
                       
                      minWidth: "250px",
                      // border:"2px solid grey ",
                      background: "white",
                      borderRadius:"4%",
                      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)'
                      // background: 'rgba(0, 0, 0, 0.5)' 
                    }}
                    
                     plain
                    position="top-right"
                    modal false
                    flex
                    onClickOutside={handleCancel}
                    onEsc={handleCancel}
                  >
                    <Box  gap="small" fill="horizontal">
                      <Box direction="row" gap="small" fill="horizontal"
                      pad={"small"}
                      align="center"
                     >
                        <Avatar background="#00739D" size="medium" >
                          {getInitials()}
                        </Avatar>
                        <Box direction="column">
                          <Text weight={'bold'} size="large" margin={{"bottom":"none"}}>
                            {/* {localStorage.getItem('user_name')} */}
                            {name}
                            </Text>
                          <Text >{localStorage.getItem('user_email')}</Text>
                        </Box>
                      </Box>
                      <Box
                        direction="row"
                        fill="horizontal"
                        pad={{left:"medium",right:"medium",top:"small",bottom:"small"}}
                        style={{justifyContent:'space-between',borderTop:"1px grey solid"}}
                      >
                         <Text style={{cursor:"pointer"}} color={"text-strong"} 
                        //  onClick={handleLogout}
                         >Setting</Text>
                        <Text style={{cursor:"pointer"}} color={"text-strong"} weight={"bold"} 
                        // onClick={handleLogout}
                        >Sign Out</Text> 
                      </Box>
                    </Box>
                  </Layer>
                )}
      {/* </Box> */}
    </Grommet>

    );
};

export default App;
