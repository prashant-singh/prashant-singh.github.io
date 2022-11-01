<template>
  <div class="px-4 mx-auto sm:px-6 xl:max-w-6xl xl:px-0">
    <main class="relative mb-auto">
        <div class="container mx-auto py-12">
          <div class="flex flex-wrap -m-4">
            <project-card
              v-for="item in projectsData"
              :key="item.title"
              :title="item.title"
              :description="item.description"
              :href="item.href"
              :imgref="item.imgSrc"
              :techs="item.techs"
            ></project-card>
          </div>
        </div>
        <a href="/resume">
            <button
              class="bg-yellow-300 hover:bg-green-300 text-gray-800 font-bold py-2 px-8 rounded inline-flex items-center">
              <span>More Projects</span>
            </button>
          </a>
    </main>
  </div>
</template>

<script>
import projectsData from "../data/projects";
import siteMetaInfo from "../data/sitemetainfo";
export default {
  data() {
    return {
      projectsData: projectsData,
      siteMetaInfo: siteMetaInfo,
    };
  },
  head: {
    title: [siteMetaInfo.author]+" | Projects",
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
