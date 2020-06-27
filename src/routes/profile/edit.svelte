<script context="module">
    import * as api from "api";

    export async function preload({params}, session) {
        if (!session.user) {
            return this.redirect(302, "login");
        }
        let profile = await api.profile.getProfile({token: session.user.token});
        return {profile};
    }
</script>

<script>
    import ProfileForm from './_ProfileForm.svelte'

    export let profile;
</script>

<svelte:head>
    <title>Editing profile</title>
</svelte:head>

<ProfileForm {profile}/>
