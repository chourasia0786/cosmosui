import {
  Box,
  ResponsiveContext,
  Button,
  Text,
  Menu,
  AccordionPanel,
  Accordion,
} from 'grommet';
import LeftSideBarElement from './LeftSideBarElement';
import { useContext, useState, React } from 'react';
import { rightSideBarOptions } from '../../config/rightSideBarOptions/rightSideBarOptions';
import { SearchBox } from './SearchBox';
import { useNavigate } from 'react-router-dom';
import { Previous, Next, CatalogOption, Folder, FormDown } from 'grommet-icons';
import SettingsWindow from './SettingsWindow';

const RightSideBar = (props) => {
  const navigate = useNavigate();
  const size = useContext(ResponsiveContext);
  // const searchSuggestions = rightSideBarOptions;
  // const [suggestions, setSuggestions] = useState(searchSuggestions);
  // const [selected, setSelected] = useState(rightSideBarOptions[0].name);
  // const navigateFunction = () => {
  //   props.setSelected(false);
  //   props.onExit(false);
  //   navigate(`/dashboard/Solution/${rightSideBarOptions[0].name}`);
  // };
  const [selectedButton, setSelectedButton] = useState('Solution');

  const changeButton = (option) => {
    setSelectedButton(option);
  };
  const items = [
    { label: 'Change username' },
    { label: 'Reset Password' },
    { label: 'Logout' },
  ];
  return (
    <Box
      // overflow={{ vertical: 'scroll' }}
      align='start'
      round='none'
      border='all'
      // height='100%'
      // fill='vertical'
      // width='300px'
      // pad={{ horizontal: 'small', vertical: 'medium' }}
    >
      <Box
        align='start'
        width='100%'
        // flex
        pad={{ horizontal: 'small', vertical: 'small' }}
      >
        <Box
          gap='small'
          fill='horizontal'
          direction='row-responsive'
          justify='between'
        >
          <Button
            label='Solution'
            onClick={() => {
              changeButton('Solution');
            }}
            active={selectedButton == 'Solution' ? true : false}
          />
          <Button
            label='Team'
            onClick={() => {
              changeButton('Team');
            }}
            active={selectedButton == 'Team' ? true : false}
          />
        </Box>
        <SearchBox
          placeholder='Search'
          // suggestions={rightSideBarOptions}
          // setSuggestions={setSuggestions}
        />

        <Box
          margin={{ bottom: 'xsmall' }}
          gap='xsmall'
          onClick={() => {}}
          align='center'
          justify='start'
          direction='row-responsive'
        >
          <CatalogOption onClick={() => {}} color='#00567A' />
          <Text color='#00567A'>Project.params</Text>
        </Box>
        <Box
          margin={{ bottom: 'xsmall' }}
          gap='xsmall'
          onClick={() => {}}
          align='center'
          justify='start'
          direction='row-responsive'
        >
          <Folder onClick={() => {}} color='#00567A' />
          <Text color='#00567A'>Connection managers</Text>
        </Box>
        <Menu
          label='Packages'
          color='#00567A'
          // dropAlign='bottom: "right" | "right"'
          items={[
            {
              label: (
                <Box
                  onClick={props.addToolbarElement}
                  style={{ color: '#00567A' }}
                  alignSelf='center'
                >
                  Create packages
                </Box>
              ),
            },
          ]}
        />
      </Box>

      {props.window == 'Data Transformation' && <SettingsWindow />}
    </Box>
  );
};

export default RightSideBar;
