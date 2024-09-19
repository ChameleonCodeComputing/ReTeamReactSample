import React, { useState } from 'react';
import Layout from "../../../layout/website";
import Section from "../../../layout/global/Section";
import Container from "../../../layout/global/Container";
import { Link } from "react-router-dom";
import { CheckBadgeIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { Accordion, Breadcrumbs, Input } from "../../../components";
import Logo from "../../../layout/global/Logo";
import { useTheme } from "../../../layout/provider";
import SimpleBar from "simplebar-react";
import { Label, Select, Textarea, UploadZone } from "../../../components";
import { Card } from "../../../components";
import { ProjectTiles } from "../ProjectsPage/ProjectTiles";
import { ProjectList } from "../ProjectsPage/ProjectList";

function AppliancePage() {
    const theme = useTheme();

    const [result, setResult] = useState('');

    const isUp = 1;

    const [formData, setFormData] = useState({
        foundationType: '',
        squareFoot: '',
        rValueCeiling: '',
        insulation: '',
        rValueWalls: '',
        upgradeRecommended: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        /*
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5201/api/insulation-data/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log('Success:', data);
        } catch (error) {
            console.error('Error:', error);
        }
        */
    };

    return (
        <Layout title="Appliances">



            <Section className="px-3 py-6">
                <Container>

                <div className="w-full lg:w-2/5 border-b lg:border-b-0 lg:border-e border-slate-200 dark:border-slate-800">
                    <SimpleBar className="p-7 h-full">
                        <h3 className="font-bold text-4xl text-slate-700 dark:text-white mb-3">Appliances</h3>
                        <p className="text-slate-500 dark:text-slate-400 mb-5">Enter the Appliance Information</p>
                        <div className="-my-2">
                            <div className="py-2">
                                <Label
                                    htmlFor="UploadFiles"
                                    className="mb-2"
                                >
                                    Foundation Type
                                </Label>
                                <div>
                                    <select name="foundationType" value={formData.foundationType} onChange={handleChange}>
                                        <option value="">Select</option>
                                        <option value="Conditioned">Conditioned</option>
                                        <option value="Unconditioned">Unconditioned</option>
                                    </select>
                                </div>
                            </div>
                            <div className="py-2">
                                <Label
                                    htmlFor="Language"
                                    className="mb-2"
                                >
                                    kWh
                                </Label>
                                <div>
                                    <input type="number" name="squareFoot" value={formData.squareFoot} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="py-2">
                                <Label
                                    htmlFor="Types"
                                    className="mb-1"
                                >
                                    Age
                                </Label>
                                <div>
                                    <input type="number" name="rValueCeiling" value={formData.rValueCeiling} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="py-2">
                                <Label htmlFor="prompt" className="mb-2">
                                    Notes <span className="text-[10px] text-slate-400 ms-2">(Optional)</span>
                                </Label>
                                <Textarea
                                    className="h-32"
                                    placeholder="Enter Notes on Condition of the Insulation"
                                    id="prompt"
                                />
                            </div>
                            <div className="py-2">
                                <button onClick={ () => setResult(resultdata.transcribe) } className="inline-flex font-medium text-sm bg-blue-600 text-white hover:bg-blue-800 transition-all px-5 py-2 rounded-full">
                                    Save Data
                                </button>
                            </div>
                        </div>
                    </SimpleBar>
                </div>
                <div className="w-full lg:w-2/5 border-b lg:border-b-0 lg:border-e border-slate-200 dark:border-slate-800">

                    <form onSubmit={handleSubmit}>
                    <label>
                        Foundation Type:
                        <select name="foundationType" value={formData.foundationType} onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="Conditioned">Conditioned</option>
                            <option value="Unconditioned">Unconditioned</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        Square Foot:
                        <input type="number" name="squareFoot" value={formData.squareFoot} onChange={handleChange} />
                    </label>
                    <br />
                    <label>
                        R Value Ceiling:
                        <input type="number" name="rValueCeiling" value={formData.rValueCeiling} onChange={handleChange} />
                    </label>
                    <br />
                    <label>
                        Insulation:
                        <select name="insulationType" value={formData.insulation} onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="Fiberglass">Fiberglass</option>
                            <option value="Polystyrene">Polystyrene</option>
                            <option value="Spray Foam">Spray Foam</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        R Value Walls:
                        <input type="number" name="rValueWalls" value={formData.rValueWalls} onChange={handleChange} />
                    </label>
                    <br />
                    <label>
                        Upgrade Recommended:
                        <select name="upgradeRecommended" value={formData.upgradeRecommended} onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="Y">Yes</option>
                            <option value="N">No</option>
                        </select>
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                    </form>
                </div>
                </Container>
            </Section>


        </Layout>
    );
}

export default AppliancePage;
