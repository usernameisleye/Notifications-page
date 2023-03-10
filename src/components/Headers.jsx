import { useState } from "react";

const Headers = ({setChecked, notifications}) => {
    let countNotif = 7;

    const checkCount = (e) => {
        notifications.forEach(notification => {
            if(!notification.dataChecked){
                countNotif--;
            }else{return}
        })
    }
    checkCount();

    const resetAll = () => {
        notifications.forEach(notification => {
            notification.dot = "";
            notification.dataChecked = "";
            setChecked(notification.dataChecked);
        });
    }

    return ( 
        <div className="headers flex justify-between items-center">
            <div className="notifications-count flex items-center gap-2">
                <h2 className="font-bold sm:text-2xl text-xl">Notifications</h2>
                <span className="bg-Blue text-White sm:text-xl font-bold px-3 rounded-md">{countNotif}</span>
            </div>

            <span className="text-sm opacity-60 hover:text-Blue hover:cursor-pointer hover:opacity-100" onClick={resetAll}>Mark all as read</span>
        </div>
     );
}

export default Headers;