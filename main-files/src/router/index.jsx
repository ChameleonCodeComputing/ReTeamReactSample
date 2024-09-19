import React, {useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeProvider from "../layout/provider";
import WebsiteIntro from "../pages/Website/Home";
import NotFoundPage from "../pages/Website/NotFound";
import LoginPage from "../pages/Website/Login";
import CreateAccountPage from "../pages/Website/CreateAccount";
import TwoStepPage from "../pages/Website/TwoStep";

import InsulationPage from "../pages/Website/Insulation";

import ImageGenLandingPage from "../pages/Website/Landing/ImageGenerator";
import CodeGenPage from "../pages/Website/Landing/CodeGenerator";
import TextGenPage from "../pages/Website/Landing/TextGenerator";
import PricingPage from "../pages/Website/Pricing";
import AboutPage from "../pages/Website/About";

//app
import AppDashboard from "../pages/App/Dashboard";
import DocumentsPage from "../pages/App/Documents";
import DocumentsEdit from "../pages/App/Documents/Edit";
import ProfilePage from "../pages/App/Profile";
import PackagesPage from "../pages/App/Packages";
import FaqPage from "../pages/App/Faq";
import TemplatesPage from "../pages/App/Templates";
import TemplatesWriterPage from "../pages/App/Templates/Writer";
import ImageGenerator from "../pages/App/Templates/Image";
import ImageGeneratorS2 from "../pages/App/Templates/ImageS2";
import CodeGenerator from "../pages/App/Templates/Code";
import ChatBot from "../pages/App/Templates/Chatbot";
import ChatBotS2 from "../pages/App/Templates/ChatbotS2";
import SpeechText from "../pages/App/Templates/SpeechText";

//admin
import AdminDashboard from "../pages/Admin/Dashboard";
import UserList from "../pages/Admin/Users";
import UserEdit from "../pages/Admin/Users/Edit";
import TemplateManager from "../pages/Admin/TemplateManager";
import TemplateEdit from "../pages/Admin/TemplateManager/Edit";
import PackageManage from "../pages/Admin/Packages";
import PackageEdit from "../pages/Admin/Packages/Edit";
import Transactions from "../pages/Admin/Transactions";
import SupportMange from "../pages/Admin/Support";
import SupportDetails from "../pages/Admin/Support/Details";
import AddonsPage from "../pages/Admin/Addons";
import CouponsPage from "../pages/Admin/Coupons";
import CouponsEdit from "../pages/Admin/Coupons/Edit";
import Settings from "../pages/Admin/Settings";
import GeneralSettings from "../pages/Admin/Settings/General";
import UsersSettings from "../pages/Admin/Settings/Users";
import PaymentSettings from "../pages/Admin/Settings/Payment";
import NotificationsSettings from "../pages/Admin/Settings/Notifications";
import SocialNetworksSettings from "../pages/Admin/Settings/SocialNetworks";

import { useLocation } from "react-router";

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>
};




function Router() {
    return (
        <BrowserRouter>
            <ScrollToTop>
                <Routes>
                    <Route element={<ThemeProvider />}>
                            <Route index element={<LoginPage />} />  
                            <Route path="Insulation" element={<InsulationPage />} />
                            <Route path="landing-text-image" element={<ImageGenLandingPage />} />
                            <Route path="landing-text-code" element={<CodeGenPage />} />
                            <Route path="landing-prompt-text" element={<TextGenPage />} />
                            <Route path="pricing" element={<PricingPage />} />
                            <Route path="about" element={<AboutPage />} />
                            <Route path="two-step" element={<TwoStepPage />} />
                            <Route path="login" element={<LoginPage />} />  
                            <Route path="create-account" element={<CreateAccountPage />} />
                            <Route path="*" element={<NotFoundPage />} />
                        
                        <Route path="app">
                            <Route index element={<AppDashboard />} />
                            <Route path="documents">
                                <Route index element={<DocumentsPage />} />
                                <Route
                                    path="edit/:documentId"
                                    element={<DocumentsEdit />}
                                />
                            </Route>
                            <Route path="profile" element={<ProfilePage />} />
                            <Route path="packages" element={<PackagesPage />} />
                            <Route path="faq" element={<FaqPage />} />
                            <Route path="templates">
                                <Route index element={<TemplatesPage />} />
                                <Route path="writer/:writerslug" element={<TemplatesWriterPage />} ></Route>
                                <Route path="image" element={<ImageGenerator />} ></Route>
                                <Route path="image-s2" element={<ImageGeneratorS2 />} ></Route>
                                <Route path="code" element={<CodeGenerator />} ></Route>
                                <Route path="speech-to-text" element={<SpeechText />} ></Route>
                                <Route path="chatbot" element={<ChatBot />} ></Route>
                                <Route path="chatbot-s2" element={<ChatBotS2 />} ></Route>
                            </Route>
                        </Route>
                        <Route path="admin">
                            <Route index element={<AdminDashboard />} />
                            <Route path="dashboard" element={<AdminDashboard />} />
                            <Route path="users">
                                <Route index element={<UserList />} />
                                <Route path="edit/:userId" element={<UserEdit />} />
                            </Route>
                            <Route path="template-manager">
                                <Route index element={<TemplateManager />} />
                                <Route
                                    path="edit/:templateId"
                                    element={<TemplateEdit />}
                                />
                            </Route>
                            <Route path="package-manager">
                                <Route index element={<PackageManage />} />
                                <Route
                                    path="edit/:packageId"
                                    element={<PackageEdit />}
                                />
                            </Route>
                            <Route path="coupons">
                                <Route index element={<CouponsPage />} />
                                <Route
                                    path="edit/:couponId"
                                    element={<CouponsEdit />}
                                />
                            </Route>
                            <Route path="support">
                                <Route index element={<SupportMange />} />
                                <Route
                                    path="details/:supportId"
                                    element={<SupportDetails />}
                                />
                            </Route>
                            <Route path="transactions">
                                <Route index element={<Transactions />} />
                            </Route>
                            <Route path="addons">
                                <Route index element={<AddonsPage />} />
                            </Route>
                            <Route path="settings" element={<Settings />}>
                                <Route index element={<GeneralSettings />} />
                                <Route path="users" element={<UsersSettings />} />
                                <Route path="payment" element={<PaymentSettings />} />
                                <Route
                                    path="notifications"
                                    element={<NotificationsSettings />}
                                />
                                <Route
                                    path="social-networks"
                                    element={<SocialNetworksSettings />}
                                />
                            </Route>
                        </Route>
                    </Route>
                </Routes>
            </ScrollToTop>
        </BrowserRouter>
    );
}

export default Router;
