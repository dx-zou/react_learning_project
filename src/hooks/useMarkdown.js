import { useEffect, useState } from 'react';

/**
 * 引入md文件
 * @param {md} source
 * @returns
 */
export default function useMarkdown(source) {
  const [mark, setMark] = useState('');
  useEffect(() => {
    fetch(source)
      .then(res => res.text())
      .then(value => {
        setMark(value);
      });
  }, [source]);
  return mark;
}
