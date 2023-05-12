import React from 'react';
import { Button, ConfigProvider, theme  } from 'antd';
// import './index.less';
// import TestButton from './TestButton';
import './index.css';
function Antd() {
  return (
    <ConfigProvider theme={ { token: { controlHeight: 40 }, components: { Button: { controlHeight: 50 } }, algorithm: theme.darkAlgorithm } }>
      <div>
      Antd
      {/* <Button>Button</Button> */}
      {/* <TestButton type="primary">PrimaryButton</TestButton> */}
      {/* <TestButton type="primary">PrimaryButton</TestButton> */}
    </div>
    </ConfigProvider>
  );
}

export default Antd;
