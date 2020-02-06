// @flow strict

import type { ReduxState } from 'reducers/root';

/* eslint-disable no-use-before-define */
import type { IconItemAction } from 'actions/IconItemActions';
import type { ModalAction } from 'actions/ModalActions';
import type { MessageAction } from 'actions/MessageActions';

export type Action = IconItemAction | ModalAction | MessageAction;

export type Dispatch = (action: Action | ThunkAction | PromiseAction) => Promise<void> | void;
export type ThunkAction = (dispatch: Dispatch) => Promise<void>;
export type PromiseAction = Promise<Action>;

export type { ReduxState };
