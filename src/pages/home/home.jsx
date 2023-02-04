import React, { Component } from 'react';
import ResponsiveAppBar from '../navbar/ResponsiveAppBar';
import IdeaCard from '../../common/components/IdeaCard';

import { Layout, Space } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
  textAlign: 'center',
  height: 64,
  paddingInline: 50,
  backgroundColor: '#fffff',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  backgroundColor: '#fffff',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  backgroundColor: '#fffff',
};
const footerStyle = {
  textAlign: 'center',

  backgroundColor: '#fffff',
};
const Home = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 48]}
  >
    <ResponsiveAppBar />
    <Layout>
      <Header style={headerStyle}></Header>
      <Content style={contentStyle}>
        <IdeaCard></IdeaCard>
      </Content>
      <Content style={contentStyle}>
        <IdeaCard></IdeaCard>
      </Content>

      <Content style={contentStyle}>
        <IdeaCard></IdeaCard>
      </Content>
      <Footer style={footerStyle}></Footer>
    </Layout>
  </Space>
);
export default Home;
