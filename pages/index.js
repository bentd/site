import { Component } from "React";
import Head from "../components/head";
import Nav from "../components/nav";
import Terminal from "../components/terminal";
import Info from "../components/info";

export default class extends Component {

  render() {
    return (
      <div>
        <Head title="Dylan Bent"></Head>
        <Nav></Nav>
        <Terminal></Terminal>
        <Info></Info>
      </div>
    )
  }

}
