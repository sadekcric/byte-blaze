import { useEffect, useState } from "react";
import { getItems, deleteBlog } from "../Utils/localStorage";
import BookmarkCart from "../Components/BookmarkCart";
import { Link } from "react-router-dom";

const BookMarks = () => {
  const [bookmarks, setBookmark] = useState([]);
  useEffect(() => {
    setBookmark(getItems());
  }, []);

  const handleRemove = (id) => {
    deleteBlog(id);
    setBookmark(getItems());
  };

  if (!bookmarks.length)
    return (
      <div className="flex h-[calc(100vh-116px)] justify-center items-center flex-col gap-5">
        <h1 className=" text-5xl text-gray-500 font-bold">Empty BookMark!</h1>

        <Link to="/blogs" className="relative inline-block text-lg group">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-secondary rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-primary group-hover:-rotate-180 ease"></span>
            <span className="relative">Read Blogs</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-primary rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </Link>
      </div>
    );

  return (
    <div className="grid grid-cols-1 w-3/4 mx-auto sm:grid-cols-2 lg:grid-cols-3 mt-5">
      {bookmarks.map((blog) => (
        <BookmarkCart key={blog.id} blog={blog} handleRemove={handleRemove} />
      ))}
    </div>
  );
};

export default BookMarks;
