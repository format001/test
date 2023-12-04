import React, { ReactNode } from 'react';
import { Button, Tooltip, ButtonProps } from '@arco-design/web-react';

/**
 * @title J
 */
export interface JProps {
  children?: any;
  /**
   * @zh 按钮的标题
   * @defaultValue `Hello Arco`
   * @version 1.0.0
   */
  title?: ReactNode;
  /**
   * @zh 按钮的提示
   */
  btnProps?: ButtonProps;
}

const J = (props: JProps) => {
  const { children, title = 'Hello Arco', btnProps } = props;
  return (
    <div className="arco-rc-tooltip-button">
      {title ? (
        <Tooltip content={title}>
          <Button {...btnProps}>{children}</Button>
        </Tooltip>
      ) : (
        <Button {...btnProps}>{children}</Button>
      )}
    </div>
  );
};

export default J;
