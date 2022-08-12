import React, { Component } from 'react'
import BreadCrumbs from '../BreadCrumbs'
import SiteBanner from '../SiteBanner'



export default class SiteHeader extends Component {
  constructor( props ){
    super(props);
    this.state = {
      breads: ["Shows", "People", "Networks", "Web Channels", "Articles", "Schedule", "Calendar", "Countdown", "Forums"]
    }
  }

  render() {
    return (
      <div>
        <SiteBanner />
        <BreadCrumbs breads = {this.state.breads} />
      </div>
    )
  }
}
