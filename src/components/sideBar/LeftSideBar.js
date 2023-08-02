import { Box, ResponsiveContext, Button, Text, Card } from 'grommet';
import { useContext, useState, React } from 'react';
import { SearchBox } from './SearchBox';
import { useNavigate } from 'react-router-dom';
import LeftSideBarElement from './LeftSideBarElement';
import { Previous, Next, Target, Layer } from 'grommet-icons';

const LeftSideBar = (props) => {
  const navigate = useNavigate();
  const size = useContext(ResponsiveContext);
  const searchSuggestions = props.sidebaroptions;
  const [suggestions, setSuggestions] = useState(() => {
    let a = [];
    props.sidebaroptions.map((el) => {
      a.push(el.name);
    });
    return a;
  });

  const [selected, setSelected] = useState(props.sidebaroptions[0].name);
  const proceed = () => {
    props.changeShow();
    // localStorage.clear();
  };

  return (
    <Box fill='vertical' align='start' border='all'>
      <Box
        align='start'
        width='100%'
        // fill='vertical'
        pad={{ horizontal: 'small', vertical: 'small' }}
      >
        <Box
          direction='row-responsive'
          // gap='small'
          justify={props.proceed ? 'between' : 'start'}
          align='center'
          fill='horizontal'
          margin={{ bottom: 'small' }}
        >
          <Button
            size='medium'
            gap='small'
            label='Back'
            icon={<Previous />}
            onClick={() => {
              navigate('/data/dashboard');
            }}
          />
          {props.proceed && (
            <Button
              size='medium'
              gap='small'
              label='Proceed'
              primary
              onClick={proceed}
            />
          )}
        </Box>

        <Box fill='horizontal'>
          <Text color='black' weight='bold' size='large'>
            {props.title}
          </Text>
          <Text margin={{ vertical: 'xsmall' }} size='xsmall'>
            Add or drag below options
          </Text>
        </Box>

        <SearchBox
          placeholder='Search Toolbox'
          suggestions={searchSuggestions}
          setSuggestions={setSuggestions}
        />
      </Box>
      {/* <Box className='side-bar' border='all'> */}
      <Box className='chatbot side-bar'>{props.children}</Box>
      {/* </Box> */}

      {/* <LeftSideBarElement
        options={'Source 1'}
        addToolbarElement={props.addToolbarElement}
        selected={selected}
        setSelected={setSelected}
      >
        <Layer color='#00567A' />
      </LeftSideBarElement>
      <LeftSideBarElement
        options={'Target 1'}
        // addToolbarElement={props.addToolbarElement}
        selected={selected}
        setSelected={setSelected}
      >
        <Target color='#00567A' />
      </LeftSideBarElement> */}
    </Box>
  );
};

export default LeftSideBar;
