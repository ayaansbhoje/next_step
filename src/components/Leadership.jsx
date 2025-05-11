import { useState } from 'react';

export default function Leadership() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Program sections data
  const programs = [
    {
      title: "Legacy Leadership",
      description: "Augment leadership skills of senior subject matter experts into well-rounded, visionary leaders who can propel the organization towards enduring success and a meaningful impact for the future"
    },
    {
      title: "Leadership Momentum",
      description: "Develop mid-level managers' strategic, operational, and people-leadership skills, equipping them to drive impactful business results and foster a high-performance culture within their teams."
    },
    {
      title: "Legacy Leadership",
      description: "Augment leadership skills of senior subject matter experts into well-rounded, visionary leaders who can propel the organization towards enduring success and a meaningful impact for the future"
    }
  ];

  return (
    <div className="bg-[#DBB965] p-6">
      {/* Header row */}
      <div className="flex justify-between mb-8">
        <div className="w-1/3">
          <h1 className="text-white text-4xl font-bold tracking-widest leading-tight">
            Leadership<br/>Development<br/>Programs
          </h1>
        </div>
        <div className="w-1/2">
          <p className="text-white text-2xl text-right mt-4">
            Develop a strong leadership team as part of succession
            planning and retention strategy, to support the
            organization's strategic goals for
            business expansion.
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-white my-6" />

      {/* Program sections with hover effects */}
      {programs.map((program, index) => (
        <div key={index}>
          <div 
            className={`flex mb-8 p-4 rounded-lg transition-all duration-300 ${
              hoveredIndex === index 
                ? index % 2 === 0 
                  ? 'bg-black bg-opacity-50' 
                  : 'bg-white bg-opacity-60'
                : ''
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="w-1/4">
              <img 
                src="/api/placeholder/300/200" 
                alt={`Team for ${program.title}`} 
                className="rounded-lg"
              />
            </div>
            <div className="w-3/4 pl-8">
              <h2 className={`text-3xl font-medium mb-3 ${
                hoveredIndex === index 
                  ? index % 2 === 0 
                    ? 'text-white' 
                    : 'text-black'
                  : 'text-black'
              }`}>
                {program.title}
              </h2>
              <p className={
                hoveredIndex === index 
                  ? index % 2 === 0 
                    ? 'text-white' 
                    : 'text-black'
                  : 'text-white'
              }>
                {program.description}
              </p>
            </div>
          </div>
          
          {/* Divider (except after the last item) */}
          {index < programs.length - 1 && <hr className="border-white my-6" />}
        </div>
      ))}
    </div>
  );
}

