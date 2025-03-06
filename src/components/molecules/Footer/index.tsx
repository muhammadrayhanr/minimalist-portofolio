import SocialMedia from '@/components/atoms/SocialMedia';

const Footer = () => {
  return (
    <footer className='flex justify-center mx-auto max-w-6xl sm:justify-between items-center px-5 py-2 sm:flex-row'>
      <p className='text-xs'>&copy; 2025 Muhammad Rayhan Rohadi. All rights reserved.</p>
      <SocialMedia className='hidden sm:flex' />
    </footer>
  );
};

export default Footer;
