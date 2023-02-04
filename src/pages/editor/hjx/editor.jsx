import MarkdownViewer from '../../markdown_viewer/MarkdownViewer';
import MonacoEditor from '../../monaco_editor/MonacoEditor';
import './editor.css';
import { useState } from 'react';
import { Col, Row } from 'antd';
import ResponsiveAppBar from '../../navbar/ResponsiveAppBar';
import { FloatButton } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';

const Editor = () => {
  const [viewCode, setViewCode] = useState('');

  return (
    <div>
      <ResponsiveAppBar />
      <div>
        <h2 className="notes">
          Embrace your creativity and unleash your ideas on paper, the
          possibilities are endless!
        </h2>
      </div>
      <Row>
        <Col span={14} push={10}>
          <MarkdownViewer markdown={viewCode} />
        </Col>
        <Col span={10} pull={14}>
          <MonacoEditor setViewCode={setViewCode} />
        </Col>
      </Row>
      <FloatButton
        description="Submit Form"
        shape="square"
        style={{ right: 94 }}
        onClick={() => {}}
      />
    </div>
  );
};

export default Editor;
