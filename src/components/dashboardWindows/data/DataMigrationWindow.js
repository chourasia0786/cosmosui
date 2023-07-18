import {
  Box,
  Card,
  Text,
  TextArea,
  Grid,
  Button,
  Layer,
  ResponsiveContext,
} from 'grommet';
import Chatbot from 'src/components/Chatbot/Chatbot';
import { dataMigrationOptions } from '../../../config/dataMigrationOptions';
import JointPage from '../../../pages/JointPage';
import LeftSideBar from '../../sideBar/LeftSideBar';
import RightSideBar from '../../sideBar/RightSideBar';
import { useContext, useEffect, useState } from 'react';
import DashboardContext from '../../../pages/dashboards/DashboardContext';
import { Close, FormClose } from 'grommet-icons';
import { useNavigate } from 'react-router-dom';
import ToolContext from './TabContext';
const DataMigrationWindow = () => {
  const navigate = useNavigate();

  const ctx = useContext(DashboardContext);
  const size = useContext(ResponsiveContext);
  const [toolbarProjects, setToolbarProjects] = useState([]);
  const addToolbarElement = () => {
    setToolbarProjects((project) => [...project, 'Project 1']);
  };
  const removeToolbarElement = () => {
    setToolbarProjects((project) => {
      let a = [];
      for (let i = 0; i < project.length - 1; i++) {
        a.push(project[i]);
      }
      return a;
    });
    console.log(toolbarProjects.splice(-1, 1));
  };
  const [show, setShow] = useState(false);
  // console.log(window.innerHeight);
  const changeShow = () => {
    setTimeout(() => {
      setShow((status) => !status);
    }, 5000);
  };
  // useEffect(() => {
  //   console.log(size);
  // }, [size]);
  const navi = () => {
    navigate('/Data/Data Transformation');
  };
  return (
    <ToolContext.Provider value='h'>
      <Box direction='row-responsive' fill='horizontal' height='150vh'>
        <Box direction='column' justify='center' align='center' flex>
          <Chatbot
            proceed
            show={show}
            changeShow={changeShow}
            flex
            justify='center'
            window='Data Migration'
            align='center'
          />

          {show && (
            <Layer
              position='center'
              onEsc={() => setShow(false)}
              onClickOutside={() => setShow(false)}
            >
              <Box height='100%'>
                <Card
                  // onClick={() =>
                  //   navigate(`/${props.dashboardType}/${props.title}`)
                  // }
                  height='300px'
                  title='Edit Details'
                  background='light'
                  width='100%'
                  footer={<Button label='Update' secondary />}
                >
                  <Box
                    height='100%'
                    direction='column'
                    pad={{ horizontal: 'medium', vertical: 'medium' }}
                    // align='center'
                    justify='between'
                  >
                    <Box>
                      <Text>Migration Details</Text>
                    </Box>
                    <Box>
                      <Box direction='row-responsive' gap='medium'>
                        <Text weight='bold'>Source</Text> <Text>Source 1</Text>
                      </Box>
                      <Box direction='row-responsive' gap='medium'>
                        <Text weight='bold'>Target</Text> <Text>Target 1</Text>
                      </Box>
                    </Box>
                    <Box
                      background='#17EBA03D'
                      style={{ borderRadius: '10px' }}
                      direction='row-responsive'
                      gap='small'
                      pad='xsmall'
                      fill='horizontal'
                    >
                      <Box
                        width='15px'
                        height='15px'
                        margin={{ left: 'small', top: 'small' }}
                        style={{
                          backgroundColor: '#17EBA0',
                          borderRadius: '7.5px',
                        }}
                      ></Box>

                      <Box flex>
                        <Text>Migrated</Text>
                        <Text size='xsmall'>
                          Data Migration successfully completed
                        </Text>
                      </Box>
                    </Box>
                    <Box direction='row-responsive' gap='xsmall'>
                      <Text>Do you want to proceed for</Text>
                      <Text weight='bold' color='black'>
                        Data Transformation?
                      </Text>
                    </Box>
                    <Box direction='row-responsive' gap='small'>
                      <Button
                        label='Proceed'
                        primary
                        onClick={() => {
                          setShow(false);
                          navigate('/Data/Data Transformation');
                        }}
                      />
                      <Button label='Close' onClick={() => setShow(false)} />
                    </Box>
                  </Box>
                </Card>
              </Box>
            </Layer>
          )}
        </Box>

        <RightSideBar window='Data Migration' />
      </Box>
    </ToolContext.Provider>
  );
};

export default DataMigrationWindow;
