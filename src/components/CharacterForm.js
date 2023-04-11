import React from "react";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Tooltip from "react-bootstrap";

class CharacterForm extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = () => {};

    render() {
        return (
            <form>
                <Card>
                    <Card.Header>Enter Character Details:</Card.Header>
                    <Card.Body>
                        <Form.Label>First Name: </Form.Label>
                        <Form.Control placeholder="Enter Name" />
                        <br />
                        <Form.Label>Last Name: </Form.Label>
                        <Form.Control placeholder="Enter Name" />
                        <div className="row">
                            <div className="col-sm">
                                <p>Gender:</p>
                                <Form.Select>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Variant">Variant</option>
                                    <option value="Other">Other</option>
                                    <option value="Unknown/Ambigious">Unknown/Ambigious</option>
                                    <option value="Not Applicable">Not Applicable</option>
                                </Form.Select>
                            </div>
                            <div className="col-sm">
                                <p>Race:</p>
                                <Form.Select>
                                    <option>Asian</option>
                                    <option>Black</option>
                                    <option>Hispanic</option>
                                    <option>Mixed</option>
                                    <option>White</option>
                                    <option>Not Applicable</option>
                                </Form.Select>
                            </div>
                            <div className="col-sm">
                                <p>Nationality:</p>
                                <Form.Select>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Belgium">Belgium</option>
                                    <option value="Botswana">Botswana</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="Cambodia">Cambodia</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Chile">Chile</option>
                                    <option value="China">China</option>
                                    <option value="Costa Rica">Costa Rica</option>
                                    <option value="Cuba">Cuba</option>
                                    <option value="Denmark">Denmark</option>
                                    <option value="Dominican Republic">Dominican Republic</option>
                                    <option value="Egypt">Egypt</option>
                                    <option value="Finland">Finland</option>
                                    <option value="France">France</option>
                                    <option value="Germany">Germany</option>
                                    <option value="Greece">Greece</option>
                                    <option value="Gautemala">Guatemala</option>
                                    <option value="Haiti">Haiti</option>
                                    <option value="Hungary">Hungary</option>
                                    <option value="Iceland">Iceland</option>
                                    <option value="India">India</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Iran">Iran</option>
                                    <option value="Ireland">Ireland</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Jamaica">Jamaica</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Kenya">Kenya</option>
                                    <option value="Kuwait">Kuwait</option>
                                    <option value="Madagascar">Madagascar</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Morocco">Morocco</option>
                                    <option value="New Zealand">New Zealand</option>
                                    <option value="Nicaragua">Nicaragua</option>
                                    <option value="North Korea">North Korea</option>
                                    <option value="Norway">Norway</option>
                                    <option value="Peru">Peru</option>
                                    <option value="Philippines">Philippines</option>
                                    <option value="Poland">Poland</option>
                                    <option value="Romania">Romania</option>
                                    <option value="Russia">Russia</option>
                                    <option value="Serbia">Serbia</option>
                                    <option value="Scotland">Scotland</option>
                                    <option value="South Africa">South Africa</option>
                                    <option value="South Korea">South Korea</option>
                                    <option value="Spain">Spain</option>
                                    <option value="Sweden">Sweden</option>
                                    <option value="Switzerland">Switzerland</option>
                                    <option value="Turkey">Turkey</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United States">United States</option>
                                    <option value="Venezuela">Venezuela</option>
                                    <option value="Vietnam">Vietnam</option>
                                </Form.Select>
                            </div>
                            <div className="col-sm">
                                <p>Occupation:</p>
                                <Form.Select>
                                    <option value="Accountant">Accountant</option>
                                    <option value="Actor">Actor</option>
                                    <option value="Animator">Animator</option>
                                    <option value="Architect">Architect</option>
                                    <option value="Artist">Artist</option>
                                    <option value="Athlete">Athlete</option>
                                    <option value="Astronaut">Astronaut</option>
                                    <option value="Attorney">Attorney</option>
                                    <option value="Barber">Barber</option>
                                    <option value="Bellhop">Bellhop</option>
                                    <option value="Biologist">Biologist</option>
                                    <option value="Blacksmith">Blacksmith</option>
                                    <option value="Butcher">Butcher</option>
                                    <option value="Butler">Butler</option>
                                    <option value="Businessman">Businessman</option>
                                    <option value="Carpenter">Carpenter</option>
                                    <option value="Cashier">Cashier</option>
                                    <option value="Chauffeur">Chauffeur</option>
                                    <option value="Chef">Chef</option>
                                    <option value="Chemist">Chemist</option>
                                    <option value="Composer">Composer</option>
                                    <option value="Criminal">Criminal</option>
                                    <option value="Custodian">Custodian</option>
                                    <option value="Dentist">Dentist</option>
                                    <option value="Designer">Designer</option>
                                    <option value="Detective">Detective</option>
                                    <option value="Doctor">Doctor</option>
                                    <option value="Driver">Driver</option>
                                    <option value="Ecologist">Ecologist</option>
                                    <option value="Economist">Economist</option>
                                    <option value="Editor">Editor</option>
                                    <option value="Electrician">Electrician</option>
                                    <option value="Engineer">Engineer</option>
                                    <option value="Entertainer">Entertainer</option>
                                    <option value="Farmer">Farmer</option>
                                    <option value="Firefighter">Firefighter</option>
                                    <option value="Fisherman">Fisherman</option>
                                    <option value="Gardener">Gardener</option>
                                    <option value="Geologist">Geologist</option>
                                    <option value="Hunter">Hunter</option>
                                    <option value="Interpreter">Interpreter</option>
                                    <option value="Inventor">Inventor</option>
                                    <option value="Janitor">Janitor</option>
                                    <option value="Journalist">Journalist</option>
                                    <option value="Judge">Judge</option>
                                    <option value="Lumberjack">Lumberjack</option>
                                    <option value="Manager">Manager</option>
                                    <option value="Marketer">Marketer</option>
                                    <option value="Mayor">Mayor</option>
                                    <option value="Miner">Miner</option>
                                    <option value="Musician">Musician</option>
                                    <option value="Nurse">Nurse</option>
                                    <option value="Operator">Operator</option>
                                    <option value="Optician">Optician</option>
                                    <option value="Park Ranger">Park Ranger</option>
                                    <option value="Pawnbroker">Pawnbroker</option>
                                    <option value="Pediatrician">Pediatrician</option>
                                    <option value="Pharmacist">Pharmacist</option>
                                    <option value="Philanthropist">Philanthropist</option>
                                    <option value="Philosopher">Philosopher</option>
                                    <option value="Physicist">Physicist</option>
                                    <option value="Pilot">Pilot</option>
                                    <option value="Plumber">Plumber</option>
                                    <option value="Police Officer">Police Officer</option>
                                    <option value="Politician">Politician</option>
                                    <option value="Programmer">Programmer</option>
                                    <option value="Rancher">Rancher</option>
                                    <option value="Referee">Referee</option>
                                    <option value="Reporter">Reporter</option>
                                    <option value="Researcher">Researcher</option>
                                    <option value="Sailor">Sailor</option>
                                    <option value="Scientist">Scientist</option>
                                    <option value="Security Guard">Security Guard</option>
                                    <option value="Soldier">Soldier</option>
                                    <option value="Stockbroker">Stockbroker</option>
                                    <option value="Surgeon">Surgeon</option>
                                    <option value="Tailor">Tailor</option>
                                    <option value="Teacher">Teacher</option>
                                    <option value="Translator">Translator</option>
                                    <option value="Writer">Writer</option>
                                </Form.Select>
                            </div>
                            
                        </div>
                        <p>Character Description:</p>
                        <Form.Control placeholder="Enter Details" as="textarea" rows={3} />
                        <p>Character Backstory:</p>
                        <Form.Control placeholder="Enter Details" as="textarea" rows={3} />
                        <br />
                        <Button variant="success">Submit Character</Button>
                    </Card.Body>
                </Card>
            </form>
        )
    }
}

export default CharacterForm;
