import {useState} from 'react';
import Headers from './components/Headers';
import Notifications from './components/Notifications';
import allData from './Data'

function App() {
  const [notifications, setNotifications] = useState(allData);
  const [checked, setChecked] = useState(notifications.dataChecked);

  return (
    <div className="App font-Plus-Jakarata bg-Very-light-grayish-blue flex justify-center items-center">
      <div className="main bg-White h-fit w-4/6 py-4 px-10 rounded-md my-8">
        <Headers setChecked={setChecked} notifications={notifications}/>
        <Notifications notifications={notifications} setChecked={setChecked} checked={checked}/>
      </div>
    </div>
  );
}

export default App;
