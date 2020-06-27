<script>
    import {goto, stores} from '@sapper/app'
    import * as api from 'api'

    const {session} = stores()

    export let profile
    if (!profile){
        profile = {};
    }
    let inProgress = false
    async function submit() {
        inProgress = true
        profile._id
                ? await api.profile.updateProfile({
                    profile: profile,
                    token: $session.user.token
                })
                : await api.profile.createProfile({
                    profile: profile,
                    token: $session.user.token
                })
        goto(`/profile`)
    }
</script>

<form
        class="profile-form"
        on:submit|preventDefault="{submit}"
>
    <input
            class="text-input"
            bind:value="{profile.firstname}"
            type="text"
            placeholder="Firstname"
            required
    >
    <input
            class="text-input"
            bind:value="{profile.surname}"
            type="text"
            placeholder="Surname"
            required
    >
    <input
            class="text-input"
            bind:value="{profile.age}"
            type="number"
            placeholder="Age"
            required
    >
    <button
            class="primary-button submit-button"
            disabled="{inProgress}"
    >Update
    </button>
</form>
