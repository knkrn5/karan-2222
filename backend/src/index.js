import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";

dotenv.config({ path: "./backend/.env" });
console.log("MongoDB URL:", process.env.MONGO_URL);

import connectDB from "../db/index.js";

const app = express();


/* ;(async () =>{
  try {
    await connectDB()
  } catch (error) {
    console.log(error)
    throw error
  }
})() */

connectDB()
.then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log("listening at port", process.env.PORT);
  });
})
.catch((error) => {
  console.log("mongodb connection error",error);
});

app.get('/api/github', (req, res) => {
  res.json({
      user: {
          "login": "knkrn5",
          "id": 151421344,
          "node_id": "U_kgDOCQaBoA",
          "avatar_url": "https://avatars.githubusercontent.com/u/151421344?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/knkrn5",
          "html_url": "https://github.com/knkrn5",
          "followers_url": "https://api.github.com/users/knkrn5/followers",
          "following_url": "https://api.github.com/users/knkrn5/following{/other_user}",
          "gists_url": "https://api.github.com/users/knkrn5/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/knkrn5/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/knkrn5/subscriptions",
          "organizations_url": "https://api.github.com/users/knkrn5/orgs",
          "repos_url": "https://api.github.com/users/knkrn5/repos",
          "events_url": "https://api.github.com/users/knkrn5/events{/privacy}",
          "received_events_url": "https://api.github.com/users/knkrn5/received_events",
          "type": "User",
          "user_view_type": "public",
          "site_admin": false,
          "name": "Karan",
          "company": null,
          "blog": "wealthpsychology.in",
          "location": "india",
          "email": null,
          "hireable": true,
          "bio": "I want to try/experience everything in this universe....",
          "twitter_username": null,
          "public_repos": 3,
          "public_gists": 0,
          "followers": 0,
          "following": 1,
          "created_at": "2023-11-19T04:51:37Z",
          "updated_at": "2025-02-06T07:34:14Z"
      }
  })
});




