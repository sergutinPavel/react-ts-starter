import './settings.style.scss';
import React, {
  FunctionComponent,
  // useState,
} from 'react';
// import {
//   // useSelector,
//   useStore,
// } from 'react-redux';
// // import { selectIsSidebarExpanded } from '../../store/root.reducer';
// import Button from '@material-ui/core/Button';




interface IOwnProps {
  readonly [key: string]: any;
}
export const SettingsPage: FunctionComponent<IOwnProps> = (props) => {
  // const state = useSelector(selectIsSidebarExpanded);
  // const dispatch = useDispatch();
  // const [clicks, setClicks] = useState(0);

  return (
    <div className={'app-layout__content'}>
      SettingsPage yo <br/>

      {/*{JSON.stringify(clicks)}*/}
      {/*<Button variant="outlined"*/}
      {/*        onClick={() => setClicks(clicks + 1)}>*/}
      {/*  Clicks: {clicks}*/}
      {/*</Button>*/}
    </div>
  );
};
