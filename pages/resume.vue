<template>
	<div class="px-4  mx-auto sm:px-6 xl:max-w-6xl xl:px-0">
		<main class="relative mb-auto">
			<h2 class="my-4 ml-2 text-3xl text-gray-700 font-bold capitalize dark:text-blue-200">
				All Projects ({{otherProjects.length}})
			</h2>
			<hr class="my-8 h-px bg-gray-800 border-0 dark:bg-gray-700">

			<div class="container mx-auto py-4">
				<div class="-m-4">
					<resume-card v-for="(item,index) in otherProjects" :key="item.title" :title="item.title"
						:description="item.description" :links="item.links" :techs="item.techs" :index="index">
					</resume-card>
					
				</div>
			</div>
		</main>
	</div>
</template>

  
<script>
import otherProjects from "../data/otherProjects";
import siteMetaInfo from "../data/sitemetainfo";
export default {
	data() {
		return {
			otherProjects: otherProjects,
			siteMetaInfo: siteMetaInfo,
		};
	},
	head: {
		title: [siteMetaInfo.author] + " | All Projects",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{
				hid: "description",
				name: "description",
				content: siteMetaInfo.description,
			},
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
	},
};
</script>