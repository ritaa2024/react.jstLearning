import React, { useState } from 'react'
import {toast,Toaster} from 'react-hot-toast';
function Contact() {

const [formData,setFormData] = useState({
    name:"",
    email:"",
    message:""
})

const handleInputChange = ((e)=>{
    const {id,value} = e.target;
    setFormData((prevData)=>({
        ...prevData,
        [id]:value,
    }))
})

const handleSubmit = (e)=>{
    e.preventDefault();
    const {name,email,message} = formData;
    if(!name || !email || !message){
        toast.error("please fill all the fields before submitting")
        return;
    }

    toast.success("message sent succesfully")

}
  return (
    <div className="max-w-4xl mx-auto mt-10 p-5 bg-gray-800 text-white rounded shadow-lg">
    <Toaster position='top-right' reverseOrder={false}></Toaster>
    
    <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
    <p>
      Have questions or feedback? We'd love to hear from you!
    </p>
    <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm">Your Name</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full px-3 py-2 rounded bg-gray-700 text-white border border-gray-600"
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm">Your Email</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-3 py-2 rounded bg-gray-700 text-white border border-gray-600"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm">Your Message</label>
        <textarea
          id="message"
          value={formData.message}
          onChange={handleInputChange}
          rows="4"
          className="w-full px-3 py-2 rounded bg-gray-700 text-white border border-gray-600"
          placeholder="Write your message"
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
      >
        Send Message
      </button>
    </form>
  </div>
  )
}

export default Contact