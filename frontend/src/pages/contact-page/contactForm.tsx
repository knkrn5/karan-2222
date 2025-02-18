import React, { useEffect, useState } from 'react';
import { Send } from 'lucide-react';
import axios from 'axios';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [error, setError] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Handling form submission here
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    handleErrors();

    if (!formData.name || !emailRegex.test(formData.email) || !formData.message) {
      console.log('All fields are required');
      return;
    }

    try {
      const contactData = await axios.post('/api/contacts/message', formData);
      console.log('Message sent successfully', contactData.data.message);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Error:', error.response?.data || error.message);
      } else {
        console.error('Unexpected Error:', error);
      }
      throw error;
    }

    setFormData({
      name: '',
      email: '',
      message: '',
    });

    console.log('Form submitted:', formData);
  };

  /*   useEffect(() => {
    console.log(contactInfo)
  }, []); */

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    console.log(name);

    if (error[name as keyof FormData]) {
      setError((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleErrors = () => {
    setError({
      name: !formData.name ? 'Name is required' : '',
      email: !formData.email ? 'Email is required' : !emailRegex.test(formData.email) ? 'Please Enter a Valid Email' : '',
      message: !formData.message ? 'Message is required' : '',
    });
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-purple-100 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-8 rounded-2xl  shadow-lg duration-300 hover:drop-shadow-2xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            maxLength={30}
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-3 bg-white block w-full outline-none rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
            placeholder="Name"
          />
          {error.name && <p className="text-red-600 text-sm">{error.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email<sup className="text-red-500 text-[12px]">*</sup>
          </label>
          <input
            type="text"
            name="email"
            id="email"
            maxLength={50}
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-3 bg-white block w-full outline-none rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
            placeholder="Email"
          />
          {error.email && <p className="text-red-600 text-sm">{error.email}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            minLength={10}
            maxLength={200}
            value={formData.message}
            onChange={handleChange}
            className="mt-1 p-3 bg-white block w-full outline-none rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
            placeholder="Message Me..."
          />
          <div className="flex justify-between">
            {error.message && <p className="text-red-600 text-sm">{error.message}</p>}
            <p className="text-sm text-gray-500 dark:text-gray-400">{formData.message.length}/200 characters</p>
          </div>
        </div>

        <button
          type="submit"
          className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700  focus:ring-indigo-500 transition-colors"
        >
          Send Message
          <Send className="ml-2 -mr-1 h-5 w-5" />
        </button>
      </form>
    </div>
  );
}
