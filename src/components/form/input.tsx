import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from '../../utils/classnames';

/**
 * WeUI Input wrapper for `input`
 *
 */
interface InputProps {
  defaultValue?: string,
  className?: any,
  children?: React.ReactNode
}
const Input = (props: InputProps) => {
    const { className, ...others } = props;
    const cls = classNames({
        'weui-input': true,
        [className]: className
    });

    return (
        <div>
            <input className={cls} {...others}/>
            <span className="weui-icon-checked"></span>
        </div>
    );
};

Input.propTypes = {
    defaultValue: PropTypes.string
};

Input.defaultProps = {
    defaultValue: undefined as InputProps['defaultValue']
};

export default Input;