import { observer } from "mobx-react";
import { currentUserStore } from '../stores/stores';

const EditUserName = observer(() => {
   
  function apiCall() {
    fetch('https://randomuser.me/api')
      .then(response => response.json())
      .then((data) => {
        const [fakeUser] = data.results;
        currentUserStore.setName(fakeUser.name.first);
        currentUserStore.setAge(fakeUser.registered.age);
        currentUserStore.save();
      });
}

function clearUserData() {
  window.localStorage.removeItem("CurrentUserStore");
  currentUserStore.setAge(null);
  currentUserStore.setName(null);
}

  return (
    <div className='display-user-name'>
      <header className='DisplayUserName-header'>
        {currentUserStore.name}
      </header>
      <button onClick={() => clearUserData()}>clear user data</button>
      <button onClick={() => apiCall()}>call api</button>
    </div>
  );
});

export default EditUserName;