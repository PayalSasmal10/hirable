import { useState } from "react";
import jobDetails from "../mock data/JobDetailsMockData.json";
import './freelancer.css';

export const Freelancer= () => {

    return(
        <div>
        <main>
            <div>

            {jobDetails.map((jobdetail) => {
                return(

               <div key={jobdetail.guid} className="card">
                    <div className="container">
                        {jobdetail.company}
                    </div>
               </div> 
                );
            })}
            </div>

        </main>
        </div>
    );

};
