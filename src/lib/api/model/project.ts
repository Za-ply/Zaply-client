export interface ProjectList {
  projectId: number;
  projectTitle: string;
  projectThumbnail: string;
  earliestScheduledAt: string;
  postingTypes: string[];
}

export type ProjectListResponse = ProjectList[];
