import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className=''>
      <Link href='/about'>
          <a className='hover:underline'>About</a>
        </Link>
        <Link href='/blog'>
          <a className='pl-5 hover:underline'>Contact</a>
        </Link>
    </nav>
  );
};

export default Navbar;
