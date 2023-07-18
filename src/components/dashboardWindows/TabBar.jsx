import {React, useState} from 'react';
import { Box } from 'grommet';
import { FormClose } from 'grommet-icons';
const TabBar = (props) => {
  const [showInputEle, setShowInputEle] = useState(false);
    

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
    {props.toolbarProjects.map((el,index) => {
      return (
        <Box
          direction='row-responsive'
          background={props.currentToolbar == el ? '#00739D' : 'white'}
          align='center'
          pad={{ horizontal: 'small' }}
          gap='small'
          border={{ color: 'black', side: 'right' }}
          key={index}
          onClick={()=>{props.setCurrentToolBar(el)}}
        >
          {/* {el} */}
          {
        // Use JavaScript's ternary operator to specify <span>'s inner content
        showInputEle ? (
          <input
            type='text'
            value={el}
            onChange={(e) => props.editToolbarElement(e.target.value, el)}
            onBlur={() => setShowInputEle(false)}
            autoFocus
            key={index}
          />
        ) : (
          <Box
            onDoubleClick={() => setShowInputEle(true)}
          >
            {el}.dtxs
          </Box>
        )
      }
          <Box onClick={()=>{props.removeToolbarElement(el)}}>
            <FormClose/>
          </Box>
        </Box>
      );
    })}
  </Box> 
  );
}



export default TabBar;