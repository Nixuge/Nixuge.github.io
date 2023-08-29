<script lang="ts">
    import './style.css';
    import ProjectViewer from './ProjectViewer.svelte';
    import SocialPickerVertical from './SocialPickerVertical.svelte';
</script>

<div id="content">
    <SocialPickerVertical />
    <ProjectViewer />
</div>

<style>
    #content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    @media (min-width: 901px) {
        #content {
            height: 80%;
            width: 95%;
        }
    }
    @media (max-width: 900px) {
        #content {
            height: 95%;
            width: 95%;
        }
    }
</style>