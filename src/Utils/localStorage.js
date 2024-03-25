import toast from "react-hot-toast";

const getItems = () => {
  const storedItem = localStorage.getItem("bookmarks");

  if (storedItem) {
    return JSON.parse(storedItem);
  }

  return [];
};

const setItem = (blog) => {
  const blogs = getItems();

  const find = blogs.find((b) => b.id === blog.id);

  if (find) {
    toast.error("Blog Already Stored.");
  } else {
    blogs.push(blog);
    localStorage.setItem("bookmarks", JSON.stringify(blogs));
    toast.success("Successfully Added in Bookmark!");
  }
};

const deleteBlog = (blog) => {
  const blogs = getItems();
  const remaining = blogs.filter((b) => b.id !== blog.id);
  localStorage.setItem("bookmarks", JSON.stringify(remaining));
  toast.success("Item Remove Successfully!");
};
export { getItems, setItem, deleteBlog };
