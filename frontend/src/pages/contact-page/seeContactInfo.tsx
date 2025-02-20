import { useState } from 'react';
import StatusNotifications from './StatusNotifications';
import axios from 'axios';

interface StatusInfoProps {
  success?: string;
  info?: string;
  warning?: string;
  error?: string;
}

interface contactDataProps {
  name: string;
  email: string;
  message: string;
  id: string;
  statusInfo: StatusInfoProps;
  isSuccess: boolean;
}

const SeeContactInfo = ({ name, email, message, id, statusInfo, isSuccess }: contactDataProps) => {
  const [isEditing, setisEditing] = useState<boolean>(false);
  const [isEdited, setisEdited] = useState(true);
  const [status, setStatus] = useState<StatusInfoProps>(statusInfo);
  const [MessageValue, setMessageValue] = useState(message);

  // Editing message
  const handleEdit = async () => {
    if (isEditing) {
      try {
        const response = await axios.put('/api/contact/message', {
          id,
          message: MessageValue,
        });

        const { data } = response;

        setStatus({ success: data.status });
        setisEdited(data.success);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log('Full error response:', error.response);
          console.log('Data field:', error.response?.status);
          setStatus({
            error: error.response?.data?.status || 'An unexpected error occurred.',
          });
          setisEdited(error.response?.data?.success);
        } else {
          console.error('Unexpected Error:', error);
        }
      }
    } else {
      setStatus({ info: 'Editing Message' });
    }
    setisEditing(!isEditing);
  };

  //deleting message
  const handleDelete = () => {
    setStatus({ warning: 'Are you sure you want to delete this message?' });
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-purple-100 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-5 rounded-2xl shadow-lg duration-300 hover:drop-shadow-2xl">
      <div className="flex justify-end px-4 pt-4"></div>
      <div
        className={`flex flex-col items-center p-4 rounded-2xl ${
          isSuccess && !isEditing && isEdited ? 'shadow-[0_4px_10px_rgba(0,255,0,0.6)]' : !isSuccess && !isEditing && !isEdited ? 'shadow-[0_4px_10px_rgba(255,0,0,0.6)]' : 'shadow-[0_4px_10px_rgba(0,0,255,0.6)]'
        }`}
      >
        <h5 className="mb-1 text-xl font-extrabold text-gray-900 dark:text-white">{name.toLocaleUpperCase()}</h5>
        <p className="text-sm text-gray-500 dark:text-gray-400">{email}</p>
        {isEditing ? (
          <>
            <textarea
              className="w-3/4 h-fit text-sm p-4 m-2 break-all bg-white outline-none rounded-2xl  dark:bg-gray-700 dark:text-white"
              title="Edit Message"
              minLength={10}
              maxLength={200}
              placeholder="Message..."
              value={MessageValue}
              onChange={(e) => setMessageValue(e.target.value)}
            />
            <p className="text-sm text-gray-500 dark:text-gray-400">{MessageValue.length}/200 Characters</p>
          </>
        ) : (
          <p className="w-3/4 text-sm p-4 m-2 break-all bg-white rounded-2xl  dark:bg-gray-700 dark:text-white">{MessageValue}</p>
        )}
        <div className="flex mt-4">
          {isSuccess ? (
            <>
              <button
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleEdit}
              >
                {isEditing ? 'Save Message' : 'Edit Message'}
              </button>
              <button
                className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={handleDelete}
              >
                Delete
              </button>
            </>
          ) : (
            <button
              onClick={() => window.location.reload()}
              className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              type="button"
            >
              Retry
            </button>
          )}
        </div>
      </div>
      <StatusNotifications statusInfo={status} />
    </div>
  );
};

export default SeeContactInfo;
