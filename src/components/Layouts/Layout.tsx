import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import styles from './Layout.module.css';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className={styles.layout}>
      <header className='flex items-center flex-nowrap mx-auto'>
        <div className='h-[60px] text-center flex-[200px_0_0] bg-gray-100'></div>
        <nav className='h-[60px] text-center flex-[auto_1_0] bg-gray-200'></nav>
        <div className='h-[60px] text-center flex-[200px_0_0] bg-gray-300'></div>
      </header>
      <main>{children}</main>
    </div>
  );
}
