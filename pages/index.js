import { Component } from "React";
import Head from "../components/head";
import Nav from "../components/nav";

export default class extends Component {

  render() {
    return (
      <div>
        <Head title="Dylan Bent">
        </Head>
        <Nav>
        </Nav>
        <main>
          <p>Hello World</p>
        </main>
      </div>
    )
  }

}
