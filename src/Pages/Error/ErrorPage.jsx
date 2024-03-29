
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    /* Error Page Container */
    <div>
      {/* Error Image */}
      <img className='h-[800px] min-w-full -mt-28 bg-base-300' src="https://i.ibb.co/L5hKLqz/vecteezy-404-error-page-error-page-error-web-page-404-error-web-page-23359453.png" alt="" />

      {/* Go Home Button */}
      <div className="flex items-center justify-center -mt-40">
        {/* Link to Home Page */}
        <Link to="/">
          {/* Go Home Button */}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
