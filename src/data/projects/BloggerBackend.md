---
title: "Blogger Backend"
description: "The backend architecture and implementation details for the Blogger platform."
created_at: "2025-08-25"
link: https://github.com/Yannick-Vk/Angular-Admin-Web-Api
slug: blogger-backend
tags: [ ".NET", "C#", "Docker", "Postgres", "JWT", "Backend" ]
---

This is the backend API for my Blogger projects. It provides user authentication, authorization, and a simple blog
management system.

The project is built using **C# / .NET 9** with **ASP.NET Core** and **Entity Framework Core** for data access.
The database used is **PostgreSQL**.

The API uses **JWT** for authentication and supports user registration, login (including OAuth with GitHub and Google),
and role-based authorization.
The project can be run both locally and using **Docker**.

## Features

- User registration and login (including with GitHub and Google)
- Role-based authorization (Admin role)
- Blog post management (Create, Read, Update, Delete)
- User and role management for admins
- Profile management (update email, username, password, profile picture)
- Email verification and password reset

## Technologies Used

- .NET 9
- ASP.NET Core
- Entity Framework Core
- PostgreSQL
- JWT for Authentication
- Swagger for API documentation
- Docker

## Frontend projects

The frontend projects that use this backend API

- [Vue Blogger project](http://localhost:4321/projects/vue-blogger)
- [Angular Blogger project](http://localhost:4321/projects/angular-blogger)