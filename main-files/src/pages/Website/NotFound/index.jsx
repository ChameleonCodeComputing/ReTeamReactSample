import React from "react";
import { Link } from "react-router-dom";
import Layout from "../../../layout/website";
import Section from "../../../layout/global/Section";
import Container from "../../../layout/global/Container";
import { Robot404 } from "../../../components/svgs";
import { useTheme } from "../../../layout/provider";
import DarkRobot404 from "../../../components/svgs/illustrations/DarkRobot404";
function NotFoundPage() {
    const theme = useTheme();
    return (
        <Layout title="Not Found">
            <Section className="py-10 my-auto">
                <Container>
                    <div className="flex flex-wrap items-center justify-center mt-auto">
                        <div className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 px-6">
                            {theme.mode === "light" ? <Robot404 /> : <DarkRobot404 />}
                        </div>
                        <div className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 px-6 lg:text-start text-center">
                            <div className="text-7xl font-bold mb-6 text-blue-600 hidden lg:block">
                                Oops!
                            </div>
                            <h3 className="lg:text-3xl 2xl:text-4xl leading-snug font-bold mb-4 text-slate-700 dark:text-white">
                                The page you are looking for doesn't exist.
                            </h3>
                            <p className="text-sm text-slate-600 dark:text-slate-200 mb-5">
                                It's possible that the page you're looking for
                                has been removed, renamed, or is temporarily
                                unavailable.
                            </p>
                            <Link
                                to="/"
                                className="inline-flex font-medium text-sm bg-blue-600 text-white hover:bg-blue-800 transition-all px-5 py-2 rounded-full"
                            >
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </Container>
            </Section>
        </Layout>
    );
}

export default NotFoundPage;
