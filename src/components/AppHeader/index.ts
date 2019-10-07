import { connect } from 'react-redux';
import AppHeaderComponent from './AppHeader.component';
import { compose } from 'recompose';
import {
  Dispatch,
} from 'redux';
import {
  IApplicationState,
  selectIsSidebarExpanded,
} from '../../store/root.reducer';
import {
  ToggleSidebarAction,
} from '../../store/general/general.actions';


interface IConnectedState {
  readonly isSidebarExpanded: boolean;
}
interface IConnectedDispatch {
  readonly toggleVideo: any;
}

const mapStateToProps = (state: IApplicationState) => ({
  isSidebarExpanded: selectIsSidebarExpanded(state),
});
const mapDispatchToProps = (dispath: Dispatch) => ({
  toggleSidebarAction: (payload: any) => dispath(ToggleSidebarAction(payload)),
});

export interface IHeaderProps extends IConnectedState, IConnectedDispatch {
  readonly [key: string]: any;
}
export interface IHeaderState {
  readonly [key: string]: any;
}

const AppHeaderHOC = compose<IHeaderProps, any>(
  connect(mapStateToProps, mapDispatchToProps),
  // withStyles(styles, 'some style'),
)(AppHeaderComponent);
export { AppHeaderHOC as AppHeader };
