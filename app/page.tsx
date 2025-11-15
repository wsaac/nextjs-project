import Counter from './components/Counter';
import GitHubRepo from './components/GitHubRepo';
import ProductStore from './components/Store';

export default function Home() {
  return (
    <main style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>NextJS Assignment</h1>
      <p>Welcome to my Next.js application with React components</p>
      
      <h2>Counter Components</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        <Counter incrementBy={1} buttonColor="lightblue" />
        <Counter incrementBy={2} buttonColor="lightgreen" />
      </div>
      
      <GitHubRepo />
      <ProductStore />
    </main>
  );
}