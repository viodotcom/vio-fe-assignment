import React from 'react';
import cn from 'classnames';

import './Select.css';

const Select = ({
  children,
  value,
  onChange,
  className,
}) => (
  <select className={cn('select', className)} value={value} onChange={onChange}>
    {children}
  </select>
);

export default Select;
