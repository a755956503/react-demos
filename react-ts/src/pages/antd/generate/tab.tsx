import { Tabs } from "antd";
import React from "react";


export default function() {
  return <div style={{ marginLeft: '300px', width: '100px' }}>
    <Tabs>
      <Tabs.TabPane tab="tab1" key={'1'}>Tab1</Tabs.TabPane>
      <Tabs.TabPane tab="tab2" key={'2'}>Tab2</Tabs.TabPane>
    </Tabs>
  </div>
}