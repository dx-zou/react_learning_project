import Heading from './Heading';
import './index.less';

export default function HeadingBlock(props) {
  const renderHtml = () => {
    const { level, children } = props;
    if (children && children.length > 0) {
      const nodeValue = children[0].props.value;
      return (
        <Heading level={`h${level}`} id={nodeValue}>
          <a href={`#${nodeValue}`} className='markdown-link'>
            {children}
          </a>
        </Heading>
      );
    } else {
      return <>{children}</>;
    }
  };
  return <>{renderHtml()}</>;
}
