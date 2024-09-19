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

function InsulationPage() {
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

    const handleResult = async (data) => {

        setFormData(data);
        
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
        
    };
    const handleSubmit = async (e) => {
       
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
        
    };

    return (
        <Layout title="Insulation">

            <Section className="px-3 py-6">
            <   Container>
                <div className="w-full lg:w-2/5 border-b lg:border-b-0 lg:border-e border-slate-200 dark:border-slate-800">

                        <h3 className="font-bold text-4xl text-slate-700 dark:text-white mb-3">Insulation</h3>
                        <p className="text-slate-500 dark:text-slate-400 mb-5">Enter the Insulation Information</p>
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
                                    Square Foot
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
                                    R Value
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
                                <button onClick={ () => handleResult(resultdata.transcribe) } className="inline-flex font-medium text-sm bg-blue-600 text-white hover:bg-blue-800 transition-all px-5 py-2 rounded-full">
                                    Save Data
                                </button>
                            </div>
                        </div>

                </div>
                </Container>
            </Section>
        </Layout>
    );
}

export default InsulationPage;
