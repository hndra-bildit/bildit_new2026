import ComparisonTable from "../components/ComparisonTable";
import DisplayOne from "../components/DisplayOne";

export default function Comparison(){
    return (
        <>
            <section className="text-center bg-[url('/images/BG_CMS-Comparison.png')] py-[54px] md:py-[200px] bg-cover bg-center">
                <div className="container mx-auto px-3 lg:px-0 pt-[160px]">
                    <DisplayOne content="Content Management System Comparisons"/>
                    <ComparisonTable/>
                </div>

            </section>
        </>
    )
}