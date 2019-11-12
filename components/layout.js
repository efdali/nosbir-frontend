import Head from 'next/head';
import Nav from './nav';
const Layout=props=>(
    <>
        <Head>
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

          <meta
            property="og:url"
            content="nosbir.com"
          />

          <meta
            property="og:image"
            content="api.nosbir.com/resimler/nosbir-logo.png"
          />
        </Head>
        <Nav/>
        {props.children}

    </>
)

export default Layout;