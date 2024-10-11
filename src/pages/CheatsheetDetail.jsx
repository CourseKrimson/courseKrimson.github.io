import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import cheatsheets from '@/data/cheatsheetsData';
import { marked } from 'marked';

function CheatsheetDetail() {
  const { cheatsheetName } = useParams();
  const cheatsheetKey = cheatsheetName.toLowerCase();
  const cheatsheet = cheatsheets[cheatsheetKey];

  const [content, setContent] = useState('');

  // Check if cheatsheet exists
  if (!cheatsheet) {
    return <h2 className="text-center">Cheatsheet not found</h2>;
  }

  // Fetch the Markdown file
  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(`/cheatsheets/${cheatsheet.contentFile}`); // Use the contentFile property
        if (!response.ok) {
          throw new Error(`Error fetching markdown file: ${response.status}`);
        }
        const text = await response.text();
        setContent(marked(text)); // Convert Markdown to HTML
        // console.log('Markdown content:', marked(text)); // Log the converted content
      } catch (error) {
        console.error('Error fetching the markdown file:', error);
      }
    };
    fetchMarkdown();
  }, [cheatsheet.contentFile]);

  return (
    <div className="container mt-5">
      {/* <h1>{cheatsheet.title}</h1>
      <p>{cheatsheet.description}</p> */}
      <div dangerouslySetInnerHTML={{ __html: content }} /> {/* Render the converted content */}
    </div>
  );
}

export default CheatsheetDetail;