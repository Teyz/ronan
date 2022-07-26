<template>
  <NuxtLayout name="custom">
    <LegalMentions />
  </NuxtLayout>
</template>

<script setup>
const title = ref('Ronan by Clinet | Mentions Légales')
onMounted(() => {
  window.scrollTo(0, 0);
}),

useHead({
  title,
  meta: [
    {
      name: "title",
      lang: "fr",
      content: "Ronan by Clinet | Mentions Légales",
    },
    {
      name: "title",
      lang: 'en',
      content: "Ronan by Clinet | Credits and Legal Notice",
    },
    {
      name: 'description',
      lang: 'fr',
      content: 'Crédits et mentions légales pour www.ronanbyclinet.com'
    },
    {
      name: 'description',
      lang: 'en',
      content: 'Credits and legal notice for www.ronanbyclinet.com'
    }
  ]
})
</script>