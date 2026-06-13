import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AddAssessorStepper from "../../../components/admin/add-assessor/AddAssessorStepper";
import BasicInformationForm from "../../../components/admin/add-assessor/BasicInformationForm";
import FormProgressSidebar from "../../../components/admin/add-assessor/FormProgressSidebar";

function AddAssessor() {
    const navigate = useNavigate();

    const [fullName, setFullName] =
        useState("");

    const [email, setEmail] =
        useState("");

    const [contactNumber, setContactNumber] =
        useState("");

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isNameCompleted =
        fullName.trim() !== "";

    const isValidEmail =
        emailRegex.test(email);

    const hasContactNumber =
        contactNumber.trim() !== "";

    const handleCancel = () => {
        setFullName("");
        setEmail("");
        setContactNumber("");
    };

    const handleNext = () => {
        navigate(
            "/user-management/add-assessor/account-setup"
        );
    };

    return (
        <div className="h-full overflow-hidden px-6 pt-4 pb-0">

            <div className="mb-4">
                <h1 className="text-2xl font-bold">
                    Follow the steps to set up the new assessor.
                </h1>

            </div>

            <AddAssessorStepper />

            <div className="mx-auto flex max-w-[1280px] items-start justify-center gap-6">
                <BasicInformationForm
                    fullName={fullName}
                    setFullName={setFullName}
                    email={email}
                    setEmail={setEmail}
                    contactNumber={contactNumber}
                    setContactNumber={setContactNumber}
                    isValidEmail={isValidEmail}
                    isNameCompleted={isNameCompleted}
                    onCancel={handleCancel}
                    onNext={handleNext}
                />

                <FormProgressSidebar
                    isNameCompleted={isNameCompleted}
                    isValidEmail={isValidEmail}
                    hasContactNumber={hasContactNumber}
                />
            </div>
        </div>
    );
}

export default AddAssessor;