import { auth } from "@clerk/nextjs/server";
import { getOrganization } from "@/actions/organizations";
import OrgSwitcher from "@/components/org-switcher";
import React from "react";
import ProjectList from "./_components/project-list";
import UserIssues from "./_components/user-issues";

const OrganizationPage = async ({ params }) => {
    const {orgId} = params
    const { userId } = auth();
    const organization = await getOrganization(orgId);

    if (!userId) {
        redirect("/sign-in");
      }
    

    if(!organization){
        <div>Organization not found!</div>;
    }

    return (
    <div className="container mx-auto">
        <div className="mb-4 flex flex-col sm:flex-row justify-between items-start px-2 sm:px-4">
            <h1 className="text-5xl font-bold pb-2">{organization.name}'s Projects</h1>
            <OrgSwitcher />
        </div>
        <div className="mb-4">
            <ProjectList orgId={organization.id}/>
        </div>
        <div className="mt-8 px-4 sm:px-4">
            <UserIssues userId={userId}/>
        </div>
    </div>);
};

export default OrganizationPage;