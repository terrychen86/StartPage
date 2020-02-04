// @flow

import * as React from 'react';
import AddIconModal from 'components/AddIconModal/AddIconModal';
import EditIconModal from 'components/EditIconModal/EditIconModal';

const ModalLoader = (): React.Node => (
  <>
    <AddIconModal />
    <EditIconModal />
  </>
);

export default ModalLoader;
