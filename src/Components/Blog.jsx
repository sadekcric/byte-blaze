import { Link } from "react-router-dom";
import placeholderImg from "../assets/404.jpg";

const Blog = ({ blog }) => {
  const { id, cover_image, title, description, published_at } = blog;

  return (
    <Link
      to={`/blogs/${id}`}
      className="max-w-sm mx-auto group hover:no-underline focus:no-underline transition border-2 border-opacity-30 hover:border-primary border-secondary p-4 hover:scale-105 "
    >
      <img role="presentation" className="object-cover w-full rounded h-44 " src={cover_image || placeholderImg} />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
        <span className="text-xs text-gray-400 dark:text-gray-600">{new Date(published_at).toLocaleDateString()}</span>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default Blog;
