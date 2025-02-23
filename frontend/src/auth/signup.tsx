import React from 'react';

export default function signup() {
  return (
    <>
      <div className="bg-gray-800 text-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <div className="flex justify-center mb-4">
          <img alt="Logo" className="rounded-full" height={50} src="https://storage.googleapis.com/a1aa/image/y1gxZ3HZ-wQfy9v3jRED8_yF9DfDs2QLLHGGtd33Krs.jpg" width={50} />
        </div>
        <h2 className="text-center text-2xl font-bold mb-2">Create your account</h2>
        <p className="text-center text-gray-400 mb-6">Welcome! Please fill in the details to get started.</p>
        <div className="flex justify-center space-x-4 mb-4">
          <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded flex items-center">
            <img alt="Google logo" className="mr-2" height={20} src="https://storage.googleapis.com/a1aa/image/C6f7A094vN9X_qzRQAq3xiKCw0gxhbnwd2Oy7Y-sbQo.jpg" width={20} />
            Google
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded flex items-center">
            <img alt="Github logo" className="mr-2" height={20} src="https://storage.googleapis.com/a1aa/image/N94JSK3SCbbgmFX89QGfGn485MsJFBTPy9QkcbJGg7Y.jpg" width={20} />
            Github
          </button>
        </div>
        <div className="text-center text-gray-400 mb-4">or</div>
        <form>
          <div className="flex space-x-4 mb-4">
            <input className="bg-gray-700 text-white rounded-lg p-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="First name" type="text" />
            <input className="bg-gray-700 text-white rounded-lg p-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Last Name" type="text" />
          </div>
          <div className="mb-4">
            <input className="bg-gray-700 text-white rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Username" type="text" />
          </div>
          <div className="mb-4">
            <input className="bg-gray-700 text-white rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Email" type="email" />
          </div>
          <div className="mb-6">
            <input className="bg-gray-700 text-white rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Password" type="password" />
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg w-full flex justify-center items-center" type="submit">
            Continue
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </form>
        <div className="text-center text-gray-400 mt-4">
          Already have an account?
          <a className="text-blue-500" href="#">
            Sign in
          </a>
        </div>
        <div className="text-center text-gray-500 mt-4 text-sm">Secured by Supabase</div>
      </div>
    </>
  );
}
