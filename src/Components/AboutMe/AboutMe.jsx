import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const AboutMe = () => {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    const fetchMarkdownContent = async () => {
      try {
        const response = await fetch('/aboutMe.md');
        const text = await response.text();
        setMarkdownContent(text);
      } catch (error) {
        console.error('Error loading Markdown content:', error);
      }
    };

    fetchMarkdownContent();
  }, []);

  return (
    <div className="mx-5 lg:mx-5 min-h-screen">
      <h1 className="text-3xl font-bold border-b-4 border-orange-400 py-2 mb-5">
        About Me
      </h1>
      <div className=" flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row-reverse justify-between items-center">
          <div>
            <img
              src="/public/Profile.png"
              className="max-w-sm lg:max-w-md mx-0 lg:mx-10 rounded-lg mt-10 lg:mt-0 shadow-none"
              alt="Profile"
            />
          </div>
          <div className="mt-10 lg:mt-0 px-10  bg-black rounded-lg text-justify">
            <div className="py-6 px-6 lg:px-0 text-lg text-white ">
              <ReactMarkdown plugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
