import { useEffect, useState } from 'react';
import axios from 'axios';

interface GithubInfo {
  id: number;
  login: string;
  name: string;
  avatar_url: string;
}

export default function Github() {
  const [githubInfo, setgithubInfo] = useState<GithubInfo | null>(null);

  useEffect(() => {
    axios
      .get('https://karan-2222.onrender.com/api/github/')
      // .get("/api/githubs")
      .then((res) => {
        console.log(res);
        setgithubInfo(res.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(githubInfo);

  return (
    <>
      <h1 className="w-fit font-extrabold text-2xl rounded-2xl mx-auto bg-slate-500 p-4 m-4">Github Info</h1>
      <div className="flex flex-wrap justify-center gap-4 w-[300px] mx-auto m-4 items-center p-6 bg-slate-500 ">
        {githubInfo && (
          <>
            <div className="font-bold bg-amber-300 rounded-2xl p-4 ">{githubInfo.name}</div>
            <div className="font-bold bg-amber-300 rounded-2xl p-4 ">{githubInfo.login}</div>
            <div className="font-bold bg-amber-300 rounded-2xl p-4 ">{githubInfo.avatar_url}</div>
          </>
        )}
      </div>
    </>
  );
}
