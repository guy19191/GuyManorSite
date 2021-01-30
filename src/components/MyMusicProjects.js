import React, { Component } from 'react';
export default class MyAppProjects extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="mymusicprojects">
      <div className="row">
        <div className="twelve columns collapsed.text-center">
          <h1>My Music</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            <iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1192523818%3Fsecret_token%3Ds-sm5OVu4hxtq&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><a href="https://soundcloud.com/guymanor" title="Guy Manor" target="_blank" >Guy Manor</a> · <a href="https://soundcloud.com/guymanor/sets/my-signed-record-label-edm" title="My Signed Record Label EDM Music" target="_blank" >My Signed Record Label EDM Music</a>        
          </div>
        </div>
      </div>
  </section>
        );
  }
}