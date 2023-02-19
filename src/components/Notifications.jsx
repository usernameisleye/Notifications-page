import { useEffect } from "react";

const Notifications = ({notifications, setChecked}) => {

    useEffect(() => {
        notifications.forEach(notification => {
            if(notification.id < 4){
                notification.dataChecked = 'bg-Very-light-grayish-blue';
                setChecked(notification.dataChecked);
            }
            else if(notification.id > 4){
            }
        });
    }, [notifications])

    const removeBg = (id) => {
        notifications.forEach(notification => {
            if(id === notification.id ){
                notification.dot = "";
                notification.dataChecked = "";
                setChecked(notification.dataChecked);
            }
        })
    }
    // const checkContent = (e) => {
    //     notifications.forEach(notification => {
    //         console.log('hi');
    //         if(notification.message === ''){
    //             console.log(notification.name, 'hi');
    //             e.parentElement.remove();
    //         }
    //     });
    // }


    return ( 
        <>
            {notifications.map(notification => {
            const {id, image, name, action, toWhere, time, picture, message, dataChecked, dot} = notification;

                return(
                    <div key={id} className= "notification mt-2">
                        <div className={`flex items-center gap-4 p-2 ${dataChecked} rounded-md cursor-pointer`} onClick={() => {removeBg(id)}}>
                            <img className="w-12 self-start" src={image} alt="" />

                            <div className="flex flex-col w-full">
                                <div className="flex justify-between">
                                    <div className="">
                                        <p className="text-sm"> <span className="font-bold cursor-pointer hover:text-Blue">{name}</span> <span className="opacity-70 text-md">{action}</span> <span className="font-bold cursor-pointer hover:text-Blue">{toWhere}</span> <i className={`${dot} text-Red ml-1 w-1 text-custom align-middle`}></i></p>

                                        <p className="opacity-70 text-sm">{time}</p>
                                    </div>

                                    <img className="w-12 ml-auto" src={picture} alt="" />
                                </div>

                                <div className="">
                                    <p className="opacity-70 text-sm">{message}</p>
                                </div>
                            </div>      
                        </div>
                    </div>
            )})}
        </>
     );
     
    }
    
export default Notifications;

