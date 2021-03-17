import CommonMarkdown from '@/components/CommonMarkdown';
import useMarkdown from '@/hooks/useMarkdown';
import { Card, Row, Col } from 'antd';
import md from './demo.md';

export default function Index() {
  const mark = useMarkdown(md);

  return (
    <Row gutter={20}>
      <Col span={12}>
        <Card>
          <CommonMarkdown source={mark} />
        </Card>
      </Col>
    </Row>
  );
}
