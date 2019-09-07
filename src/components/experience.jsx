import React, { Component } from 'react'

export default class Experience extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-work" data-section="experience">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <h2 className="colorlib-heading">Experience</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-device-desktop" />
                </span>
                <div className="desc">
                    <h3>Frontend/Web Development </h3>
                    <p>I have experience building frontend using JavaScript,React,HTML,CSS</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Backend</h3>
                    <p>Mostly with JavaScript and JAVA REST-APIs</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Analysis</h3>
                    <p>Before programming I worked as an analyst for the public sector in a small consulting company</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
