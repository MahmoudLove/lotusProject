import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <>
      <h1>Page not found Go to Lotus Store Main Page </h1>
      <Link to={'/'}>Lotus Store</Link>
    </>
  );
}
export default NotFoundPage;
