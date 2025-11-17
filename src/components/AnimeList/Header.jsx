import Link from "next/link";
const Header = ({ title, linkhref, linkTitle }) => {
  return (
    <div className="p-4 flex justify-between items-center">
      <h1 className="font-bold text-2xl text-primary ">{title}</h1>
      {linkhref && linkTitle ? (
        <Link
          href={linkhref}
          className="md:text-xl text-md hover:text-accent underline transition-all text-primary"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
