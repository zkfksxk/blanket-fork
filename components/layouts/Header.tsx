import Link from 'next/link';
import { IoMdHome } from 'react-icons/io';

interface HeaderProps {
  leftComponent?: React.ReactNode;
  className?: string;
}

export const Header = ({ leftComponent, className }: HeaderProps) => {
  return (
    <header
      className={`
        w-full 
        max-w-[500px] 
        h-12
        flex 
        items-center 
        ${leftComponent ? 'justify-between' : 'justify-center'}
        mx-auto
        bg-black
        gap-3
        z-50
        ${className}
        `}
    >
      {leftComponent}
      <Link href='/'>
        <IoMdHome color='white' size={28} />
      </Link>
    </header>
  );
};
