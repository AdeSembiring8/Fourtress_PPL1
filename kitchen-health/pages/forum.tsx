import React from 'react';

const ForumPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <header className="bg-red-600 py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">Forum</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-white hover:text-red-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-red-200">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-red-200">
                  Login
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="bg-red-100 rounded p-4">
              <h2 className="text-lg font-bold text-red-600 mb-4">Categories</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-red-600 hover:underline">
                    General Discussion
                  </a>
                </li>
                <li>
                  <a href="#" className="text-red-600 hover:underline">
                    Technical Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-red-600 hover:underline">
                    Announcements
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-red-100 rounded p-4">
              <h2 className="text-lg font-bold text-red-600 mb-4">Latest Posts</h2>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="text-lg font-semibold text-red-600 mb-2">Post Title 1</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem ac nisi gravida luctus.
                  </p>
                  <a href="#" className="text-red-600 hover:underline">
                    Read more
                  </a>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-lg font-semibold text-red-600 mb-2">Post Title 2</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem ac nisi gravida luctus.
                  </p>
                  <a href="#" className="text-red-600 hover:underline">
                    Read more
                  </a>
                </div>
                <div className="border-b pb-4">
                  <h3 className="text-lg font-semibold text-red-600 mb-2">Post Title 3</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem ac nisi gravida luctus.
                  </p>
                  <a href="#" className="text-red-600 hover:underline">
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ForumPage;