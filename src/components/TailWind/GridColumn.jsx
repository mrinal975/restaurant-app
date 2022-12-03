import React from "react";

const GridColumns =()=>{
    return (
        <>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1
             text-[white] gap-5">
                <div className="bg-[green] text-center py-5 col-start-1" >
                Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
                since the 1500s, when an unknown printer took a galley of type and scrambled it to 
                make a type specimen book.
                </div>
                
                <div className="bg-[green] text-center py-5" >
                Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
                since the 1500s, when an unknown printer took a galley of type and scrambled it to 
                make a type specimen book.
                </div>
                <div className="bg-[green] text-center py-5" >
                Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
                since the 1500s, when an unknown printer took a galley of type and scrambled it to 
                make a type specimen book.
                </div>
                <div className="bg-[green] text-center py-5" >
                Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
                since the 1500s, when an unknown printer took a galley of type and scrambled it to 
                make a type specimen book.
                </div>
                <div className="bg-[green] text-center py-5" >
                Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
                since the 1500s, when an unknown printer took a galley of type and scrambled it to 
                make a type specimen book.
                </div>
                <div className="bg-[green] text-center py-5" >
                Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
                since the 1500s, when an unknown printer took a galley of type and scrambled it to 
                make a type specimen book.
                </div>
                <div className="bg-[green] text-center py-5" >
                Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
                since the 1500s, when an unknown printer took a galley of type and scrambled it to 
                make a type specimen book.
                </div>


            </div>

            <div className="grid grid-row-3 grid-rows-3 grid-flow-col gap-5 py-5">
                <div className="bg-[green] py-5 text-center ">
                1 Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry.
                </div>

                <div className="bg-[green] row-span-2 py-5 text-center ">
                2 Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry.
                </div>
                <div className="bg-[green] py-5 text-center ">
                3 Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry.
                </div>
                <div className="bg-[green] py-5 text-center ">
                4 Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry.
                </div>
                <div className="bg-[green] py-5 text-center ">
                5 Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry.
                </div>
                <div className="bg-[green] py-5 text-center ">
                6 Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry.
                </div>

            </div>
        </>
    );
}

export default GridColumns;