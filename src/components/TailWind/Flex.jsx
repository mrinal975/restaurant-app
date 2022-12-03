import React from "react";

const Flex =()=>{
    return (
        <div>
           <div className="flex">
                <div className="grow h-14 bg-blue">
                        01
                    </div>
                    <div className="grow-0 h-14 ...">
                        02
                    </div>
                    <div className="grow h-14 ...">
                        03
                </div>
            </div>
        </div>
    );
}

export default Flex;