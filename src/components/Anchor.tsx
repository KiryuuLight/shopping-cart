import { NavLink } from 'react-router-dom';

interface Props {
  navigateTo: string;
  name: string;
}

function Anchor({ navigateTo, name }: Props) {
  return (
    <NavLink
      to={navigateTo}
      className={({ isActive }) =>
        isActive
          ? 'ml-4 text-sm text-black underline decoration-[#e384c9] decoration-2 underline-offset-[6.5px]  hover:underline'
          : 'ml-4 bg-gradient-to-l from-black  to-black bg-[length:0%_2px] bg-[0%_100%] bg-no-repeat pb-px  text-sm transition-all duration-500 hover:bg-[length:100%_2px] hover:bg-[100%_100%]'
      }
    >
      {name}
    </NavLink>
  );
}

export default Anchor;
