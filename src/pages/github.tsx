import { useEffect, useState } from "react";
import axios from "axios";

interface GithubInfo {
  id: number;
  login: string;
  name: string;
}

export default function Github() {
  const [githubInfo, setgithubInfo] = useState<GithubInfo | null>(null);

  useEffect(() => {
    axios
    //   .get("https://api.github.com/users/knkrn5")
      .get("/api/github")
      .then((res) => {
        console.log(res)
        setgithubInfo(res.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(githubInfo);

  return (
    <div className="flex flex-wrap justify-center gap-4 w-[300px] mx-auto m-4 items-center p-6 bg-slate-500 ">
      {githubInfo && (
        <>
          <div className="font-bold bg-amber-300 rounded-2xl p-4 ">{githubInfo.name}</div>
          <div className="font-bold bg-amber-300 rounded-2xl p-4 ">{githubInfo.login}</div>
          <div className="font-bold bg-amber-300 rounded-2xl p-4 ">{githubInfo.avatar_url}</div>
        </>
      )}
    </div>
  );
}
