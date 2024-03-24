import { useLoaderData } from "react-router-dom";
import placeholderImg from "../assets/404.jpg";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Content = () => {
  const blog = useLoaderData();
  const { cover_image, tags, title, body_html } = blog;

  console.log(blog);

  return (
    <div className=" overflow-hidden hover:no-underline focus:no-underline border-2 border-opacity-30 border-secondary p-4  ">
      <img role="presentation" className="object-cover w-full rounded " src={cover_image || placeholderImg} />
      <div className="p-6 space-y-2">
        <div className="flex flex-wrap py-6 gap-2  dark:border-gray-600">
          {tags.map((tag, idx) => (
            <a
              key={idx}
              rel="noopener noreferrer"
              href="#"
              className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50"
            >
              #{tag}
            </a>
          ))}
        </div>

        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>

        {/* <p>{description}</p> */}
      </div>

      <Markdown rehypePlugins={rehypeRaw}>{body_html}</Markdown>
    </div>
  );
};

export default Content;
