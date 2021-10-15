import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/custom.scss';
import '../styles/body.scss';
import '../styles/utils.scss';
import { useRouter } from 'next/dist/client/router';
import MainLayout from '../components/layout/MainLayout';
import BlogLayout from '../components/layout/BlogLayout';
import { useEffect } from 'react';

export function reportWebVitals(metric) {
  console.log(metric);
}

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null;
  }, []);

  const router = useRouter();

  if (router.pathname.startsWith('/blog')) {
    return (
      <BlogLayout>
        <Component {...pageProps} />
      </BlogLayout>
    );
  } else if (router.pathname.startsWith('/bayesarew/')) {
    return <Component {...pageProps} />;
  } else {
    return (
      <MainLayout>
        <Component {...pageProps} key={router.pathname} />
      </MainLayout>
    );
  }
}
