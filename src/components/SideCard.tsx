import ChartCard from "./ChartCard"


function SideCard() {
    return (
        <div className="h-[80vh] bg-[#242526] p-3 rounded-xl" >
            <ChartCard />
            <div className="mt-3">
            <ChartCard />
            </div>
        </div>
    )
}


export default SideCard