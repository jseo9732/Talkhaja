import { RecoilRoot, RecoilEnv } from 'recoil';
import type { AppProps } from 'next/app';
import Navigation from '@/components/Common/Navigation/Navigation';
import '@/styles/normalize.scss';
import '@/styles/fonts.scss';

export default function App({ Component, pageProps }: AppProps) {
  RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
  return (
    <RecoilRoot>
      <Navigation />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
