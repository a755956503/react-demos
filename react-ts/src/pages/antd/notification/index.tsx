import React from 'react';
import { Button, notification } from 'antd';

const NotificationPage = () => {
  const [ apis, handler ] = notification.useNotification();

  const open = () => {
    apis.open({
      message: 'Open Notification'
    });
  }
  return <div>
    <Button onClick={open}>打开</Button>
    {handler}
  </div>
}
export default NotificationPage;