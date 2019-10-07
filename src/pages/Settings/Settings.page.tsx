import './settings.style.scss';
import React, {
  FC,
  useState,
} from 'react';
import {
  useSelector,
  useDispatch,
} from 'react-redux';
import { selectIsSidebarExpanded } from '../../store/root.reducer';
import { ToggleSidebarAction } from '../../store/general/general.actions';
import Button from '@material-ui/core/Button';


interface IProps {
  readonly [key: string]: any;
}
export const SettingsPage: FC<IProps> = (props: any) => {
  const [clicks, setClicks] = useState(0);
  const isSidebarExpanded = useSelector(selectIsSidebarExpanded);
  const dispatch = useDispatch()

  return (
    <div className={'app-layout__content styles-page'}>
      SettingsPage yo

      <Button variant="outlined"
              onClick={() => setClicks(clicks + 1)}>
        Clicks: {clicks}
      </Button>

      <hr/>
      Is sidebar expanded: {JSON.stringify(isSidebarExpanded)}
      <Button variant="outlined"
              onClick={() => dispatch(ToggleSidebarAction())}>
        Toggle sidebar
      </Button>
    </div>
  );
};
