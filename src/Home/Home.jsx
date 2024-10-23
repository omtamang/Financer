import Charts from "../Charts/Charts";
import Farmexp from "../Form/Expenses/Farmexp";
import Header from "../Header/Header";


export default function Home(){
    return(
        <div>
            <Header/>
            <div className="flex-row md:flex w-full container">
                <div className="w-1/2 md:mr-7 border rounded-lg shadow-lg p-11">
                    <Charts/>
                </div>

                <div className="md:w-1/2 text-center border rounded-xl shadow-lg p-11">
                    <Farmexp/>
                </div>
            </div>

        </div>
    )
}