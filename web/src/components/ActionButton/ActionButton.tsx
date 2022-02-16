import React, { PropsWithChildren } from "react";

type ActionButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string; // TODO
};

const ActionButton = ({
  children,
  onClick,
  className,
}: PropsWithChildren<ActionButtonProps>): JSX.Element => (
  <button
    type="button"
    onClick={onClick}
    className={`border-2 border-purple-900 rounded bg-clip-padding bg-gray-900 tracking-wider transition-all hover:bg-purple-900 ${className}`}
  >
    {children}
  </button>
);

export default ActionButton;
