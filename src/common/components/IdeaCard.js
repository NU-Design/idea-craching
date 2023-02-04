import { Layout, Space, Avatar, Col, Row, Card, Image } from 'antd';
import { UserOutlined, LikeOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
const { Title } = Typography;

const { Header, Footer, Content } = Layout;

const { Meta } = Card;

const headerStyle = {
  textAlign: 'center',
  height: 64,
  width: 384,
  align: 'center',
  backgroundColor: '#FFDC73',
};
const contentStyle = {
  textAlign: 'center',
  height: 64 * 8,
  width: 384,
  backgroundColor: '#FFDC73',
};
const footerStyle = {
  textAlign: 'center',
  height: 64,
  width: 384,
  backgroundColor: '#FFDC73',
};

const data = { username: 'David' };

const IdeaCard = () => (
  <div className="card">
    <Space
      direction="vertical"
      style={{
        width: '384',
      }}
      size={[0, 48]}
    >
      <Card>
        <Header style={headerStyle}>
          <Row>
            <Col span={4}>
              <Avatar
                size={54}
                icon={<UserOutlined size="large" />}
                src="https://firebasestorage.googleapis.com/v0/b/idea-crashing.appspot.com/o/1_1.png?alt=media&token=0a8c483d-3b09-4d6b-93cd-e8a0359fd4e7"
              />
            </Col>
            <Col span={18}>
              <Title level={5}> @{data.username} shared an idea</Title>
            </Col>
          </Row>
        </Header>
        <Content style={contentStyle}>
          <Image
            height={512}
            src="https://firebasestorage.googleapis.com/v0/b/idea-crashing.appspot.com/o/1.png?alt=media&token=615ed95b-1e0d-4f84-ade5-87f94aa9ba27"
          />
        </Content>
        <Footer style={footerStyle}>
          <Row>
            <Col span={2} push={22}>
              <LikeOutlined />
            </Col>
            <Col span={22} pull={2}>
              <Meta title="Dream Scape" description="" />
            </Col>
          </Row>
        </Footer>
      </Card>
    </Space>
  </div>
);
export default IdeaCard;
