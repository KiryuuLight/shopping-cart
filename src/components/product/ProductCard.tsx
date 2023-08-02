import { Link } from 'react-router-dom';

const shortTitle = (title: string) => `${title.slice(0, 11)}`;

interface Props {
  id: number;
  title: string;
  price: number;
  image: string;
}

function ProductCard({ id, title, price, image }: Props) {
  return (
    <div className="hover:shadow-[5px 5px #000000] w-72 rounded-md border-2 border-black shadow-neoProduct hover:-translate-x-1 hover:-translate-y-1 lg:w-56">
      <p className="rounded-t-md border-b-2 border-black bg-[#FFE927] p-2.5 text-center uppercase">
        {shortTitle(title)} / $ {price}
      </p>

      <Link to={id.toString()}>
        <div className="h-64">
          <img
            src={image}
            alt=""
            srcSet=""
            className="object-fit h-full w-full p-5"
          />
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
