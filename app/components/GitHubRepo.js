export default function GitHubRepo() {
  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc' }}>
      <h2>Project Information</h2>
      <p>
        This is my Next.js assignment project. For my final project, I'm interested in exploring 
        <strong> real-time data visualization with WebSockets and D3.js</strong>. I plan to create 
        an interactive dashboard that showcases live data updates, dynamic charts, and user 
        interactions to demonstrate modern web development techniques for data presentation.
      </p>
      <p>
        View the code on GitHub:{' '}
        <a 
          href="https://github.com/wsaac/nextjs-assignment" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          https://github.com/yourusername/nextjs-assignment
        </a>
      </p>
    </div>
  );
}