<script>
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
            goto('/admin');
        } else {
            alert('Login fejlet!');
        }
    };

</script>

<input bind:value={username} type="text" placeholder="Indtast Email" />
<input bind:value={password} type="password" placeholder="Indtast Password" />
<button onclick={login}>login</button>