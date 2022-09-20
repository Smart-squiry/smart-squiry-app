import { NextPage } from 'next';

const Title: NextPage<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => <h2 className={`${className ? className : ''} text-center font-extrabold text-3xl mb-7`}>{children}</h2>;


export default Title