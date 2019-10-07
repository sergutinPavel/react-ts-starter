import { ActionTypes } from './general.actions';
import { IGeneralState } from './general.models';


export const initialState: IGeneralState = {
  exampleData: false,
  isSidebarExpanded: true,
};

export function reducer(state: IGeneralState = initialState, action: any) {
  switch (action.type) {
    case ActionTypes.TOGGLE_SIDEBAR:
      return { ...state, isSidebarExpanded: !state.isSidebarExpanded };
    default:
      return state;
  }
}

export const getIsSidebarExpanded = (state: IGeneralState) => state.isSidebarExpanded;
export const getExampleData = (state: IGeneralState) => state.exampleData;
