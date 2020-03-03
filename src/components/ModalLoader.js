// @flow strict

import * as React from 'react';
import { useSelector } from 'react-redux';
import { MODALS } from 'actions/ModalActions';
import AddWebsiteModal from 'components/AddWebsiteModal/AddWebsiteModal';
import EditWebsiteModal from 'components/EditWebsiteModal/EditWebsiteModal';

import type { ReduxState } from 'types/Redux';

const ModalLoader = (): React.Node => {
  const { modal } = useSelector((state: ReduxState) => state.modals);

  return (
    <>
      <AddWebsiteModal isOpen={modal === MODALS.ADD_ICON} />
      <EditWebsiteModal isOpen={modal === MODALS.EDIT_ICON} />
    </>
  );
};

export default ModalLoader;
