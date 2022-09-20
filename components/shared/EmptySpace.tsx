import { NextPage } from 'next';

const EmptySpace: NextPage<{ className?: string }> = ({ className }) => (
  <div className={`h-20 w-full bg-primary my-10 ${className ? className : ''}`}/>
);
export default EmptySpace;
