<script>
	import { goto } from '$app/navigation';


	let userName = $state('');
	let password = $state('');

	const btnclick = () => {
		if (userName === 'admin' && password === 'admin') {
			goto('/home');
		} else {
			alert('Login failed');
		}
	};
</script>

<div>
	<input class="input m-2" bind:value={userName} placeholder="Brugernavn" />
</div>
<div>
	<input class="input m-2" bind:value={password} placeholder="Kodeord" />
</div>
<div>
	<button class="btn btn-primary m-2" onclick={btnclick}  >Login</button>
</div>


