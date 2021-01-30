import React, { Component } from 'react';
export default class MyAppProjects extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="mywebsiteprojects">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>My Website Projects</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.mywebsiteprojects && resumeData.mywebsiteprojects.map((item)=>{
              return(
                <div className="columns portfolio-item.align-center">
                    <div className="item-wrap">
                    <a href={item.link}>
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}