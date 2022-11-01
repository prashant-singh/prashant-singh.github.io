<template>
	<div class="opacity-100 mt-10">
		<ul>
			<li class="mb-2 ml-6">
				<div v-if="projectIndex > 0">
					<hr class="my-8 h-px bg-gray-600 border-0 dark:bg-gray-700">
				</div>
				<h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
					{{ projectTitle }}
					<div v-if="platformLinks.length > 0">
						<div v-for="item in platformLinks" class="inline-block">
							<a :href="item.link" target="_blank">
								<span
									class="bg-yellow-300 text-black text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-white-800 ml-3">
									{{ item.platform }}
								</span>
							</a>
						</div>
					</div>
				</h3>
				<p class="mb-4 text-base font-normal text-gray-800 dark:text-gray-400">
					{{ projectDescription }}
				</p>
				<div class="text-gray-400 text-sm font-extralight">
					<span v-for="techItem in projectTechs"
						class="leading-7 border-2 border-blue-700 text-blue-700 text-sm font-medium mr-2 px-2 py-0.3 rounded-full dark:bg-blue-200 dark:text-blue-800">
						{{ techItem }}
					</span>
				</div>
			</li>
		</ul>
	</div>
</template>
  
<script>
export default {
	props: ["title", "description", "links", "techs", "index"],

	data() {
		return {
			projectTitle: this.title,
			projectDescription: this.description,
			platformLinks: this.links,
			projectTechs: this.techs,
			projectIndex: this.index
		};
	},
};
</script>