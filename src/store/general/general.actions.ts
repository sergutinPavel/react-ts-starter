import { action } from 'typesafe-actions';


export enum ActionTypes {
  TOGGLE_SIDEBAR = '[general] TOGGLE_SIDEBAR',
}

export const ToggleSidebarAction = (payload?: boolean) => {
  return action(ActionTypes.TOGGLE_SIDEBAR, payload);
};
