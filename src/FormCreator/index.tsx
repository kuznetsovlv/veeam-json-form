import React, {Dispatch, SetStateAction, useState} from 'react';
import clsx from 'clsx';

import Tabs from './Tabs';
import { Mode } from './types'
import './FormCreator.scss';

interface FormCreatorProps { className?: string; }

export default ({ className }: FormCreatorProps) => {
    const [mode, setMode]: [Mode, Dispatch<SetStateAction<Mode>>] = useState('config' as Mode);

    return (
        <div className={clsx('wrapper', className)}>
            <Tabs mode={mode} onSetMode={setMode} />
            <div className="main"></div>
        </div>
    );
};

