import { Link } from 'react-router-dom';

interface Props {
  content: string;
  bgColor: string;
}

function Button({ content, bgColor }: Props) {
  return (
    <Link
      to={`?category=${content}`}
      className="rounded-md  border border-black  px-1 py-2.5 capitalize decoration-black decoration-1 shadow-neo transition-all duration-500 ease-in-out hover:underline"
      style={{ backgroundColor: bgColor }}
    >
      {content.replace('-', ' ')}
    </Link>
  );
}

export default Button;
