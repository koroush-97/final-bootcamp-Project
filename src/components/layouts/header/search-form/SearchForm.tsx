import { IconBox } from "@/components/common/ui";

export function SearchForm() {
  // TODO should implement form
  return (
    <div className="hidden md:flex w-[700px] h-[50px] flex-row items-center">
      <form
        name="search-form"
        action="#"
        method="post"
        className="flex items-center w-full h-full"
      >
        <input
          type="search"
          placeholder="search for items ..."
          className="hidden md:block w-full p-4 border-2 border-gray-500 rounded-sm border-r-0"
        />
        <button
          type="submit"
          className="hidden md:block border-2 border-gray-500 rounded-sm p-4 border-l-0"
        >
          <IconBox />
        </button>
      </form>
    </div>
  );
}
