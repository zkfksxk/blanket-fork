import { Text } from '@mantine/core';

export const Footer = () => {
  return (
    <footer
      className='
        w-full 
        max-w-[500px] 
        h-18
        bg-[#e1e5eb]
        flex 
        items-center 
        justify-center 
        mx-auto'
    >
      <Text c='black' size='sm'>
        © {`${new Date().getFullYear()} `}
        <Text span size='sm' fw={600} c='black'>
          BlanketFork{' '}
        </Text>
        all rights reserved.
      </Text>
    </footer>
  );
};
