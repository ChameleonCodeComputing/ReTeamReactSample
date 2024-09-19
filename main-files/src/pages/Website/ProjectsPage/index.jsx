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
import { ProjectList } from "./ProjectList";

function ProjectsPage() {
    const theme = useTheme();

    const [result, setResult] = useState('');

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
        <Layout title="Projects">
            
            <Section className="px-3 py-6">
                <Container>
 
                    <ProjectList />
                    
                </Container>
            </Section>

        </Layout>
    );
}

export default ProjectsPage;
