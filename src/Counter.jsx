import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <ScrollTrigger onEnter={() => setCounterOn(true)}>
      <section className="counterContainer">
        <div>
          <h3 className="counterSubtitles">more than</h3>
          <h4 className="counterNumber">
            {counterOn && (
              <CountUp
                start={0}
                end={15000}
                duration={3}
                delay={0}
                className="counterNumber"
              />
            )}
            +<h3 className="counterSubtitles">Students</h3>
          </h4>
        </div>
        <div>
          <h3 className="counterSubtitles">more than</h3>
          <h4 className="counterNumber">
            {counterOn && (
              <CountUp
                start={0}
                end={45}
                duration={4.4}
                delay={0}
                className="counterNumber"
              />
            )}
            +<h3 className="counterSubtitles">Courses</h3>
          </h4>
        </div>
        <div>
          <h3 className="counterSubtitles">more than</h3>
          <h4 className="counterNumber">
            {counterOn && (
              <CountUp
                start={0}
                end={90}
                duration={3.8}
                delay={0}
                className="counterNumber"
              />
            )}
            %<h3 className="counterSubtitles">Completion</h3>
          </h4>
        </div>
      </section>
    </ScrollTrigger>
  );
};
