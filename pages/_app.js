import '../faust.config';
import React from 'react';
import { useRouter } from 'next/router';
import { FaustProvider } from '@faustwp/core';
import '@faustwp/core/dist/css/toolbar.css';
import '../styles/global.scss';
import PlausibleProvider from 'next-plausible';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <PlausibleProvider domain={process.env.PUBLIC_DOMAIN}>
      <FaustProvider pageProps={pageProps}>
        <Component {...pageProps} key={router.asPath} />
      </FaustProvider>
    </PlausibleProvider>
  );
}
