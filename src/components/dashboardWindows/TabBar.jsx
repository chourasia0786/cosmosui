import {React, useState} from 'react';
import { Box } from 'grommet';
import { FormClose } from 'grommet-icons';
const TabBar = (props) => {
    

    return (
         <Box
    background='#00739D'
    fill='horizontal'
    border='bottom'
    justify='start'
    align='start'
    direction='row-responsive'
    height='24px'
  >
    {props.toolbarProjects.map((el) => {
      return (
        <Box
          direction='row-responsive'
          background='white'
          align='center'
          pad={{ horizontal: 'small' }}
          gap='small'
          border={{ color: 'black', side: 'right' }}
          key={el.key}
        >
          {el}
          <Box onClick={props.removeToolbarElement}>
            <FormClose/>
          </Box>
        </Box>
      );
    })}
  </Box> 
  );
}



export default TabBar;