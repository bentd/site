import { Component } from "react";
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Link from 'next/link'

export default class extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-sm fixed-top navbar-light bg-light p-0">
        <div className="container-fluid p-0">
          <div className="row align-items-center w-100 mx-auto">
            <div className="col-12 col-sm-4 border-style bg-tan pl-3 py-3">
              <Link href="#"><a className="navbar-brand float-none pl-3">{ this.props.name }</a></Link>
              <button className="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="col-12 col-sm-8 border-style mx-auto" id="nav-col-2">
              <div className="collapse navbar-collapse py-3 pr-3" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link href="#"><a className="nav-link">Home<span className="sr-only">(current)</span></a></Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/portfolio"><a className="nav-link">Portfolio</a></Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/blog"><a className="nav-link">Blog</a></Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }

}
