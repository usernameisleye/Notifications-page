import { useEffect } from "react";

const Notifications = ({notifications, setChecked}) => {

    useEffect(() => {
        notifications.forEach(notification => {
            if(notification.id < 4){
                notification.dataChecked = 'bg-Very-light-grayish-blue';
                setChecked(notification.dataChecked);
            }
        });
    }, [notifications])

    const removeBg = (id) => {
        notifications.forEach(notification => {
            if(id === notification.id){
                notification.dot = "";
                notification.dataChecked = "";
                setChecked(notification.dataChecked);
            }
        })
    }

    return ( 
        <>
            {notifications.map(notification => {
            const {id, image, name, action, toWhere, time, picture, message, dataChecked, dot} = notification;

                return(
                    <div key={id} className= "notification mt-2">
                        <div className={`flex items-center gap-4 p-2 ${dataChecked} rounded-md cursor-pointer`} onClick={() => {removeBg(id)}}>
                            <img className="w-12 self-start" src={image} alt="" />

                            <div className="flex flex-col w-full">
                                <div className="flex justify-between items-center">
                                    <div className="">
                                        <p className="text-sm"> <span className="font-bold cursor-pointer hover:text-Blue">{name}</span> <span className="opacity-70 text-md ml-1">{action}</span>  

                                        {notification.id <= 4 ? <span className="font-bold cursor-pointer hover:text-Blue ml-1">{toWhere}</span> : <span className="font-bold cursor-pointer ml-1 opacity-70">{toWhere}</span>} 

                                         <i className={`${dot} text-Red ml-1 w-1 text-custom align-middle`}></i></p>

                                        <p className="opacity-70 text-sm">{time}</p>
                                    </div>

                                    <img className="w-12 sm:ml-auto ml-2 hover:outline hover:outline-Light-grayish-blue-2 hover:outline-4 transition-all rounded-md" src={picture} alt="" />
                                </div>

                                {message ?(
                                    <div className="border-solid border-Light-grayish-blue-2 border rounded-md p-4 my-2 hover:bg-Very-light-grayish-blue">
                                        <p className="opacity-70 text-sm">{message}</p>
                                    </div>) : ( <div className=""></div> ) }
                            </div>      
                        </div>
                    </div>
            )})}
        </>
     );
     
    }
export default Notifications;

