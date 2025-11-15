export default function GitHubRepo() {
  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc' }}>
      <h2>Project Information</h2>
      <p>
        This is my Next.js assignment project. For my final project, I'm interested in exploring 
        <strong> efficient daily calorie counting </strong>.I plan to create a webpage that will have useful Information about food and help people with there dieting.      </p>
      <p>
        View the code on GitHub:{' '}
        <a 
          href="https://github.com/wsaac/nextjs-project" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          https://github.com/wsaac/nextjs-project
        </a>
      </p>
    </div>
  );
}