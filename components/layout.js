import Head from "next/head";
import Header from "./header";
import LoginModal from "./loginModal";
import RegisterModal from "./registerModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
const Layout = props => (
  <>
    <Head>
      {/* Google Tag Manager */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-154490978-1"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-154490978-1');`
        }}
      ></script>

      <meta charSet="utf-8" />
      <link rel="icon" href="/footer.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <title>Nosbir | sosyal paylaşım diyarı</title>

      <meta name="title" content="Nosbir | sosyal paylaşım diyarı" />
      <meta
        name="description"
        content="Nosbir gruplar üzerine kurulu kaliteyi esas almış sosyal paylaşım dünyası"
      />
      <meta
        name="keywords"
        content="nosbir,grup,sosyal medya,medya,paylaşım,ekşi,onedio,facebook,gruplar,reddit"
      />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="copyright" content="(c) 2019" />

      {/* Twitter Tags */}

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content="Nosbir | sosyal paylaşım diyarı" />

      <meta
        name="twitter:description"
        content="Gruplara katıl kaliteli sohbetin parçası ol."
      />

      <meta name="twitter:url" content="nosbir.com/ " />

      <meta
        name="twitter:image"
        content="api.nosbir.com/resimler/nosbir-icon.png"
      />

      {/* Facebook Tags */}

      <meta property="og:type" content="article" />

      <meta property="og:site_name" content="Nosbir | sosyal paylaşım diyarı" />

      <meta property="og:locale" content="tr_TR" />

      <meta property="og:title" content="Nosbir | sosyal paylaşım diyarı" />

      <meta
        property="og:description"
        content="Gruplara katıl kaliteli sohbetin parçası ol."
      />

      <meta property="og:url" content="nosbir.com" />

      <meta
        property="og:image"
        content="api.nosbir.com/resimler/nosbir-logo.png"
      />
    </Head>
    <Header />
    <div className="page-content">{props.children}</div>
    <LoginModal />
    <RegisterModal />
    <ToastContainer autoClose={5000} position={toast.POSITION.TOP_CENTER} />
  </>
);
export default Layout;
