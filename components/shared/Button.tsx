import { NextPage } from 'next';

const Button: NextPage<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <button className={`text-white bg-black rounded-lg px-7 py-3 font-bold uppercase text-sm ${className ? className : ''}`}>
    {children}
  </button>
);

export default Button
