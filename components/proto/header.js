import Head from "next/head";
import Script from "next/script";

export default function({ title, greeting, role }) {
  return (
    <Head>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
      <meta name="deScription" content={ `${ greeting } ${ role}` }/>
      <meta name="author" content="Dylan Bent"/>
      <meta property="og:title" content="Dylan Bent"/>
      <meta property="og:image" content="/img/shot.jpg"/>
      <meta property="og:site_name" content="https://dylanbent.com/"/>
      <meta property="og:deScription" content={ `${ greeting } ${ role}` }/>
      <title>{ title }</title>
      <link rel="canonical" href="https://dylanbent.com.com/"/>
      <link rel="icon" href="/img/favicon.png" type="image/png"/>
      <Script src="https://platform.twitter.com/widgets.js" charSet="utf-8" defer />
      <Script src="//www.instagram.com/embed.js" defer />
    </Head>
  )
}
