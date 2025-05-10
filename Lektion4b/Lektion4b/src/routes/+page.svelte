<script>
	import { goto } from '$app/navigation';


	let username = $state('user');
        let password = $state('password');

        const login = async () => {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        if (response.ok) {
            goto('/diary');
        } else {
            alert('Login fejlet!');
        }
    };
</script>

<div>
	<input class="input m-2" bind:value={username} placeholder="Brugernavn" />
</div>
<div>
	<input class="input m-2" bind:value={password} placeholder="Kodeord" />
</div>
<div>
	<button class="btn btn-primary m-2" onclick={login}  >Login</button>
</div>


