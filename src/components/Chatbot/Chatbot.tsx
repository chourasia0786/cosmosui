import React, {
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
  useContext,
  ChangeEvent,
} from 'react';
import { Subscription } from 'rxjs';
import { Box, ResponsiveContext } from 'grommet';
import 'src/components/Chatbot/Chatbot.scss';
import RappidService from 'src/services/rappid.service';
import JsonEditor from 'src/components/Chatbot/JsonEditor/JsonEditor';
import Inspector from 'src/components/Chatbot/Inspector/Inspector';
import EventBusServiceContext from 'src/services/event-bus-service.context';
import { EventBusService } from 'src/services/event-bus.service';
import { SharedEvents } from 'src/rappid/controller';
import {
  importGraphFromJSON,
  loadStencilShapes,
  zoomToFit,
} from 'src/rappid/actions';
import { STENCIL_WIDTH } from 'src/theme';
import { dataMigrationOptions } from 'src/config/dataMigrationOptions';

import exampleGraphJSON from 'src/rappid/config/example-graph.json';
import LeftSideBar from '../sideBar/LeftSideBar';
import { FormClose } from 'grommet-icons';
import TabBar from '../dashboardWindows/TabBar';
import ToolContext from '../dashboardWindows/data/ToolContext';
interface ChatbotProps {
  window: string;
  show: boolean;
  changeShow: () => {};
  proceed: boolean;
  toolbarProjects: [];
  addToolbarElement: () => {};
  removeToolbarElement: (el: String) => {};
  editToolbarElement: () => {};
  currentToolbar: '';
  setCurrentToolBar: (el: String) => {};
  fullJson: {
    tabs: [
      {
        tab1: {
          cells: [];
        };
      },
      {
        tab2: {
          cells: [];
        };
      },
      {
        tab3: {
          cells: [];
        };
      }
    ];
  };
  setFullJson: (elem: any) => {};
}
const Chatbot = (props: ChatbotProps): ReactElement => {
  const [fullName, setFullName] = useState('Joe Abraham');
  const [showInputEle, setShowInputEle] = useState(false);
  const size = useContext(ResponsiveContext);
  const ctx = useContext(ToolContext);
  const elementRef = useRef(null);
  const toolbarRef = useRef(null);
  const stencilRef = useRef(null);
  const paperRef = useRef(null);
  const [rappid, setRappid] = useState(null);
  const [inspectorWidth, setInspectorWidth] = useState(0);
  const [eventBusService] = useState(new EventBusService());
  const [stencilOpened, setStencilOpened] = useState(true);
  const [jsonEditorOpened, setJsonEditorOpened] = useState(true);
  const [fileJSON, setFileJSON] = useState(null);
  const [subscriptions] = useState(new Subscription());
  const openFile = useCallback(
    (json: Object): void => {
      setFileJSON(json);
      importGraphFromJSON(rappid, json);
      zoomToFit(rappid);
    },
    [rappid]
  );

  const onStart = useCallback((): void => {
    loadStencilShapes(rappid, props.window);
    if (props.window == 'Data Migration') {
      localStorage.removeItem('jsonDataMigration');
      console.log(ctx.currentToolbar + 'hiii');
      openFile(
        props.fullJson.tabs.filter(
          (el) => Object.keys(el)[0] == ctx.currentToolbar
        )[0][ctx.currentToolbar]
      );
    }
    if (props.window == 'Data Transformation') {
      localStorage.removeItem('jsonTransformation');
      openFile(
        props.fullJson.tabs.filter(
          (el) => Object.keys(el)[0] == ctx.currentToolbar
        )[0][ctx.currentToolbar]
      );
    }
    // console.log(localStorage.jsonDataMigration);
    // if (props.window == 'Data Migration') {
    //   if (localStorage.getItem('jsonDataMigration') != null) {
    //     console.log('inside condition');
    // openFile(JSON.parse(localStorage.jsonDataMigration));
    //   } else {
    //     console.log('inside nested condition');
    //     console.log(exampleGraphJSON.tabs[0][ctx.currentToolbar]);
    //     openFile(exampleGraphJSON.tabs[0]['tab2']);
    //   }
    // } else if (
    //   props.window == 'Data Transformation' &&
    //   localStorage.jsonDataTransformation
    // )
    //   openFile(JSON.parse(localStorage.jsonDataTransformation));
    // else {
    //   console.log('inside no condition');

    //   openFile(exampleGraphJSON.tabs[0].tab1);
    // }
  }, [rappid, openFile, ctx.currentToolbar]);

  const onJsonEditorChange = useCallback(
    (json: Object): void => {
      if (rappid) {
        importGraphFromJSON(rappid, json);
      }
    },
    [rappid]
  );

  const onRappidGraphChange = useCallback(
    (json: Object): void => {
      setFileJSON(json);
      if (props.window == 'Data Transformation') {
        localStorage.setItem('jsonDataTransformation', JSON.stringify(json));
      }
      if (props.window == 'Data Migration') {
        localStorage.setItem('jsonDataMigration', JSON.stringify(json));
      }
      props.setFullJson(json);
    },
    [ctx.currentToolbar]
  );

  const onStencilToggle = useCallback((): void => {
    if (!rappid) {
      return;
    }
    const { scroller, stencil } = rappid;
    if (stencilOpened) {
      stencil.unfreeze();
      scroller.el.scrollLeft += STENCIL_WIDTH;
    } else {
      stencil.freeze();
      scroller.el.scrollLeft -= STENCIL_WIDTH;
    }
  }, [rappid, stencilOpened]);

  const toggleJsonEditor = (): void => {
    setJsonEditorOpened(!jsonEditorOpened);
  };

  const toggleStencil = (): void => {
    setStencilOpened(!stencilOpened);
  };

  useEffect((): void => {
    onStencilToggle();
  }, [stencilOpened, onStencilToggle]);

  const setStencilContainerSize = useCallback((): void => {
    stencilRef.current.style.width = `${STENCIL_WIDTH}%`;
  }, []);

  useEffect(() => {
    subscriptions.add(
      eventBusService.on(SharedEvents.GRAPH_CHANGED, (json: Object) =>
        onRappidGraphChange(json)
      )
    );
    subscriptions.add(
      eventBusService.on(SharedEvents.JSON_EDITOR_CHANGED, (json: Object) =>
        onJsonEditorChange(json)
      )
    );
  }, [eventBusService, subscriptions, onRappidGraphChange, onJsonEditorChange]);

  useEffect(() => {
    setRappid(
      new RappidService(
        elementRef.current,
        paperRef.current,
        stencilRef.current,
        toolbarRef.current,
        eventBusService,
        ctx.toolbarProjects,
        ctx.currentToolbar,
        ctx.addToolbarElement,
        ctx.removeToolbarElement,
        ctx.editToolbarElement,
        ctx.setCurrentToolBar
      )
    );
  }, [eventBusService, ctx.currentToolbar, ctx.toolbarProjects]);

  useEffect(() => {
    if (!rappid) {
      return;
    }
    setStencilContainerSize();
    onStart();
  }, [rappid, onStart, setStencilContainerSize, ctx.currentToolbar]);

  useEffect(() => {
    if (!rappid) {
      return;
    }

    return () => {
      subscriptions.unsubscribe();
      rappid.destroy();
    };
  }, [rappid, subscriptions, ctx.currentToolbar]);

  return (
    <EventBusServiceContext.Provider value={eventBusService}>
      <Box
        ref={elementRef}
        direction='row-responsive'
        className='rappid-scope chatbot'
      >
        <Box ref={toolbarRef}></Box>
        <Box className='side-bar' width='100%'>
          <LeftSideBar
            proceed={props.proceed}
            show={props.show}
            changeShow={props.changeShow}
            addToolbarElement={ctx.addToolbarElement}
            sidebaroptions={dataMigrationOptions}
            title={props.window}
          >
            <Box
              className='stencil-container'
              width='100%'
              ref={stencilRef}
              style={{
                display: stencilOpened ? 'initial' : 'none',
              }}
            />
          </LeftSideBar>
          {/* <Box
            className='stencil-container'
            width='100%'
            ref={stencilRef}
            style={{
              display: stencilOpened ? 'initial' : 'none',
            }}
          /> */}
          {/* <div className="toggle-bar">
                        <div onClick={toggleStencil}
                            className={'icon toggle-stencil ' + (!stencilOpened ? 'disabled-icon' : '')}
                            data-tooltip="Toggle Element Palette"
                            data-tooltip-position-selector=".toggle-bar" />
                        <div onClick={toggleJsonEditor}
                            className={'icon toggle-editor ' + (!jsonEditorOpened ? 'disabled-icon' : '')}
                            data-tooltip="Toggle JSON Editor"
                            data-tooltip-position-selector=".toggle-bar" />
                    </div> */}
          {/* <Box  className="stencil-container" width='100%' ref={stencilRef}
                        style={{ display: stencilOpened ? 'initial' : 'none'}}
                         /> */}
        </Box>
        <Box flex className='main-container'>
          <TabBar
            currentToolbar={ctx.currentToolbar}
            showInputEle={showInputEle}
            toolbarProjects={ctx.toolbarProjects}
            removeToolbarElement={ctx.removeToolbarElement}
            editToolbarElement={ctx.editToolbarElement}
            setCurrentToolBar={ctx.setCurrentToolBar}
          />
          <Box flex ref={paperRef} className='paper-container' />
          <div style={{ display: jsonEditorOpened ? 'initial' : 'none' }}>
            <JsonEditor content={fileJSON} />
          </div>
        </Box>

        <Inspector />
      </Box>
    </EventBusServiceContext.Provider>
  );
};

export default Chatbot;
