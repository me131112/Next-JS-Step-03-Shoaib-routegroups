'use client';
import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })


// 'use client' marks this page as a Client Component
// https://beta.nextjs.org/docs/rendering/server-and-client-components

import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  return (
    <div>
      30 Wellington Square, Chelsea.
      <br /><br />
      <button type="button" onClick={() => router.push('./name')}>
        Get Name
      </button>
      <button type="button" onClick={() => router.push('./abbuname')}>
        Get Abbu Name
      </button>
      <button type="button" onClick={() => router.push('./')}>
        Dashboard
      </button>
    </div>
  );
}