import * as React from 'react';
/**
 * Wrapper for `Cell`
 *
 */
interface CellsProps {
    className?: any;
    access?: boolean;
    children?: React.ReactNode;
}
declare const Cells: {
    (props: CellsProps): JSX.Element;
    propTypes: {};
    defaultProps: {};
};
export default Cells;
