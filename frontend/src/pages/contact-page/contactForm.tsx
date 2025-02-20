import React, { useState } from 'react';
import { Send } from 'lucide-react';
import axios from 'axios';

import SeeContactInfo from './seeContactInfo';

interface FormDataProp {
  name: string;
  email: string;
  message: string;
}

interface serverMsgProp {
  name: string;
  email: string;
  message: string;
  id: string;
}

interface StatusInfoProps {
  success?: string;
  info?: string;
  warning?: string;
  error?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormDataProp>({
    name: '',
    email: '',
    message: '',

  });

  const [error, setError] = useState<FormDataProp>({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [serverMsg, setServerMsg] = useState<serverMsgProp>({ name: '', email: '', message: '', id: ''  });
  const [statusInfo, setStatusInfo] = useState<StatusInfoProps>({});

  // robust email regex
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Calculate errors synchronously
    const newErrors = {
      name: !formData.name ? 'Name is required' : '',
      email: !formData.email ? 'Email is required' : !emailRegex.test(formData.email) ? 'Please enter a valid email' : '',
      message: !formData.message ? 'Message is required' : '',
    };
    setError(newErrors);

    // Check if any errors exist
    const hasErrors = Object.values(newErrors).some((error) => error !== '');
    if (hasErrors) {
      return;
    }

    try {
      const response = await axios.post('/api/contact/message', formData);
      const { data } = response;

      setIsSuccess(data.success);
      setStatusInfo({ success: data.status });

      // Reset form
      setFormData({ name: '', email: '', message: '' });
      setServerMsg({ name: data.data.Name, email: data.data.Email, message: data.data.Message, id: data.data._id });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.data.data);
        setServerMsg(error.response?.data.data);
        setIsSuccess(error.response?.data.success);
        setStatusInfo({ error: error.response?.data.status });
      } else {
        console.error('Unexpected Error:', error);
      }
    } finally {
      setIsSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (error[name as keyof FormDataProp]) {
      setError((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <>
      {isSubmitted ? (
        <SeeContactInfo name={serverMsg.name} email={serverMsg.email} message={serverMsg.message} id={serverMsg.id} statusInfo={statusInfo} isSuccess={isSuccess}  />
      ) : (
        <div className="bg-gradient-to-br from-indigo-50 via-purple-100 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg duration-300 hover:drop-shadow-2xl">
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
              className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white transition-colors bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500"
            >
              {!isSubmitted ? 'Send Message' : 'Submit'}
              <Send className="ml-2 -mr-1 h-5 w-5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
