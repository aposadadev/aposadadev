<script lang="ts" setup>
import { ref } from "vue";

const showSidebar = ref(false);
</script>
<template>
  <div class="bg-dark">
    <header class="h-20 pr-5 md:pr-10">
      <nav class="hidden h-full md:block">
        <ul
          class="flex items-center justify-end h-full text-slate-400 gap-x-10"
        >
          <li class="hover:text-primary">About</li>
          <li class="hover:text-primary">Experience</li>
          <li class="hover:text-primary">Work</li>
          <li class="hover:text-primary">Contact</li>
        </ul>
      </nav>
      <div class="flex items-center justify-end h-full md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8 text-slate-400"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
        <div
          class="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->
          <div
            class="fixed inset-0 transition-opacity bg-gray-900 bg-opacity-80"
          ></div>

          <div class="fixed inset-0 z-10 overflow-y-auto">
            <div
              class="flex items-end justify-end min-h-full text-center sm:items-center sm:p-0"
            >
              <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
              <div class="w-8/12 h-screen bg-dark">
                <div class="flex items-center justify-end w-full h-20 pr-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-8 h-8 text-slate-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                <div>
                  <ul
                    class="flex flex-col items-center justify-end h-full text-slate-400 gap-y-10"
                  >
                    <li class="hover:text-primary">About</li>
                    <li class="hover:text-primary">Experience</li>
                    <li class="hover:text-primary">Work</li>
                    <li class="hover:text-primary">Contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main>
      <aside
        class="fixed top-0 bottom-0 items-end justify-center hidden w-20 md:flex pb-36"
      >
        <ul class="flex flex-col gap-10 text-slate-400">
          <li class="hover:text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-github"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
              ></path>
            </svg>
          </li>
          <li class="hover:text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-instagram"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"
              ></path>
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
              <path d="M16.5 7.5l0 .01"></path>
            </svg>
          </li>
          <li class="hover:text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-twitter"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"
              ></path>
            </svg>
          </li>
          <li class="hover:text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-linkedin"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
              ></path>
              <path d="M8 11l0 5"></path>
              <path d="M8 8l0 .01"></path>
              <path d="M12 16l0 -5"></path>
              <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
            </svg>
          </li>
        </ul>
      </aside>
      <div class="pb-20 pl-10 pr-10 md:pl-20">
        <section
          class="min-h-screen pt-5 md:pt-10 lg:pt-20 lg:mx-auto lg:w-10/12"
        >
          <p class="text-lg text-primary">Hi, my name is</p>
          <p class="mt-8 text-6xl font-bold md:text-7xl text-slate-400">
            Andres Posada.
          </p>
          <p
            class="mt-5 mb-10 text-4xl font-bold sm:text-5xl opacity-60 md:text-7xl text-cyan-300"
          >
            I build things for the web and mobile.
          </p>
          <p
            class="w-full text-xl sm:w-10/12 md:w-8/12 xl:w-6/12 opacity-60 text-slate-400"
          >
            I'm a software engineer, I like building solutions with software,
            and I'm constantly learning about new technologies, programming, and
            how I can improve my skills.
          </p>
          <div class="mt-20">
            <button
              class="w-full px-20 py-3 border rounded sm:w-auto border-primary text-primary hover:bg-primary hover:text-dark"
            >
              Resume
            </button>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>
