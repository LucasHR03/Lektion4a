<script>
    import { createSubscriber } from "svelte/reactivity";

    let username = $state('user');
    let password = $state('password');

    const createUser = async () => {
        const response = await fetch('api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });
        await response.json();
        if (response.ok) {
            alert('Bruger oprettet!');
        } else {
            alert('Fejl ved oprettelse af bruger!');
        }
        username = '';
        password = '';
    };
</script>

<h1 class="text-2x1 font-bold">Den hemmelige adminstratorside</h1>
<div>
    <input type="text" bind:value={username} placeholder="Brugernavn" class="input" />
</div>
<div>
    <input type="password" bind:value={password} placeholder="Adgangskode" class="input" />
</div>
<div>
    <button class="btn btn-primary" onclick={createUser}> Opretter bruger</button>
</div>
