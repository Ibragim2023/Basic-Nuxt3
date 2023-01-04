<template>
  <div>
    <h1>What is Vue?</h1>
    <p class="desc">
      Vue is a JavaScript framework for building user interfaces. It builds on
      top of standard HTML, CSS and JavaScript, and provides a declarative and
      component-based programming model that helps you efficiently develop user
      interfaces, be it simple or complex.
    </p>
    <div class="video">
      <iframe
        width="800px"
        height="400px"
        src="https://www.youtube.com/embed/FdkHciMv2Ms"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <h2>The Progressive Framework</h2>
    <p class="desc">
      Vue is a framework and ecosystem that covers most of the common features
      needed in frontend development. But the web is extremely diverse - the
      things we build on the web may vary drastically in form and scale. With
      that in mind, Vue is designed to be flexible and incrementally adoptable.
    </p>
    <h2>Composition API</h2>
    <p class="desc">
      With Composition API, we define a component's logic using imported API
      functions. In SFCs, Composition API is typically used with 'script setup'.
      The setup attribute is a hint that makes Vue perform compile-time
      transforms that allow us to use Composition API with less boilerplate. For
      example, imports and top-level variables / functions declared in 'script
      setup' are directly usable in the template.
    </p>
  </div>
</template>

<style></style>

<script setup>
definePageMeta({
  layout: "default",
});
</script>
