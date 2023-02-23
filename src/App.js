import {useState} from 'react';
import Headers from './components/Headers';
import Notifications from './components/Notifications';
import allData from './Data'

function App() {
  const [notifications, setNotifications] = useState(allData);
  const [checked, setChecked] = useState("");

  return (
    <div className="App font-Plus-Jakarata bg-Very-light-grayish-blue flex justify-center items-center">
      <div className="main bg-White h-fit sm:w-4/6 w-full py-4 sm:px-10 px-4 rounded-md sm:my-8 my-0">
        <Headers setChecked={setChecked} notifications={notifications} />
        <Notifications notifications={notifications} setChecked={setChecked} />
      </div>
    </div>
  );
}

export default App;
