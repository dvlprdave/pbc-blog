import { useEffect } from 'react';
// import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import Prism from 'prismjs';

export default function Layout({ preview, children }) {
  useEffect(() => {
    Prism.highlightAll();
  }, [children]);

  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
