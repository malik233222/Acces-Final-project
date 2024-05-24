import React from 'react'

export default function Contact() {
  return (
    <div className='max-w-screen-2xl mx-auto container xl:px-28 px-4 '>
      <div>
        <h1 className='title pb-10'>Contact</h1>

        <div className='my-4' >
          <span >Addres: </span>
          <address>Bashir Safaroghlu 24a, 321</address>
        </div>

        <div className='my-4 flex flex-col' >
          <span >Email: </span>
          <a className='mb-5' href="mailto:name@email.com">name@email.com</a>
          <span >Tel: </span>
          <a href="tel:+6494461709">+6494461709</a>
        </div>

        <div className='my-4'>
          <span >Map: </span>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97243.83749888428!2d49.72093405420824!3d40.3895754739685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403087696e5ef18b%3A0x27fb163c819d4544!2sRossmann!5e0!3m2!1str!2saz!4v1716568681332!5m2!1str!2saz" style={{ border: "0", height: "450px", width: "600px" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}
