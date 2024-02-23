'use client'


// CalendlyWidget.js
import { useEffect } from 'react';

const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="calendly-inline-widget mt-[58px] md:mt-[60px] pt-12 md:pt-10 lg:pt-0 pb-9 bg-[#FBFCFD] md:h-[700px] h-[500px]" data-url="https://calendly.com/chadstutoring" style={{ minWidth: '320px' }}></div>
  );
};

export default CalendlyWidget;
