<script>
    let diary = $state([]);
    let title = $state('');
    let content = $state('');

    const saveDiary = async (diary) => {
        const response = await fetch('/api/diary/self', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: { title, content }
        });
        const data = await response.json();
        if (response.ok) {
            diary.push(data);
            title = '';
            content = '';
        } else {
            console.error('Error saving diary:', data);
        }
    };

    import { onMount } from 'svelte';
    onMount(async () => {
        const res = await fetch('api/dairy/self');
        diary = await res.json();
    });


</script>

<input bind:value={title} type="text" placeholder="Title" class="input" />
<textarea bind:value={content} placeholder="Content" class="textarea"></textarea>
<button class="btn" onclick={saveDiary}>Gem dagbog</button>
{#each diary as post}
    <div class="post">
        <h2 class="text-2xl">{post.title}</h2>
        <i class="text-xs">{post.created_at}</i>
        <p>{post.content}</p>
    </div>
{/each}
<button onclick={Upload-file}>Upload fill</button>
