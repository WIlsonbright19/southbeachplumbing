# South Beach Plumbing and HVAC

Marketing website for South Beach Plumbing and HVAC Inc. The production build is a static site and does not require a server-side API or environment secrets.

## Run Locally

**Prerequisite:** Node.js 20.19+ or 22.12+

1. Install dependencies with `npm install`.
2. Start the development server with `npm run dev`.
3. Create a production build with `npm run build`.

## Deploy

Deploy the contents of the generated `dist` directory to any static web host. No server runtime or environment variables are required. The build uses relative asset paths, so it can also be served from a subdirectory.

For a custom domain, update the canonical URL and social-sharing URLs in `index.html` to match the deployed domain. Hosts that require an explicit publish directory should use `dist`.
