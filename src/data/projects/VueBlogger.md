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

---

## Features

- View blogs without logging in
- Filter blogs by title
- User registration with email verification
- OAuth login with Google/GitHub
- Create, edit, delete blog posts via REST API
- Upload blog posts in Markdown format with cover images

---

## Technologies Used

- **Vue.js**: A progressive JavaScript framework for building user interfaces.
- **Vue Router**: The official router for Vue.js.
- **Pinia**: The official state management library for Vue.js.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Nuxt/ui**: A UI library for building beautiful and responsive user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **Axios**: A promise-based HTTP client for the browser and Node.js.
- **Highlight.js**: A syntax highlighter for the web.
- **Luxon**: A powerful, modern, and friendly library for parsing, validating, manipulating, and formatting dates and
  times.
- **Showdown**: A JavaScript Markdown to HTML converter.

---
The backend project can be found here: [Blogger Backend project](http://localhost:4321/projects/blogger-backend)

---
