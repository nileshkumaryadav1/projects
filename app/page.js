'use client';

import { useState } from 'react';

const pages = [
  { id: 'academic', name: 'Academic Finder', content: 'https://academicfinder.vercel.app' },
  { id: 'college', name: 'College Finder', content: 'https://collegefinder.vercel.app' },
  { id: 'blogapp', name: 'Blog App', content: 'https://blogwriting.vercel.app' },
  { id: 'portfolio', name: 'Portfolio', content: 'https://nileshkumar.vercel.app' },
  { id: 'about', name: 'About', content: '/about' }
];

export default function Page() {
  const [activePage, setActivePage] = useState('academic');

  return (
    <div className="md:flex md:flex-row items-start md:p-5 bg-gray-100 md:min-h-screen">
      {/* Left Sidebar Navigation */}
      <div className="flex flex-col md:w-1/4 p-4 md:mr-5 mb-2 bg-white rounded-lg shadow-md overflow-hidden">
        <h2 className="text-lg font-semibold text-gray-700 mb-2 text-center">Navigation</h2>
        {pages.map((page) => (
          <button
            key={page.id}
            onClick={() => setActivePage(page.id)}
            className={`px-4 py-3 m-1 w-full text-left transition-all font-medium text-gray-800 flex items-center ${
              activePage === page.id ? 'bg-blue-600 text-white shadow-md border-r-4 border-blue-600' : 'bg-gray-200 hover:bg-gray-300'
            } ${activePage === page.id ? 'rounded-r-none' : 'rounded-lg'}`}
            style={{ borderTopRightRadius: activePage === page.id ? '0' : '', borderBottomRightRadius: activePage === page.id ? '0' : '', marginRight: activePage === page.id ? '-4px' : '0' }}
          >
            {page.name}
          </button>
        ))}
      </div>

      {/* Content Display Area */}
      <div className="p-3 md:w-3/4 md:max-w-5xl rounded-lg shadow-xl bg-white flex flex-col items-center" style={{ marginLeft: '-4px' }}>
        {/* <h4 className="text-xl font-semibold text-gray-800 mb-4">{pages.find((page) => page.id === activePage)?.name}</h4> */}
        <a href={pages.find((page) => page.id === activePage)?.content} target='_blank' >Visit full Website➡️</a>
        <iframe src={pages.find((page) => page.id === activePage)?.content} width="100%" height="600px" style={{ border: 'none', borderRadius: '10px' }} />
      </div>
    </div>
  );
}
