// @flow strict

import * as React from 'react';
import { useSelector } from 'react-redux';
import { MODALS } from 'actions/ModalActions';
import AddIconModal from 'components/AddIconModal/AddIconModal';
import EditIconModal from 'components/EditIconModal/EditIconModal';

import type { ReduxState } from 'types/Redux';

const ModalLoader = (): React.Node => {
  const { modal } = useSelector((state: ReduxState) => state.modals);

  return (
    <>
      <AddIconModal isOpen={modal === MODALS.ADD_ICON} />
      <EditIconModal isOpen={modal === MODALS.EDIT_ICON} />
    </>
  );
};

export default ModalLoader;
