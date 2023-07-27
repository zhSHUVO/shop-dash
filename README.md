# Shop Dash - E-commerce Web Application

Shop Dash is an e-commerce web application built with Next.js and MongoDB. It allows users to browse and purchase various products, manage their shopping cart, and place orders. The application also includes authentication using NextAuth.js to provide a secure and personalized shopping experience.

Visit - [ShopDesh](https://shop-dash.vercel.app/) or [ShopDesh](https://shop-dash-zhshuvo.vercel.app/)

## Table of Contents

-   [Installation](#installation)
-   [Features](#features)
-   [Technologies Used](#technologies-used)
-   [Getting Started](#getting-started)
-   [Configuration](#configuration)
-   [Usage](#usage)
-   [Folder Structure](#folder-structure)
-   [Contributing](#contributing)
-   [License](#license)

## Installation

Before running the application, make sure you have Node.js and MongoDB installed on your system.

1. Clone the repository:

```bash
git clone https://github.com/zhSHUVO/shop-dash.git
cd shop-dash
```

2. Install the dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The application will be accessible at `http://localhost:3000`.

## Features

-   User authentication with NextAuth.js
-   Product browsing
-   Adding products to the cart
-   Placing orders with user details
-   Admin dashboard for managing products

## Technologies Used

-   Next.js: A React framework for building server-rendered applications.
-   MongoDB: A NoSQL database for storing product and order data.
-   Mongoose: An elegant MongoDB object modeling tool for Node.js.
-   NextAuth.js: An authentication library for Next.js applications.
-   Tailwind CSS: A utility-first CSS framework for rapid UI development.
-   React Hook Form: A library for managing form state in React applications.

## Getting Started

To get started with the application, follow these steps:

1. Clone the repository and install the dependencies as mentioned in the [Installation](#installation) section.

2. Configure the MongoDB connection in the application. Refer to the [Configuration](#configuration) section for details.

3. Start the development server using the command `npm run dev`. The application will be available at `http://localhost:3000`.

## Configuration

Before running the application, you need to set up the MongoDB connection.

1. Create a `.env.local` file in the root of the project.

2. Add the MongoDB connection string as follows:

```
DATABASE_URL=your_mongodb_connection_string
```

2. Add nextauth secret as follows:

```
NEXTAUTH_SECRET=your_next_auth_secret
```

2. Add nextauth url as follows:

```
DATABASE_URL=your_next_auth_url
```

Replace `values` with your actual values.

## Usage

The application allows users to browse and look for products, add items to the cart, and place orders. Users can create an account and log in using their phone numbers. The admin dashboard allows managing products, users and orders.

### User Login

-   Click on the "Avater" icon button in the navigation bar to log in with your phone number. If you don't have account, create one with Bangladeshi phone number with country code. Example - `+8801765936771`

### Product Browsing

-   Browse for products on the home page.
-   Click on a product to view its details.

### Cart Management

-   Add products to the cart from the home page or product details page.
-   View and manage the cart contents on the cart page.

### Placing an Order

-   Click on the "Order" button on the cart page to place an order.
-   If not logged in, you will be redirected to the login page.

### Admin Dashboard

-   Access the admin dashboard by visiting `/dashboard` after logging in as an admin user.
-   Manage products, including adding, editing, and deleting them.
-   View and manage orders placed by users.
-   You'll have to login to access the dashboard page.

## Folder Structure

The project structure is organized as follows:

```
.
├── app
│   ├── api
│   │   ├── auth
│   │   │   ├── [...nextauth]
│   │   │   │   └── route.js
│   │   │   └── user
│   │   │       └── route.js
│   │   └── products
│   │       ├── [id]
│   │       │   └── route.js
│   │       └── route.js
│   ├── cart
│   │   └── page.js
│   ├── components
│   │   ├── shared
│   │   │   ├── Footer.js
│   │   │   └── Navbar.js
│   │   ├── AddToCartButton.js
│   │   ├── AuthButtons.js
│   │   ├── AuthProvider.js
│   │   ├── CartButton.js
│   │   ├── HomeHero.js
│   │   └── TopBar.js
│   ├── (dashboard)
│   │   ├── dashboard
│   │   │   └── page.js
│   │   ├── orders
│   │   │   └── page.js
│   │   ├── products
│   │   │   ├── add
│   │   │   │   └── page.js
│   │   │   └── page.js
│   │   ├── users
│   │   │   ├── add
│   │   │   │   └── page.js
│   │   │   └── page.js
│   │   └── layout.js
│   ├── product
│   │   ├── [id]
│   │   │   ├── loading.js
│   │   │   └── page.js
│   │   └── page.js
│   ├── user
│   │   ├── login
│   │   │   └── page.js
│   │   └── reg
│   │       └── page.js
│   ├── favicon.ico
│   ├── favicon-old.ico
│   ├── favicon.svg
│   ├── globals.css
│   ├── layout.js
│   ├── middleware.js
│   └── page.js
├── context
│   └── CartContext.js
├── lib
│   └── db.js
├── model
│   ├── productModel.js
│   └── userModel.js
├── public
│   ├── next.svg
│   └── vercel.svg
├── utils
│   └── cart.js
├── .env.local
├── .eslintrc.json
├── .gitignore
├── jsconfig.json
├── next.config.js
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
└── tailwind.config.js
```

## Contributing

Contributions are welcome! If you find any issues or want to enhance the application, feel free to open a pull request or report an issue in the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE).

---

Thank you for checking out Shop Dash! We hope you enjoy using the application. If you have any questions or need further assistance, please don't hesitate to reach out to us.

Happy shopping! 🛍️
