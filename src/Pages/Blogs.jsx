import { Link, useLoaderData, useNavigation } from "react-router-dom";
import Blog from "../Components/Blog";
import UseLoader from "../Components/UseLoader";

const Blogs = () => {
  const navigation = useNavigation();
  const data = useLoaderData();

  if (navigation.state === "loading") return <UseLoader />;
  return (
    <section>
      <div className=" max-w-7xl p-6 mx-auto space-y-6 sm:space-y-12">
        <Link
          rel="noopener noreferrer"
          to={`/blogs/${data[0].id}`}
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 "
        >
          <img src={data[0].cover_image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7" />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{data[0].title}</h3>
            <span className="text-xs ">{new Date(data[0].created_at).toLocaleDateString()}</span>
            <p>{data[0].description}</p>
          </div>
        </Link>

        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((blog) => (
            <Blog key={blog.id} blog={blog} />
          ))}
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-900 dark:bg-gray-50 text-gray-400 dark:text-gray-600"
          >
            Load more posts...
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
