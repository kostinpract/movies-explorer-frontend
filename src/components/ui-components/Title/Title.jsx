import './Title.css'

function Title({ content, extraClass }) {
  return <h1 className={`title ${extraClass}`}>{content}</h1>;
}

export default Title;
