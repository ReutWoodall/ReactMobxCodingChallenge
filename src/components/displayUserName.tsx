import { observer } from 'mobx-react';
import React, { useContext } from 'react'
import { currentUserStore } from '../stores/stores';

const DisplayUserName = observer(() => {
  const load = currentUserStore.load;

  return (
    <div className='display-user-name'>
      <header className='DisplayUserName-header'>
        {currentUserStore.username}
      </header>
    </div>
  );
});

export default DisplayUserName;
