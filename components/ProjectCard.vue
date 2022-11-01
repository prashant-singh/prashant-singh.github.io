<template>
  <div class="p-4 mx-auto md:w-1/2 lg:w-1/3 md" style="max-width: 544px">
    <a :href="projectHref">
      <div
        class="h-full overflow-hidden border-2 border-gray-200 rounded-md border-opacity-40 dark:border-gray-700 shadow-xl">
        <div class="p-0">
          <img :src="require(`~/assets/img/${projectImg}`)" loading="lazy" alt="me" class="h-80 w-full object-cover object-center"/>
          <div class="px-5 pb-4">
            <h2 class="text-2xl font-bold leading-8 tracking-tight mt-3 mb-3">
              {{ projectTitle }}
            </h2>
            <p class="prose text-gray-500 max-w-none dark:text-gray-400 mb-3">
              {{ projectDescription }}
            </p>
            <div class="flex flex-row justify-between">
              <div class="text-gray-400 text-sm font-extralight">
                <span v-for="techItem in projectTechs"
                  class="leading-7 border-2 border-blue-700 text-blue-700 text-sm font-medium mr-2 px-2 py-0.3 rounded-full dark:bg-blue-200 dark:text-blue-800">
                  {{ techItem }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import Folder from "../assets/icon/folder.svg?inline";
import External from "../assets/icon/external.svg?inline";
import Github from "../assets/icon/github.svg?inline";
export default {
  props: ["title", "description", "href", "imgref", "techs"],
  components: { Folder, External, Github },
  data() {
    return {
      projectTitle: this.title,
      projectDescription: this.description,
      projectHref: this.href,
      projectImg: this.imgref,
      projectTechs: this.techs
    };
  },
};
</script>

<style>

</style>
