import Link from "next/link";

export function Header() {
  return (
    <header className="row-start-3 flex gap-6 pt-6 pb-4 flex-wrap items-center justify-center">
      <Link className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="/">

        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M3 11.8284C3 11.2979 3.21071 10.7892 3.58579 10.4142L10.5858 3.41416C11.3668 2.63311 12.6332 2.63311 13.4142 3.41416L20.4142 10.4142C20.7893 10.7892 21 11.2979 21 11.8284V20C21 20.5522 20.5523 21 20 21H14C13.4477 21 13 20.5522 13 20V15H11V20C11 20.5522 10.5523 21 10 21H4C3.44772 21 3 20.5522 3 20V11.8284ZM12 4.82837L5 11.8284V19H9V13.9999C9 13.4477 9.44772 12.9999 10 12.9999H14C14.5523 12.9999 15 13.4477 15 13.9999V19H19V11.8284L12 4.82837Z" fill="black" />
        </svg>
        Home
      </Link>


      <Link className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="/blog">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.0009 14C14.0009 14.5523 13.5532 15 13.0009 15L9.00092 15C8.44863 15 8.00092 14.5523 8.00092 14C8.00092 13.4477 8.44863 13 9.00092 13H13.0009C13.5532 13 14.0009 13.4477 14.0009 14Z" fill="black" />
          <path d="M16.0009 9.99999C16.0009 10.5523 15.5532 11 15.0009 11L9.00092 11C8.44863 11 8.00092 10.5523 8.00092 9.99999C8.00092 9.4477 8.44863 8.99999 9.00092 8.99999H15.0009C15.5532 8.99999 16.0009 9.4477 16.0009 9.99999Z" fill="black" />
          <path fillRule="evenodd" clipRule="evenodd" d="M19.4151 6.4142C19.7902 6.78927 20.0009 7.29798 20.0009 7.82841L20.0009 20C20.0009 21.1046 19.1055 22 18.0009 22H6.00092C4.89635 22 4.00092 21.1046 4.00092 20L4.00092 3.99998C4.00092 2.89541 4.89635 1.99998 6.00092 1.99998L14.1725 1.99998C14.7029 1.99998 15.2116 2.21069 15.5867 2.58576L19.4151 6.4142ZM18.0009 7.82841L18.0009 20H6.00092L6.00092 3.99998L14.1725 3.99998L18.0009 7.82841Z" fill="black" />
        </svg>
        Blog
      </Link>

      <Link className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="/about">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z" fill="black" />
          <path fillRule="evenodd" clipRule="evenodd" d="M20 17.1666C20 16.7333 19.8642 16.3074 19.5815 15.979C17.7477 13.8488 15.0313 12.5 12 12.5C8.96866 12.5 6.25235 13.8488 4.41847 15.979C4.13576 16.3074 4 16.7333 4 17.1666V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V17.1666ZM18 17.2083C16.5313 15.5445 14.3887 14.5 12 14.5C9.61132 14.5 7.46872 15.5445 6 17.2083V19H18V17.2083ZM6.00017 17.1622C6.00017 17.1622 6.00018 17.1622 6.00017 17.1623C6.00016 17.1624 6.00015 17.1625 6.00012 17.1627C6.00014 17.1625 6.00016 17.1623 6.00017 17.1622Z" fill="black" />
        </svg>
        About us
      </Link>

      <Link className="flex items-center gap-2 hover:underline hover:underline-offset-4" href="/contact">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
        Contact
      </Link>
    </header>
  );
}

