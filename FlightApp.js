import React from "react";
import "./FlightApp.css";




const FlightApp = () =>{
    
    return (
        
        <React.Fragment>
            <section>
                <form>
                    <div className="input">
                    <div>
                        <h2>Flight Booking</h2>
                        </div>
                        <div>
                            <label>Round Trip</label>
                            <input type="radio" name="r" value="Round Trip" />

                            <label>One Way</label>
                            <input type="radio" name="r" value="One Way" />

                            
                        </div>

                        <div id="input1">
                            <input type="text" id="input-group" placeholder="From"/>
                            <input type="text" id="input-group" placeholder="To"/>
                            <input type="text" id="input-group" placeholder="Departure Date"/>
                            <input type="text" id="input-group" placeholder="Departure Time"/>

                            <select id="input-group">
                                <option value="">Preffered Airline</option>
                                <option value="">Indigo</option>
                                <option value="">Air India</option>
                                <option value="">Space jet</option>
                                <option value="">Private Flight</option>
                            </select>

                            <select id="input-group">
                                <option value="">Preffered Seating</option>
                                <option value="">Economy Class</option>
                                <option value="">Business Class</option>
                                <option value="">First Class</option>
                            </select>

                            <div id="input2">
                                <input type="number" id="input-group" placeholder="Adult"/>
                                <input type="number" id="input-group" placeholder="Children(2-11years)"/>
                                <input type="number" id="input-group" placeholder="Infant(under 2years)"/>
                            </div>

                            <div id="input3">
                                <input type="text" id="input-group" placeholder="Return Date"/>
                                <input type="text" id="input-group" placeholder="Return Time"/>
                                
                            </div>

                            <div id="input4">
                                <input type="text" id="input-group" placeholder="Any Message"/>
                            </div>

                            <div>
                                <h2>Personal Details</h2>
                            </div>

                            <div id="input5">
                                <input type="text" id="input-group" placeholder="Full Name"/>
                                <input type="number" id="input-group" placeholder="Contact Number"/>
                                
                            </div>
                            <div id="input6">
                                <input type="email" id="input-group" placeholder="Email Id"/>
                                <input type="email" id="input-group" placeholder="Confirm email Id" />
                            </div>

                            <div id="input7">
                                <input type="date" size="30" id="input-group" min="1960-01-01" max="2023-01-01" />
                                <input type="text" id="input-group" placeholder="Enter Passport Number" />
                            </div>

                            <div id="input8">
                                <input type="text" id="input-group" placeholder="Current Address"/>
                                <input type="text" id="input-group" placeholder="Permanent Address"/>
                            </div>

                            
                            <div>
                                <button type="submit" class="btn btn-primary text-white">Submit Form</button>
                                
                                <button type="reset" class="btn btn-primary text-white">Clear Form</button>
                                
                            </div>
                            
                            
    

                        </div>
                        
                        

                    </div>
                        
                        
                    
                </form>
            </section>
        </React.Fragment>
        

    );

};
export default FlightApp;