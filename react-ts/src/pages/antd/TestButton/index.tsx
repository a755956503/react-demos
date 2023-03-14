import React from 'react';
import { Button, ButtonProps } from 'antd';
import useStyle from './style';
import { ConfigContext } from 'antd/es/config-provider';
export * from 'antd/es/button';
const TestButton = React.forwardRef<HTMLButtonElement>((props: ButtonProps, ref) => {
  const { getPrefixCls } = React.useContext(ConfigContext);
  const prefixCls = getPrefixCls('btn', props.prefix);
  const [warpSSR, hashId] = useStyle(prefixCls);
  return warpSSR(<Button {...props} ref={ref}>{props.children}</Button>)
});
export default TestButton;
