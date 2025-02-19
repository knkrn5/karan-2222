import ContactDetails from './contactDetails';
import ContactForm from './contactForm';


function Contact() {
  return (
    <div className=" bg-gray-100 dark:bg-gray-800">
      <div className="text-center mb-4">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 pt-4">Contact Me</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">Have a question or want to work together?</p>
      </div>

      <div className="lg:max-w-7xl mx-auto grid grid-cols-1 p-6 lg:grid-cols-2 gap-10">
        {/* Contact Details Section */}
        <ContactDetails />

        {/* Contact Form Section */}
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
