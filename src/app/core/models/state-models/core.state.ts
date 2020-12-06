import { ICoreContentState, ICoreContentStateInitialValue } from 'src/app/core/models/state-models/core-content.state';
import { ICoreSidenavState, ICoreSidenavStateInitialValue } from 'src/app/core/models/state-models/core-sidenav.state';

export interface ICoreState {
    sidenav: ICoreSidenavState;
    content: ICoreContentState;
}

export const ICoreStateInitialValue: ICoreState = {
    sidenav: ICoreSidenavStateInitialValue,
    content: ICoreContentStateInitialValue
}
