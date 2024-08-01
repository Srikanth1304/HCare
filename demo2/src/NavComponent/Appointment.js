import React from 'react';
import './Appointment.css'

class Appointment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            patient_name: '',
            age: '',
            desc: '',
            phone: '',
            address: '',
            ID: '',
            userTime: '',
            code: '',
            gender: 'M', // Defaulting to Male
            stay_required: 'Yes', // Defaulting to Yes
            email: '',
            warn: '',
            warnAge: '',
            warnDesc: '',
            warnPhone: '',
            warnAddress: '',
            warn_id: '',
            warnTime: '',
            warnCode: ''
        };
    }

    valPatient = () => {
        // Implement your validation logic for patient name here
    }

    valAge = () => {
        // Implement your validation logic for age here
    }

    valDesc = () => {
        // Implement your validation logic for problem description here
    }

    valPhone = () => {
        // Implement your validation logic for phone number here
    }

    valAddress = () => {
        // Implement your validation logic for address here
    }

    valId = () => {
        // Implement your validation logic for ID here
    }

    valCopen = () => {
        // Implement your validation logic for copen code here
    }

    ValTime = () => {
        // Implement your validation logic for time here
    }

    render() {
        return (
            <div>
                
                <form onSubmit={this.valDesc}>
                    <p>Name of the Patient</p>
                    <input type="text" id="patient_name" name="patient_name" required onBlur={this.valPatient} />
                    <p id="warn" style={{ color: 'red' }}>{this.state.warn}</p>

                    <p>Age</p>
                    <input type="number" id="age" name="age" required onBlur={this.valAge} onInput={this.valAge} />
                    <p id="warnAge" style={{ color: 'red' }}>{this.state.warnAge}</p>

                    <p>Gender</p>
                    <select name="gender" required>
                        <option value="M">M</option>
                        <option value="F">F</option>
                        <option value="O">Other</option>
                    </select>

                    <p>Describe the Problem</p>
                    <textarea id="desc" name="problem_description" rows="5" cols="10" required onBlur={this.valDesc} onInput={this.valDesc}></textarea>
                    <p id="warnDesc" style={{ color: 'red' }}>{this.state.warnDesc}</p>

                    <p>Phone Number</p>
                    <input type="text" id="phone" name="phone_number" required onBlur={this.valPhone} onInput={this.valPhone} />
                    <p id="warnPhone" style={{ color: 'red' }}>{this.state.warnPhone}</p>

                    <p>Address</p>
                    <textarea name="address" id="address" rows="4" cols="50" required onBlur={this.valAddress} onInput={this.valAddress}></textarea>
                    <p id="warnAddress" style={{ color: 'red' }}>{this.state.warnAddress}</p>

                    <p>Email</p>
                    <input type="email" name="email" required />

                    <p>Availability</p>
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Doctor</th>
                                <th>Available</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Cardiologist</td>
                                <td >10:00-12:00</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Neurologist</td>
                                <td >08:30-11:30</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Pulmonologist</td>
                                <td>18:20-19:50</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>General</td>
                                <td>15:00-17:00</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Radiologist</td>
                                <td>21:30-23:30</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Orthopedic Surgeon</td>
                                <td>06:00-08:00</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>select Id</p>
                    <input type="number" id="ID" required onBlur={this.valId} onInput={this.valId} />
                    <p id="warn_id" style={{ color: 'red' }}>{this.state.warn_id}</p>

                    <p>Set Your Time (before 20mins to closing time)</p>
                    <div className="time-container">
                        <input type="text" name="set_time" id="userTime" placeholder="HHMM" onBlur={this.ValTime} onInput={this.ValTime} required />
                        <p id="warnTime" style={{ color: 'red' }}>{this.state.warnTime}</p>
                    </div>

                    <p>copen code (if any)</p>
                    <input type="password" id="code" onBlur={this.valCopen} onInput={this.valCopen} />
                    <p id="warnCode" style={{ color: 'red' }}>{this.state.warnCode}</p>

                    <a href="https://www.youtube.com">Contact us for more details</a><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Appointment;
