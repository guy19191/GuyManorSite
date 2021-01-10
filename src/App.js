import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import MyWebsiteProjects from './components/MyWebsiteProjects';
import MyAutomationProjects from './components/MyWebsiteProjects';
import MyAppProjects from './components/MyWebsiteProjects';
import MyMusic from './components/MyWebsiteProjects';
import Testimonials from  './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <MyWebsiteProjects resumeData={resumeData}/>
        <MyAutomationProjects resumeData={resumeData}/>
        <MyAppProjects resumeData={resumeData}/>
        <MyMusic resumeData={resumeData}/>
        <Resume resumeData={resumeData}/>
        <Testimonials resumeData={resumeData}/>
        <ContactUs resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;