import { useEffect, useRef, useState } from "react";
import Png1 from "../assets/1.jpg";
import Png2 from "../assets/2.jpeg";
import Png4 from "../assets/4.jpg";
import Png3 from "../assets/3.jpg";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const PROVIDERS = [
  {
    img: Png1,
    name: "Areez Ul Amin",
    profession: "Accountant/Bookkeeper",
    link: "#",
    description: "Experienced in managing financial records and tax preparation."
  },
  {
    img: Png3,
    name: "Rizwan Karim",
    profession: "Accountant/Bookkeeper",
    link: "#",
    description: "Specialist in business accounting and financial planning."
  },
  {
    img: Png2,
    name: "Muiz Ud Din",
    profession: "Web Dev/ Data Scientist & Automation",
    link: "#",
    description: "Building robust web applications and automating data processes."
  },
  {
    img: Png4,
    name: "Mueez Ud Din",
    profession: "Data Scientist and AI",
    link: "#",
    description: "Turning data into actionable insights for your business."
  },
  // ...add more as needed
];

const RollingGallery = ({
  autoplay = false,
  pauseOnHover = false,
  providers = [],
  speed = 40, // seconds for a full loop
}) => {
  const items = providers.length > 0 ? providers : PROVIDERS;
  const controls = useAnimation();
  const sliderRef = useRef(null);
  const position = useRef(0);

  // Duplicate for seamless scroll
  const allItems = [...items, ...items];

  // Helper to get px width for animation
  const getWidth = () => {
    if (!sliderRef.current) return 0;
    return sliderRef.current.scrollWidth / 2;
  };

  // Animate from current position, reset instantly for seamless loop
  const animateSlider = (from = position.current) => {
    const width = getWidth();
    controls.start({
      x: [from, from - width],
      transition: {
        x: {
          duration: speed,
          ease: "linear",
        },
      },
    }).then(() => {
      position.current = 0;
      controls.set({ x: 0 });
      animateSlider(0);
    });
  };

  useEffect(() => {
    if (autoplay) {
      animateSlider(position.current);
    } else {
      controls.stop();
    }
    // eslint-disable-next-line
  }, [autoplay, speed, items.length]);

  // Pause/resume logic
  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) controls.stop();
  };
  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      animateSlider(position.current);
    }
  };

  // Track position on update
  const handleUpdate = (latest) => {
    if (typeof latest.x === "number") {
      position.current = latest.x;
    }
  };

  // Track which card is hovered for animation
  const [hovered, setHovered] = useState(null);
  const [tapped, setTapped] = useState(null);

  const handleCardClick = (i) => {
    // Toggle tapped state
    setTapped(tapped === i ? null : i);
  };

  return (
    <div className="relative w-full h-[260px] overflow-hidden">
      <motion.div
        ref={sliderRef}
        className="flex h-full"
        drag="x"
        dragConstraints={{ left: -getWidth(), right: 0 }}
        animate={controls}
        onUpdate={handleUpdate}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: "grab" }}
      >
        {allItems.map((provider, i) => (
          <motion.div
            key={i}
            className="relative flex items-center justify-center px-4"
            style={{ minWidth: 320, maxWidth: 400, height: 260 }}
            whileHover={{ scale: 1.08, zIndex: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
            onHoverStart={() => setHovered(i)}
            onHoverEnd={() => setHovered(null)}
            onClick={() => handleCardClick(i)}
          >
            <img
              src={provider.img}
              alt={provider.name}
              className="h-[240px] w-[320px] object-cover object-top rounded-xl border-2 border-white shadow-md"
              draggable={false}
            />
            <AnimatePresence>
              {(hovered === i || tapped === i) && (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[90%] bg-white/90 rounded-md shadow p-1 text-center"
                >
                  <div className="font-semibold text-sm text-gray-800">{provider.name}</div>
                  <div className="text-indigo-600 text-xs mb-0.5">{provider.profession}</div>
                  {provider.description && (
                    <div className="text-gray-600 text-[11px] mb-1">{provider.description}</div>
                  )}
                  <a
                    href={provider.link}
                    className="inline-block px-2 py-1 bg-indigo-600 text-[12px] text-white rounded hover:bg-indigo-700 transition"
                    target="_blank" rel="noopener noreferrer"
                  >
                    Visit
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default RollingGallery;