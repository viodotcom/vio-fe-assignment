import React from 'react';
import cn from 'classnames';

import './Button.css';

const Button = ({
  children,
  disabled,
  icon,
  onClick,
  fullwidth,
  contained,
  className,
  transparent,
}) => (
  <button
    className={cn(
      'button',
      { button_contained: contained, button_fullwidth: fullwidth, button_transparent: transparent }, className,
    )}
    type="button"
    disabled={disabled}
    onClick={onClick}
  >
    <span className="button_content">
      {icon && <span className={cn('button_icon', { button_icon_margin: children })}>{icon}</span>}
      {children}
    </span>
  </button>
);

export default Button;
