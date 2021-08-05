import { string } from 'prop-types';
import React from 'react';

interface Props {
    theme: string;
}

const SwitchTheme: React.FC<Props> = ({theme = 'light'}) => {

    return (
        <div title="Change Theme" className="dropdown dropdonw-end">
            <span>Change Theme</span>
        </div>
    )
}

export default SwitchTheme;