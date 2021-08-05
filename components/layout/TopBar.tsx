import React from 'react';
import SwitchTheme from '../SwitchTheme';

const TopBar = () => {

    return (
        <div id="nav" className="top-0 z-50 w-full border-b transition duration-200 ease-in-out border-transparent bg-transparent text-primary-content">
            <div className="mx-auto space-x-1 navbar max-w-none">
                <SwitchTheme theme={'light'}/>
            </div> 
        </div>
    )
}

export default TopBar;