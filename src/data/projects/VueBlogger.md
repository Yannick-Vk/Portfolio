---
title: "Vue-Blogger"
description: "A blogging platform built with Vue.js"
created_at: "2025-09-24"
link: https://github.com/Yannick-Vk/vue-blogs
slug: "vue-blogger"
tags: [ "Vue", "JavaScript", "TypeScript", "Frontend" ]
---

Create a blogging platform using **Vue.js** and **Tailwind CSS** for styling.
Where users can view blogs without having to log in. Blogs can be filtered by title on the home page.

The user can create an account using their email and a password, after which they have to confirm their email address
via a verification email.
Or the user can log in using their Google/GitHub account via OAuth.

After logging in the user can create, edit, and delete their own blog posts. When uploading the user can add a blog file
in **Markdown** format and add a cover image.
You can add another user as a collaborator to your blog post, allowing them to edit the post as well.

The project sends requests to the **REST** backend API I created using **C# / .NET** with **Entity Framework** and a *
*postgres database**.
The app can run both locally and using **Docker**.

An admin user can manage roles (Create, edit, delete).

## Features

- View blogs without logging in
- Filter blogs by title
- User registration with email verification
- OAuth login with Google/GitHub
- Create, edit, delete blog posts via REST API
- Upload blog posts in Markdown format with cover images

## Technologies Used

- Vue.js
- Pinia (for state management)
- TypeScript
- Tailwind CSS
- REST API
- Showdown.js (for Markdown rendering)

---
The backend project can be found here: [Blogger Backend project](http://localhost:4321/projects/blogger-backend)
