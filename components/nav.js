import { Component } from "react";
import Link from 'next/link'

export default class extends Component {

  render() {
    return (
      <nav class="navbar navbar-expand-sm fixed-top navbar-light bg-light p-0">
        <div class="container-fluid p-0">
          <div class="row align-items-center w-100 mx-auto">
            <div class="col-12 col-sm-4 border-style bg-tan pl-3 py-3">
              <Link class="navbar-brand float-none pl-3" href="#">Dylan Bent</Link>
              <button class="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
            <div class="col-12 col-sm-8 border-style mx-auto" id="nav-col-2">
              <div class="collapse navbar-collapse py-3 pr-3" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item active">
                    <Link href="#"><a class="nav-link">Home<span class="sr-only">(current)</span></a></Link>
                  </li>
                  <li class="nav-item">
                    <Link href="/portfolio"><a class="nav-link">Portfolio</a></Link>
                  </li>
                  <li class="nav-item">
                    <Link href="/blog"><a class="nav-link">Blog</a></Link>
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
