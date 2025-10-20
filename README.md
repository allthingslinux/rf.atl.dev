# RF ATL Dev

A SvelteKit application for RF (Radio Frequency) development, powered by [`sv`](https://github.com/sveltejs/cli) and deployed on Cloudflare Workers.

## Features

- ⚡ **SvelteKit** - Modern web framework with SSR/SSG
- ☁️ **Cloudflare Workers** - Edge deployment for global performance
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📱 **Responsive Design** - Works on all devices
- 🚀 **Fast Builds** - Optimized for development and production

## Development

### Prerequisites

- Node.js 18+
- npm

### Local Development

1. **Clone and install dependencies:**

```bash
git clone <repository-url>
cd rf.atl.dev
npm install
```

2. **Start development server:**

```bash
npm run dev
```

3. **Preview Cloudflare Worker locally:**

```bash
npm run preview:worker
```

This builds the project and starts a local Cloudflare Worker at `http://127.0.0.1:8787`

## Building & Deployment

### Building for Production

```bash
npm run build
```

This creates an optimized build using the `@sveltejs/adapter-cloudflare` adapter.

### Preview Production Build

```bash
npm run preview
```

### Cloudflare Configuration

The project includes a `wrangler.toml` configuration file with:

- **Cloudflare Workers** deployment target
- **Static asset serving** for CSS, JS, and images
- **Node.js compatibility** flags
- **No sensitive data** - safe for public repositories

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run preview:worker` - Preview as Cloudflare Worker locally
- `npm run deploy:worker` - Build and deploy to Cloudflare Workers
- `npm run check` - Run type checking
- `npm run format` - Format code with Prettier
- `npm run lint` - Check code formatting
