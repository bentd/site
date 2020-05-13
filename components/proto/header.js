import { Component } from "React";
import Head from "next/head";

export default function({ title, greeting, role }) {
  return (
    <Head>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
      <meta name="description" content={ `${ greeting } ${ role}` }/>
      <meta name="author" content="Dylan Bent"/>
      <meta property="og:title" content="Dylan Bent"/>
      <meta property="og:image" content="/img/shot.jpg"/>
      <meta property="og:site_name" content="https://dylanbent.com/"/>
      <meta property="og:description" content={ `${ greeting } ${ role}` }/>
      <title>{ title }</title>
      <link rel="canonical" href="https://dylanbent.com.com/"/>
      <link rel="icon" href="/img/favicon.png" type="image/png"/>
      <link href="/css/style.css" rel="stylesheet"/>
      <link href="/css/terminal.css" rel="stylesheet"/>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
      <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous"/>
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous" defer></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous" defer></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous" defer></script>
      <script src="/js/main.js" defer></script>
      <script src="https://platform.twitter.com/widgets.js" charSet="utf-8" defer></script>
      <script src="//www.instagram.com/embed.js" defer></script>
    </Head>
  )
}
