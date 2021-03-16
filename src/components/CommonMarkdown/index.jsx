import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import HeadingBlock from './HeadingBlock';

export default function Index(props) {
  const { source } = props;
  const renderers = {
    code: ({ language, value }) => {
      return (
        <SyntaxHighlighter style={dark} language={language} children={value} />
      );
    },
    heading: HeadingBlock,
  };

  return (
    <ReactMarkdown renderers={renderers} plugins={[gfm]} children={source} />
  );
}
