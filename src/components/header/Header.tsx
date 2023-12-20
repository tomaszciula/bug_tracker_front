import Image from "next/image";
import bug from "./../../../public/assets/14410.png"

const Header = () => {
    return (
        <div className="w-full p-5 flex">
            <Image className="" src={bug} alt="bug" width={30} height={30}/>
            <p className="ml-5 text-3xl font-bold font-mono">BUG - TRACKER</p>
        </div>
    );
}
 
export default Header;