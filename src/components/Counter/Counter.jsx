import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)}>
      <section className="counterContainer">
        <div>
          <p className="smallSubtitles"  style={{color: 'white'}}>more than</p>
          <h3 className="counterNumber">
            {counterOn && (
              <CountUp
                start={0}
                end={15000}
                duration={3}
                delay={0}
                className="counterNumber"
              />
            )}
            +<p className="smallSubtitles" style={{color: 'white'}}>Students</p>
          </h3>
        </div>
        <div>
          <p className="smallSubtitles"  style={{color: 'white'}}>more than</p>
          <h3 className="counterNumber">
            {counterOn && (
              <CountUp
                start={0}
                end={45}
                duration={4.4}
                delay={0}
                className="counterNumber"
              />
            )}
            +<p className="smallSubtitles"  style={{color: 'white'}}>Courses</p>
          </h3>
        </div>
        <div>
          <p className="smallSubtitles"  style={{color: 'white'}}>more than</p>
          <h3 className="counterNumber">
            {counterOn && (
              <CountUp
                start={0}
                end={90}
                duration={3.8}
                delay={0}
                className="counterNumber"
              />
            )}
            %<p className="smallSubtitles"  style={{color: 'white'}}>Completion</p>
          </h3>
        </div>
      </section>
    </ScrollTrigger>
  );
};

export default Counter;
