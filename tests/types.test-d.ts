import { expectType } from 'tsd';
import { NeonClient } from '../dist/index.js';
import type { ProjectListItem } from '../dist/index.js';

async function typeTest() {
	const neonClient = new NeonClient();
	const { projects } = await neonClient.project.listProjects();
	expectType<Array<ProjectListItem>>(projects);
}
