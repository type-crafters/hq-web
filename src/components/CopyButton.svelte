<script lang="ts">
    import type { Snippet } from "svelte";

    interface CopyButtonProps {
        id?: string;
        value: string;
        class?: string;
        children?: Snippet;
    }

    const { id, value, class: className, children }: CopyButtonProps = $props();

    let renderFeedback: boolean = $state(false);

    const copyValue = () => {
        navigator.clipboard.writeText(value);
        renderFeedback = true;

        return setTimeout(() => renderFeedback = false, 5000);
    };
</script>

<button
    id={id} 
    onclick={copyValue}
    title={`Copy '${value}'`}
    class={["relative cursor-pointer", className]}
>
    {#if renderFeedback}
        <span
            role="presentation"
            class="flex items-center gap-1 bg-success-600 rounded absolute top-4 right-4 px-3 py-0.5 text-sm font-semibold"
        >
            <i class="i bi-check-lg"></i>
            <span>Copied!&nbsp;</span>
        </span>
    {/if}
    {@render children?.()}
</button>