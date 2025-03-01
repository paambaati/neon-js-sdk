import assert from 'node:assert';
import { describe, test } from 'node:test';
import { CancelablePromise, NeonClient } from '../dist';

describe('NeonClient tests', () => {
	test('should fetch projects correctly', async () => {
		const mockClient = new NeonClient();
		mockClient.project.listProjects = () =>
			new CancelablePromise((resolve) => {
				return resolve({
					// @ts-expect-error -- This error is expected, as we're not mocking the entire project object.
					projects: [{ id: 'test-id-1', name: 'Test Project 1' }],
				});
			});

		const { projects } = await mockClient.project.listProjects();

		assert.equal(projects.length, 1);
		assert.equal(projects[0].id, 'test-id-1');
	});
});
