<script lang="ts">
    export let icon: string;
    export let alt: string = icon;
</script>

<img class="singleline" src="https://skillicons.dev/icons?i={icon}" alt="{alt}">

<style scoped>
    img {
        width: 85px;
        height: 85px;
    }
</style>