import { getProject } from "@/actions/projects";
import { notFound } from "next/navigation";
import SprintCreationForm from "../_components/create-sprint";

export default async function ProjectPage({ params }) {
  const { projectId } = params;
  const project = await getProject(projectId);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-2 sm:px-4">
      <SprintCreationForm
        projectTitle={project.name}
        projectId={projectId}
        projectKey={project.key}
        sprintKey={project.sprints?.length + 1}
      />

      {project.sprints.length > 0 ? (
        <></>
      ) : (
        <div>Create a Sprint from button above</div>
      )}
    </div>
  );
}