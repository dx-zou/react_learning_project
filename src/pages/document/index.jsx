import CommonMarkdown from '@/components/CommonMarkdown';
import useMarkdown from '@/hooks/useMarkdown';
import md from './demo.md';

export default function Index() {
  const mark = useMarkdown(md);

  return (
    <div>
      <CommonMarkdown source={mark} />
    </div>
  );
}
