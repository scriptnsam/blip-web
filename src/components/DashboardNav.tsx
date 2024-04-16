import { Settings, UserProfile } from "../components/icons/icons"

interface Props {
    logo: string;
}

const DashboardNav: React.FC<Props> = ({ logo }) => {
    return (
        <>
            <div className=" p-2 w-[100%] h-14 m-auto shadow flex items-center font-dosis backdrop-blur ">
                <div className="border p-3 font-bold text-xl w-32 text-center font-mono text-gray-800">{logo} Blip</div>
                <div className="flex w-[100%] justify-center space-x-5 px-2 text-xl ">
                    <div className="icon-merge"><Settings width={20} height={20} />Settings</div>
                    <div className="icon-merge"><UserProfile width={20} height={20} />User</div>
                </div>
            </div>
            <div className="w-[15%] border border-black h-screen absolute p-2 space-y-2 ">
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
                <div>Dashboard</div>
            </div>
        </>
    )
}

export default DashboardNav