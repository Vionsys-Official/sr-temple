import React from 'react';

function Addressmap() {
  return (
    <section className="h-full w-full md:px-2 px-4">
      <iframe
        className="w-full border"
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d943.366721197151!2d77.12341696950367!3d18.95497726727163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1718345203923!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}

export default Addressmap;
