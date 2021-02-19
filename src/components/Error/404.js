import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <>
      <p>page not found...</p>
      <Link to='/'>return home</Link>
    </>
  );
};

export default Error;
