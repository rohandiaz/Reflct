import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import "react-quill-new/dist/quill.snow.css";
// import '@fortawesome/fontawesome-free/css/all.min.css';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reflct",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
    // appearance={{
    //   baseTheme: shadesOfPurple,
    //   variables: {
    //     colorPrimary: "#3b82f6",
    //     colorBackground: "#1a202c",
    //     colorInputBackground: "#2D3748",
    //     colorInputText: "#F3F4F6",
    //   },
    //   elements: {
    //     formButtonPrimary: "bg-purple-600 hover:bg-purple-700 text-white",
    //     card: "bg-gray-800",
    //     headerTitle: "text-blue-400",
    //     headerSubtitle: "text-gray-400",
    //   },
    // }}
    >
      <html lang="en">
        <body
          className={`${inter.className} bg-gradient-to-b from-orange-50 via-amber-50 to-orange-50`}
        >
          <div className="inset-0 bg-[url('/bg.jpg')] opacity-50 fixed -z-10" />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Toaster richColors />

          <footer className="bg-orange-300 py-12 bg-opacity-10">
            <div className="container mx-auto px-4 flex justify-between items-center text-gray-900">
              <p>Made with 💗 by HumbleRohan</p>
              <div className="flex space-x-6">
                <a
                  href="https://www.linkedin.com/in/rohan-das-b19a64269/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-900 hover:text-blue-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.72C24 .77 23.21 0 22.23 0zM7.08 20.45H3.56V9h3.52v11.45zM5.32 7.62a2.03 2.03 0 110-4.06 2.03 2.03 0 010 4.06zM20.45 20.45h-3.54v-5.41c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.41-2.07 2.87v5.49h-3.54V9h3.4v1.56h.05c.47-.89 1.63-1.8 3.36-1.8 3.6 0 4.27 2.37 4.27 5.46v6.23z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/Rohan_Das69"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="text-gray-900 hover:text-blue-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.56c-.89.39-1.84.65-2.84.77 1.02-.61 1.8-1.58 2.17-2.73-.95.56-2.01.96-3.13 1.18-.9-.96-2.18-1.56-3.6-1.56-2.73 0-4.95 2.22-4.95 4.95 0 .39.04.77.12 1.13-4.11-.21-7.75-2.17-10.19-5.15-.43.74-.68 1.6-.68 2.52 0 1.74.89 3.28 2.24 4.18-.82-.03-1.59-.25-2.27-.63v.06c0 2.43 1.73 4.46 4.02 4.91-.42.11-.87.16-1.33.16-.33 0-.64-.03-.95-.09.64 2 2.5 3.46 4.7 3.5-1.73 1.35-3.91 2.16-6.28 2.16-.41 0-.81-.02-1.21-.07 2.24 1.44 4.9 2.28 7.77 2.28 9.32 0 14.41-7.72 14.41-14.41 0-.22 0-.44-.02-.66.99-.71 1.85-1.6 2.53-2.62z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/rohandiaz"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-gray-900 hover:text-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.725-4.033-1.416-4.033-1.416-.546-1.386-1.333-1.754-1.333-1.754-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.306-5.466-1.334-5.466-5.93 0-1.31.467-2.381 1.236-3.221-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.53 11.53 0 013.003-.404c1.018.005 2.044.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.242 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.62-5.473 5.92.43.372.814 1.102.814 2.222v3.293c0 .321.218.694.825.576C20.565 22.092 24 17.593 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </div>
            </div>
          </footer>




        </body>
      </html>
    </ClerkProvider>
  );
}
