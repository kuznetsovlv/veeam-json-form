import React from 'react';
import clsx from 'clsx';

import type { BUTTON } from '../types';
import './Button.scss';

export default ({ disabled = false, text, type = 'button' }: BUTTON) => (
  <input
    className={clsx('button', `button__${type}`)}
    disabled={disabled}
    type={type}
    value={text}
  />
);
