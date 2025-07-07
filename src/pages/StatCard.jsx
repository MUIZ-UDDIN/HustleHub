import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const StatCard = ({ stat, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref}
      className="text-center"
      data-aos="fade-up"
      data-aos-mirror="true"
      data-aos-duration="1000"
      data-aos-delay={index * 100}
    >
      <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <i className={`fas ${stat.icon} text-2xl text-indigo-300`}></i>
      </div>
      <h3 className="text-4xl font-bold mb-2">
        {stat.suffix || ""}
        <CountUp
          start={inView ? 0 : undefined}
          end={inView ? stat.number : 0}
          duration={2}
          redraw={true}
        />
        {stat.postfix || ""}
      </h3>
      <p className="text-indigo-200">{stat.label}</p>
    </div>
  );
};

export default StatCard;