import { Link } from "react-router-dom";
import placeholderImg from "../assets/404.jpg";
import { MdDeleteForever } from "react-icons/md";

const BookmarkCart = ({ blog, handleRemove }) => {
  const { id, cover_image, title, published_at, description } = blog;

  return (
    <div className="relative  max-w-sm mx-auto p-4  border-2 border-opacity-30 hover:border-primary border-secondary  hover:no-underline focus:no-underline ">
      <Link to={`/blogs/${id}`} className=" ">
        <img role="presentation" className="object-cover w-full rounded h-44 " src={cover_image || placeholderImg} />
        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
          <span className="text-xs text-gray-400 dark:text-gray-600">{new Date(published_at).toLocaleDateString()}</span>
          <p>{description}</p>
        </div>
      </Link>
      <div onClick={() => handleRemove(blog)} className="absolute -top-5 -right-5 bg-secondary group p-3 rounded-full hover:bg-primary ">
        <MdDeleteForever className="text-lg text-primary group-hover:text-secondary" />
      </div>
    </div>
  );
};

export default BookmarkCart;
