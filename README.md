# injective blog

Description

This project is a web application built using Nuxt 3 and Contentful as a headless CMS. It provides a seamless experience for managing and displaying dynamic content, such as blog posts and other structured data. The app leverages Vue.js and Tailwind CSS for a modern and responsive UI.

# Why Contentful?

Contentful was chosen as the headless CMS for this project because of its:

Flexible Content Modeling: Contentful allows us to define custom content types that fit our needs.

Powerful API: Fetching content dynamically via GraphQL or REST API is straightforward.

Scalability: Ideal for projects that require structured content distribution across multiple platforms.

User-Friendly Interface: The dashboard makes it easy for non-technical users to create and manage content.

# Tech Stack and Challenges

Tech Stack:

Frontend: Nuxt 3 (Vue 3 + TypeScript)

Styling: Tailwind CSS

CMS: Contentful

Challenges Faced:

TypeScript Integration with Contentful: Handling TypeScript types for dynamic CMS content required careful structuring.

Reactivity Issues in Nuxt 3: Content fetching needed proper reactivity handling to ensure UI updates correctly.

Pagination & Filtering: Implementing a dynamic pagination system with Contentful required understanding its API limits.

SEO Optimization: Since it’s a headless CMS, we had to ensure proper meta tags and structured data for SEO.

# Demo Video

A walkthrough of the application and CMS interaction is provided in the video below:



# The video covers:

How to create and manage content in Contentful.

Application walkthrough (home page, blog post page, filtering, pagination, etc.).

# Getting Started

Prerequisites

Ensure you have the following installed:

Node.js (>=16.x)

Yarn or npm

Installation

# Clone the repository
git clone https://github.com/Bachana123/injective-blog-test.git
cd injective-blog-test

# Install dependencies
yarn install  # or npm install

# Create an .env file and add your Contentful credentials
NUXT_CTF_SPACE_ID=
NUXT_CTF_ACCESS_TOKEN=
NUXT_CTF_ENVIRONMENT=


# Start the development server
yarn dev  # or npm run dev

Deployment

yarn build  # or npm run build
yarn generate  # Generate static files (if using SSG)

