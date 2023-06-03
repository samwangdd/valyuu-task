This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.


## File Structure

```shell
.
├── app               # App Routes, includes business page
│   ├── page.tsx      # main Page
│   └── sell          # sell Page
├── components        # global common components
├── hooks             # hooks
├── public            # public assets
│   └── fonts
├── styles            # styles
│   ├── customComponent.css   # custom component styles, for Tailwind CSS
│   └── globals.css           # init styles, CSS alias
├── next.config.js            
├── tailwind.config.js        # custom Tailwind CSS style, e.g. color, font
├── postcss.config.js
├── package.json
└── tsconfig.json
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
