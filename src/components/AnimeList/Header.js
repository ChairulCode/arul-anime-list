import Link from "next/link";
const Header = ({ title, linkhref, linkTitle }) => {
  return (
    <div className="p-4 flex justify-between items-center">
      <h1 className="font-bold text-2xl ">{title}</h1>
      <Link
        href={linkhref}
        className="md:text-xl text-md hover:text-indigo-400 underline transition-all"
      >
        {linkTitle}
      </Link>
    </div>
  );
};

export default Header;
