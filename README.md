# 📝 Blog AI Beta Version

![Blog AI Banner](https://img.shields.io/badge/Blog-AI-blue?style=for-the-badge&logo=artificial-intelligence)

A modern, full-stack blogging platform powered by artificial intelligence. Create, manage, and publish blogs with AI-generated content, complete with an intuitive admin dashboard and responsive design.

## ✨ Features

### 🤖 AI-Powered Content Generation

- **Intelligent Blog Creation**: Generate high-quality blog content using Google's Gemini AI
- **Smart Content Suggestions**: AI-assisted writing to enhance your creative process
- **Automated SEO Optimization**: AI-generated meta descriptions and keywords

### 📱 Modern User Experience

- **Responsive Design**: Fully responsive interface that works on all devices
- **Rich Text Editor**: Powered by Quill.js for an exceptional writing experience
- **Interactive UI**: Smooth animations and transitions using Framer Motion
- **Real-time Search**: Instant blog search functionality
- **Category Filtering**: Easy content discovery through category-based filtering

### 🛡️ Admin Dashboard

- **Secure Authentication**: JWT-based admin authentication system
- **Blog Management**: Create, edit, delete, and publish/unpublish blogs
- **Comment Moderation**: Approve or reject user comments
- **Analytics Dashboard**: Track blog performance and engagement metrics
- **Image Management**: Seamless image uploads with ImageKit integration

### 💬 Community Features

- **User Comments**: Interactive comment system for reader engagement
- **Comment Moderation**: Admin approval system for quality control
- **Newsletter Subscription**: Email subscription for blog updates

## 🚀 Tech Stack

### Frontend

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF?style=flat&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.11-06B6D4?style=flat&logo=tailwindcss)
![React Router](https://img.shields.io/badge/React_Router-7.6.3-CA4245?style=flat&logo=react-router)

- **React 19.1.0** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **TailwindCSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Quill.js** - Rich text editor
- **Axios** - HTTP client for API requests
- **React Hot Toast** - Beautiful notifications
- **Framer Motion** - Smooth animations

### Backend

![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat&logo=mongodb)
![JWT](https://img.shields.io/badge/JWT-Authentication-000000?style=flat&logo=jsonwebtokens)

- **Node.js & Express** - Server-side JavaScript runtime and framework
- **MongoDB** - NoSQL database for data storage
- **Mongoose** - MongoDB object modeling
- **JWT** - Secure authentication tokens
- **Multer** - File upload handling
- **CORS** - Cross-origin resource sharing

### AI & Cloud Services

![Google AI](https://img.shields.io/badge/Google-Gemini_AI-4285F4?style=flat&logo=google)
![ImageKit](https://img.shields.io/badge/ImageKit-CDN-FF6B6B?style=flat)

- **Google Gemini AI** - Advanced AI content generation
- **ImageKit** - Image optimization and CDN

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB Atlas](https://www.mongodb.com/atlas) account
- [Google AI Studio](https://makersuite.google.com/) API key
- [ImageKit](https://imagekit.io/) account

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/mohamedammar2729/AI-Blog.git
cd AI-Blog
```

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the server directory:

```env
# JWT Configuration
JWT_SECRET=your_jwt_secret_here

# Admin Credentials
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=ammar123456

# Server Configuration
PORT=3000

# MongoDB Configuration
MONGO_URI=mongodb+srv://your_username:your_password@cluster.mongodb.net

# ImageKit Configuration
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/your_endpoint

# Google AI Configuration
GEMINI_API_KEY=your_gemini_api_key
```

### 3. Frontend Setup

```bash
cd ../client
npm install
```

Create a `.env` file in the client directory:

```env
VITE_BASE_URL=http://localhost:3000
```

### 4. Start the Development Servers

**Backend (Terminal 1):**

```bash
cd server
npm run server
```

**Frontend (Terminal 2):**

```bash
cd client
npm run dev
```

The application will be available at:

- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:3000

## 📁 Project Structure

```
Blog AI/
├── client/                 # React frontend
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── assets/        # Images and icons
│   │   ├── components/    # Reusable components
│   │   │   └── admin/     # Admin-specific components
│   │   ├── context/       # React context providers
│   │   ├── pages/         # Route components
│   │   │   └── admin/     # Admin dashboard pages
│   │   └── main.jsx       # App entry point
│   └── package.json
│
├── server/                # Node.js backend
│   ├── configs/           # Configuration files
│   ├── controllers/       # Route handlers
│   ├── middleware/        # Custom middleware
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API routes
│   ├── server.js         # Server entry point
│   └── package.json
│
└── README.md
```

## 🔗 API Endpoints

### Public Routes

- `GET /` - Health check
- `GET /api/blog/all` - Get all published blogs
- `GET /api/blog/:id` - Get specific blog
- `POST /api/blog/add-comment` - Add comment to blog
- `POST /api/blog/comments` - Get blog comments

### Protected Admin Routes

- `POST /api/admin/login` - Admin authentication
- `GET /api/admin/blogs` - Get all blogs (admin)
- `GET /api/admin/comments` - Get all comments
- `GET /api/admin/dashboard` - Dashboard analytics
- `POST /api/blog/add` - Create new blog
- `POST /api/blog/delete` - Delete blog
- `POST /api/blog/toggle-publish` - Toggle blog publish status
- `POST /api/blog/generate` - AI content generation
- `POST /api/admin/approve-comment` - Approve comment
- `POST /api/admin/delete-comment` - Delete comment

## 🎨 Key Features Breakdown

### AI Content Generation

The platform integrates Google's Gemini AI to assist in content creation:

- Generate blog titles and content based on prompts
- Create engaging descriptions and meta content
- Suggest relevant categories and tags

### Admin Dashboard

Comprehensive admin panel featuring:

- **Dashboard**: Overview of blogs, comments, and analytics
- **Blog Management**: CRUD operations with rich text editing
- **Comment Moderation**: Approve/reject system
- **Content Analytics**: Performance tracking

### User Experience

- **Responsive Design**: Mobile-first approach
- **Fast Loading**: Optimized with Vite and modern React
- **SEO Friendly**: Meta tags and structured data
- **Accessibility**: WCAG compliant design

## 🚀 Deployment

### Backend Deployment (Railway/Heroku)

1. Set up your cloud database (MongoDB Atlas)
2. Configure environment variables
3. Deploy to your preferred platform

### Frontend Deployment (Vercel/Netlify)

1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Configure environment variables

### Environment Variables Checklist

- ✅ Database connection string
- ✅ JWT secret key
- ✅ Admin credentials
- ✅ ImageKit configuration
- ✅ Google AI API key

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow existing code style and conventions
- Write clear commit messages
- Add tests for new features
- Update documentation as needed

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Mohamed Ammar**

- GitHub: [@mohamedammar2729](https://github.com/mohamedammar2729)

## 🙏 Acknowledgments

- [Google AI](https://ai.google.dev/) for the Gemini API
- [ImageKit](https://imagekit.io/) for image optimization
- [MongoDB Atlas](https://www.mongodb.com/atlas) for database hosting
- [React](https://reactjs.org/) and [Node.js](https://nodejs.org/) communities

## 📊 Project Status

![GitHub last commit](https://img.shields.io/github/last-commit/mohamedammar2729/AI-Blog)
![GitHub issues](https://img.shields.io/github/issues/mohamedammar2729/AI-Blog)
![GitHub stars](https://img.shields.io/github/stars/mohamedammar2729/AI-Blog)
![GitHub forks](https://img.shields.io/github/forks/mohamedammar2729/AI-Blog)

---

<p align="center">
  <strong>🌟 If you found this project helpful, please consider giving it a star! 🌟</strong>
</p>

<p align="center">
  Made with ❤️ by <a href="https://github.com/mohamedammar2729">Mohamed Ammar</a>
</p>
