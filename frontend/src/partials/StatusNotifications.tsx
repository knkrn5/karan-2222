import { CircleCheck, Info, OctagonAlert, CircleX  } from 'lucide-react';

export default function StatusNotifications() {
  return (
    <>
      <div className="space-y-4">
        <div className="flex items-center bg-green-600 text-white text-lg font-semibold px-4 py-2 rounded-lg">
          <CircleCheck className="mr-2" />
          <span>Success - Everything went smoothly!</span>
        </div>

        <div className="flex items-center bg-blue-600 text-white text-lg font-semibold px-4 py-2 rounded-lg">
          <Info className="mr-2" />
          <span>Info - This is some information for you.</span>
        </div>
        <div className="flex items-center bg-yellow-600 text-white text-lg font-semibold px-4 py-2 rounded-lg">
          <OctagonAlert className="mr-2" />
          <span>Warning - Be careful with this next step.</span>
        </div>
        <div className="flex items-center bg-red-600 text-white text-lg font-semibold px-4 py-2 rounded-lg">
          <CircleX className="mr-2" />
          <span>Error - Something went wrong.</span>
        </div>
      </div>
    </>
  );
}
