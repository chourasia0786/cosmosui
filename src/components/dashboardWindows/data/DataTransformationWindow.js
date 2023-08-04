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

import RightSideBar from '../../sideBar/RightSideBar';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardContext from '../../../pages/dashboards/DashboardContext';
const DataTransformationWindow = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const changeShow = () => {
    setShow(true);
  };
  const ctx = useContext(DashboardContext);
  const size = useContext(ResponsiveContext);
  return (
    <Box direction='row-responsive' fill='horizontal' height='150vh'>
      <Box direction='column' justify='center' align='center' flex>
        <Box className='chatbot'>
          <Chatbot window='Data Transformation' />
        </Box>
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
                      <Text weight='bold'>Source 1</Text> <Text>Target 1</Text>
                    </Box>
                    <Box direction='row-responsive' gap='medium'>
                      <Text weight='bold'>Source 2</Text> <Text>Target 2</Text>
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
      <RightSideBar window='Data Transformation' />
    </Box>
  );
};

export default DataTransformationWindow;
