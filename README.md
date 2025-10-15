# International Beauty Store

A beautiful landing page for an international beauty store with region selection for China and International customers.

## Features

- 💄 Modern, responsive design with Tailwind CSS
- 🌍 Region selection for China (Taobao) and International stores
- ✨ Smooth animations and hover effects
- 📱 Mobile-friendly layout
- ⚡ Built with Next.js 15 and TypeScript

## Getting Started

### Development

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

```bash
npm run build
npm start
```

## Deploy to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy from the project directory:
```bash
cd beauty-store
vercel
```

3. Follow the prompts to deploy your project

### Option 2: Deploy via Vercel Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Go to [Vercel](https://vercel.com) and sign in

3. Click "Add New Project"

4. Import your repository

5. Vercel will automatically detect Next.js and configure the build settings

6. Click "Deploy"

### Option 3: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/beauty-store)

## Store Links

- **China Store**: https://shop300502436.world.taobao.com/
- **International Store**: https://intl.unincore.cn

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Project Structure

```
beauty-store/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Home page with region selection
│   └── globals.css      # Global styles
├── public/              # Static assets
├── vercel.json          # Vercel configuration
└── package.json         # Dependencies
```

## Customization

To customize the store links, edit `app/page.tsx`:

- China store link: Line 20
- International store link: Line 36

To customize the metadata (title, description), edit `app/layout.tsx`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
