import { Component } from "React";
import Head from "next/head";

export default class extends Component {

  render() {
    return (
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="description" content="Hi, I'm Dylan! Software developer and future engineer."/>
        <meta name="author" content="Dylan Bent"/>
        <meta property="og:title" content="Dylan Bent"/>
        <meta property="og:image" content="/img/shot.jpg"/>
        <meta property="og:site_name" content="https://dylanbent.com/"/>
        <meta property="og:description" content="Hi, I'm Dylan! Software developer and future engineer."/>
        <title>{ this.props.title }</title>
        <link rel="canonical" href="https://dylanbent.com.com/"/>
        <link rel="icon" href="/img/favicon.png" type="image/png"/>
        <link href="/css/style.css" rel="stylesheet"/>
        <link href="/css/terminal.css" rel="stylesheet"/>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
        <script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous" defer></script>
        <script src="https://kit.fontawesome.com/b26e348263.js" defer></script>
        <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.9" defer></script>
        <script src="/js/terminal.js" defer></script>
        <script src="/js/main.js" defer></script>
      </Head>
    )
  }

}

// TODO: remove comment since import bootstrap via npm

//         <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous" defer></script>
