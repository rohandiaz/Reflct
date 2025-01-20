# Reflct - Your Personal Journal App

Reflct is a Next.js-based journal application designed to help you document your thoughts, ideas, and memories. Whether you’re journaling for self-reflection, planning, or tracking your day, Reflct offers a clean and intuitive experience.

---

## Features

- 📝 Create, edit, and delete journal entries.
- 📅 Organize entries by date with a calendar view.
- 🔍 Search and filter through journal entries.

---

## Tech Stack

- **Frontend**: Next.js, React
- **Styling**: Tailwind CSS (or your preferred CSS framework)
- **Backend**: Next.js API Routes
- **Database**: Prisma with NeonDB (Postgres)
- **Authentication**: Clerk (optional)

---

## Getting Started

Follow these steps to run the project locally:

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn
- Git
- NeonDB (Postgres) account

### Clone the Repository

```bash
git clone https://github.com/rohandiaz/Reflct.git
cd reflct
npm install
```


### Make sure to create a `.env` file with following variables -

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

DATABASE_URL=

PIXABAY_API_KEY=

ARCJET_KEY=
```
