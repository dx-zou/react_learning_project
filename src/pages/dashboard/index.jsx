import './index.less';
import '@/utils/test';

const list = [1, 2, 3, 4, 5, 6];

const Index = () => {
  return (
    <div className='flex-box'>
      <ul className='strip-loading'>
        {list.map(item => (
          <li key={item} style={{ '--line-index': item }} />
        ))}
      </ul>
      <div className='scale-style'>妙笔生花</div>
      <div style={{ width: '1000px' }}>
        <div className='auto-typing'>
          Do You Want To Know More About CSS Development Skill
        </div>
      </div>
      <div className='linear-gradient' />
      <h1 className='gradient-text'>Full Stack Developer</h1>
      <div className='grid-bg' />
    </div>
  );
};
export default Index;
