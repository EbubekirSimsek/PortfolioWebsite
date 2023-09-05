import React from 'react';
import './roadmap.css';


const Roadmap = () => {
    return (
    <section id="roadmap">
  <h2>Roadmap</h2>
  <ul class="timeline">
    <li class="event">
      <div class="date">Year 1</div>
      <div class="description">
        <h3>Education or Experience Title 1</h3>
        <p>Details about your education or experience in year 1.</p>
      </div>
    </li>
    <li class="event">
      <div class="date">Year 2</div>
      <div class="description">
        <h3>Education or Experience Title 2</h3>
        <p>Details about your education or experience in year 2.</p>
      </div>
    </li>
  </ul>
</section>
    );
}

export default Roadmap;
