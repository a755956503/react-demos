import { Typography } from "antd";
import React from "react";

const Text = Typography.Text;

export default function() {
  return <div style={{ marginLeft: '300px', width: '100px' }}>
    <Text ellipsis={{ tooltip: '这是一段非常长的非常长的非常长的非常长的文字' }}>这是一段非常长的非常长的非常长的非常长的文字</Text>
    <Text ellipsis={{ tooltip: '这是一段非常长的非常长的非常长的非常长的文字' }}>这是</Text>
  </div>
}