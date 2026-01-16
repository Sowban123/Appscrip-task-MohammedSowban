import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Project Info */}
          <div>
            <h4 className="text-sm font-semibold mb-2 uppercase">
              About This Project
            </h4>
            <p className="text-gray-400 text-sm">
              This Product Listing Page is built using Next.js with Server Side
              Rendering (SSR), responsive design, and SEO best practices as part
              of the Appscrip frontend technical assessment.
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-sm font-semibold mb-3 uppercase">
              Tech Stack
            </h4>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>Next.js 14 (SSR)</li>
              <li>React + TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Fake Store API</li>
            </ul>
          </div>

          {/* Developer Info */}
          <div>
            <h4 className="text-sm font-semibold mb-3 uppercase">
              Developer
            </h4>
            <p className="text-gray-400 text-sm">
              P.S. Mohammed Sowban
            </p>
            <p className="text-gray-400 text-sm">
              Frontend / Full Stack Developer (Django + React)
            </p>
            <Link
              href="https://github.com/Sowban123"
              target="_blank"
              className="text-sm text-gray-400 hover:text-white underline"
            >
              View GitHub Profile
            </Link>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-700 my-10"></div>

        {/* BOTTOM */}
        <div className="text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} Appscrip Frontend Task – Product Listing Page.  
          Built for technical evaluation purposes only.
        </div>
      </div>
    </footer>
  );
}
