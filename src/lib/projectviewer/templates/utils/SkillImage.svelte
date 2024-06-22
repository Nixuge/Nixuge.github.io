<script lang="ts">
    export let baseUrl: string = "https://skillicons.dev/icons?i=";
    export let icon: string;
    export let alt: string = icon;
</script>

<img class="singleline" src="{baseUrl}{icon}" alt="{alt}">

<style scoped>
    img {
        width: 85px;
        height: 85px;
        border-radius: 20px;
    }
</style>