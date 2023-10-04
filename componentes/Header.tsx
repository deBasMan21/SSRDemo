import Link from "next/link";

const Header = () => {
    return (
        <div className="flex justitfy-evenly w-full">
            <Link href={"/demo"}>Demo</Link>
            <Link href={"/example"}>Example</Link>
        </div>
    )
}

export default Header;