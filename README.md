**How to view the website locally**

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

You can then view the website on `localhost:8080` in your web browser.


Build tool: Vite (React + TypeScript)
Framework: React 18
Language: TypeScript
Routing: react-router-dom
Data / async state: @tanstack/react-query
Styling: Tailwind CSS + custom utility classes (bg-paper, text-ink, etc.)
UI primitives: shadcn-inspired components under src/components/ui
Animations: framer-motion

Note: Assets used in the pages live under src/assets/ (e.g. logo.png, home-background.jpg)


project structure:

src
├── App.tsx                      # Root application shell. Sets up routing, providers (React Query, Tooltip),
│                                # global toasts, cursor effects, waitlist button, navigation & footer.
│
├── main.tsx                     # React entry point.
├── index.css                    # Global Tailwind imports + custom utilities.
│
├── assets/                      # All static images used throughout the site.
│   ├── logo.png                 # CrossRoads logo (used in nav).
│   ├── home-background.jpg      # Hero background on Home page.
│   ├── about-hero.jpg           # Large cinematic visual break on About page.
│   ├── app-preview/             # Screenshots for the horizontal scroll app preview.
│   └── team-pics/               # Team member photos for Meet The Team section.
│
├── components/                  # All reusable components for the site.
│   ├── CursorSpotlight.tsx      # Decorative spotlight following the cursor around the page.
│   ├── Footer.tsx               # Global footer with quick links, contact, social icons, copyright.
│   ├── Navigation.tsx           # Responsive navigation bar with dropdowns, mobile menu, logo animation.
│   ├── NavLink.tsx              # Custom wrapper for cleaner link styling.
│   ├── ScrapbookCard.tsx        # Scrapbook/polaroid/washi-style card wrapper for collage visuals.
│   ├── StickyWaitlistBtn.tsx    # Floating CTA button that jumps to the waitlist section.
│   ├── WaitlistForm.tsx         # Waitlist form (name/email/phone/beta interest). Currently frontend-only.
│   │
│   └── ui/                      
│       └── ...others         
│
├── hooks/                       # Custom hooks (if used in future). Currently minimal/placeholder folder.
│
├── lib/                         # Utility functions used across components.
│   └── utils.ts                 
│
└── pages/                       # Route-level pages rendered via react-router.
    ├── Home.tsx                 # Full marketing landing page. Hero, description, preview carousel,
    │                            # diagonal problem/solution sections, and waitlist form.
    │
    ├── About.tsx                # Company story, mission, purpose, cinematic visuals, and team section.
    │
    └── NotFound.tsx             
