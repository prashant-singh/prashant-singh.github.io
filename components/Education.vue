<template>
	<div class="opacity-100 mt-10">
		<h2 class="my-6 text-2xl text-gray-700 font-bold capitalize dark:text-blue-200">
      Education
    </h2>
	  <ol class="relative border-gray-100 dark:border-gray-700">
		<div v-for="(item, index) in educationData">
		  <li class="mb-10 ml-6">
			<span
			  class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-red-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
			  <img class="w-4 h-4 text-blue-600 dark:text-blue-400" src="~assets/icon/academy.svg" />
			</span>
			<h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
			  {{ item.courseName }} <span
				class="bg-red-300 text-black text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-white-800 ml-3">@{{ item.instituteName }}</span>
			</h3>
			<time class="block mb-2 text-sm font-bold leading-none text-grey-400 dark:text-grey-500">
			  {{ item.startDate }}-{{ item.endDate }}
			</time>
		  </li>
		</div>
	  </ol>
	</div>
  </template>

<script>
import educationData from '../data/education';
export default {
  data() {
    return {
		educationData: educationData,
    };
  },
};
</script>