


import React from 'react';

const AboutUs = () => {
  return (

    <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4 py-10 ">
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="text-lg text-gray-700">Welcome to Our Company! We are dedicated to providing the best service and products to our customers. Our journey began with a simple idea and has grown into a mission to innovate and lead in our industry.</p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
        <p className="text-lg text-gray-700">Founded in 2010, our company started as a small startup with big dreams. Over the years, we have grown into a well-respected leader in our field, thanks to our commitment to quality and customer satisfaction. Our passion for excellence drives us to continuously improve and expand our offerings.</p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Meet Our Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Team member cards */}
          <div className="bg-white rounded-md shadow-md p-4">
            <img src="https://riser.ca/wp-content/uploads/2017/04/team1.jpg" alt="Team Member 1" className="w-full h-auto mb-4" />
            <h4 className="text-lg font-semibold">John Doe</h4>
            <p className="text-gray-600">CEO</p>
            <p className="text-gray-700">John is the visionary behind our company, leading with a focus on innovation and growth.</p>
          </div>
          <div className="bg-white rounded-md shadow-md p-4">
            <img src="https://riser.ca/wp-content/uploads/2017/04/team1.jpg" alt="Team Member 2" className="w-full h-auto mb-4" />
            <h4 className="text-lg font-semibold">Jane Smith</h4>
            <p className="text-gray-600">CTO</p>
            <p className="text-gray-700">Jane is our tech guru, ensuring we stay ahead of the curve with the latest technology.</p>
          </div>
          <div className="bg-white rounded-md shadow-md p-4">
            <img src="https://riser.ca/wp-content/uploads/2017/04/team1.jpg" alt="Team Member 3" className="w-full h-auto mb-4" />
            <h4 className="text-lg font-semibold">Mike Johnson</h4>
            <p className="text-gray-600">COO</p>
            <p className="text-gray-700">Mike oversees our operations, making sure everything runs smoothly and efficiently.</p>
          </div>
          <div className="bg-white rounded-md shadow-md p-4">
            <img src="https://riser.ca/wp-content/uploads/2017/04/team1.jpg" alt="Team Member 4" className="w-full h-auto mb-4" />
            <h4 className="text-lg font-semibold">Emily Davis</h4>
            <p className="text-gray-600">CFO</p>
            <p className="text-gray-700">Emily manages our finances, keeping us on track and ensuring our financial health.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Our Culture</h3>
        <p className="text-lg text-gray-700">At our company, we believe in fostering a culture of creativity, collaboration, and continuous improvement. We value our employees and encourage them to bring their best ideas to the table. Our inclusive and supportive environment helps us achieve great things together.</p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Achievements</h3>
        <ul className="list-disc pl-6">
          <li>Awarded Best Startup of the Year in 2012</li>
          <li>Recognized as a Top Innovator in 2015</li>
          <li>Reached a customer base of over 1 million in 2018</li>
          <li>Launched groundbreaking products in 2020</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
        <p className="text-lg text-gray-700">For inquiries, please contact us at: example@email.com</p>
      </section>
    </div>
  );
};

export default AboutUs;
