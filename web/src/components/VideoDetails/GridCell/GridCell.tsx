import React, { PropsWithChildren } from "react";

type GridCellProps = {
  borderRight?: boolean;
  borderBottom?: boolean;
};

const GridCell = ({
  borderRight = false,
  borderBottom = false,
  children,
}: PropsWithChildren<GridCellProps>): JSX.Element => (
  <span
    suppressHydrationWarning // Because timestamp may differ between server and client locale timezone
    className={`bg-gray-800 w-full flex justify-center items-center text-center p-1 border-transparent bg-clip-padding 
      ${borderRight && "border-r-2"} 
      ${borderBottom && "border-b-2"}
    `}
  >
    {children}
  </span>
);

GridCell.defaultProps = {
  borderRight: false,
  borderBottom: false,
};

export default GridCell;
