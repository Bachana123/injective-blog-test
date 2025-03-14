# Injective Blog

## Description

This project is a web application built using **Nuxt 3** and **Contentful** as a headless CMS. It provides a seamless experience for managing and displaying dynamic content, such as blog posts and other structured data. The app leverages **Vue.js** and **Tailwind CSS** for a modern and responsive UI.

## Why Contentful?

Contentful was chosen as the headless CMS for this project because of its:

- **Flexible Content Modeling:** Define custom content types that fit our needs.
- **Powerful API:** Fetch content dynamically via **GraphQL** or **REST API**.
- **Scalability:** Ideal for structured content distribution across multiple platforms.
- **User-Friendly Interface:** The dashboard makes it easy for non-technical users to create and manage content.

## Tech Stack and Challenges

### Tech Stack
- **Frontend:** Nuxt 3 (Vue 3 + TypeScript)
- **Styling:** Tailwind CSS
- **CMS:** Contentful

### Challenges Faced
- **TypeScript Integration with Contentful:** Handling TypeScript types for dynamic CMS content required careful structuring.
- **Reactivity Issues in Nuxt 3:** Ensuring proper reactivity when fetching content dynamically.
- **Pagination & Filtering:** Implementing a dynamic pagination system while considering Contentful's API limits.
- **SEO Optimization:** Adding proper meta tags and structured data for better search engine visibility.

## Demo Video

A walkthrough of the application and CMS interaction is provided in the video below:

[![Watch the Video]](https://drive.google.com/file/d/1wIN9dUZTZZK36ldUdKyFB_6UU1X9zQ2v/view)

### The video covers:
- How to create and manage content in Contentful.
- Application walkthrough (home page, blog post page, filtering, pagination, etc.).

## Getting Started

### Prerequisites
Ensure you have the following installed:
- **Node.js** (>=16.x)
- **Yarn** or **npm**

### Installation

```sh
# Clone the repository
git clone https://github.com/Bachana123/injective-blog-test.git
cd injective-blog-test

# Install dependencies
yarn  # or npm install
```

### Environment Variables
Create a `.env` file and add your Contentful credentials:

```sh
NUXT_CTF_SPACE_ID=your_space_id
NUXT_CTF_ACCESS_TOKEN=your_access_token
NUXT_CTF_ENVIRONMENT=your_environment
```

### Start the Development Server

```sh
yarn dev  # or npm run dev
```

## Deployment

```sh
yarn build  # or npm run build
yarn generate  # Generate static files (if using SSG)
```

---
Feel free to contribute or report issues via [GitHub Issues](https://github.com/Bachana123/injective-blog-test/issues). 🚀
