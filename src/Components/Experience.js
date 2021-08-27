import React from 'react';
import { Chrono } from "react-chrono";

function Experience(props) {
  const items = [
    {
      title: "2019",
      cardTitle: "Deepconverse",
      cardDetailedText: <ul  className='experience-list'>
        <li>Developed an app in Zendesk to assist user to solve tickets in a minimal time.</li>
        <li>Rebased the Deflection and Search widgets in React.</li>
        <li>Developed a chat interface, that can be used for a bot chat application.</li>
        <li>Developed an app where we integrated the chat bot chat interface.</li>
        <li>Developed a dashboard for internal use of the user company.</li>
      </ul>
    },
    {
      title: "2017",
      cardTitle: "Deepcompute Pvt. Ltd.",
      cardDetailedText: <ul className='experience-list'>
        <li>Worked on a range of projects, designed appealing websites and interacted on a daily basis with back-end developers.</li>
        <li>Developed and maintained the frontend functionality of website.</li>
        <li>Created Google Chrome extensions (eg. to pick up the current URL of the page and submit a crawling job to servers).</li>
        <li>I have experience in handling small teams and delivering requirements as and when required.</li>
        <li>Implemented data visualizations using D3.js, Plotly, Google charts, VX, RECHARTS, 3DMOL & Echarts.</li>
      </ul>
    },
    {
      title: "2013",
      cardTitle: "Bachelor Of Technology",
      cardSubtitle:"Techno India College of Technology",
      cardDetailedText: "CGPA-8.09",
    },
    {
      title: "2011",
      cardTitle: "Higher Secondary",
      cardSubtitle:"D.A.V Public School",
    }
  ];

  return (
    <section id='experience' className="container grid section">
      <div className="header-container pos-rel">
        <h2 className="marker marker-center">Experience</h2>
      </div>
      <div className='timeline'>
        <Chrono items={items}
                mode="VERTICAL_ALTERNATING"
                scrollable={{ scrollbar: false }}
                useReadMore={false}
                cardHeight='max-content'
                hideControls/>
      </div>
    </section>
  );
}

export default Experience;
