<script lang="ts">
    interface AlertProps {
        type: 
            | "warning"
            | "success"
            | "info"
            | "error"
        message: string;
        class?: string;
    }

    const alertColors: Readonly<Record<AlertProps["type"], string>> = {
        warning: "bg-yellow-400",
        success: "bg-emerald-500",
        info: "bg-blue-500",
        error: "bg-red-500"
    } as const;

    const { type, message, class: className }: AlertProps = $props();

    let open: boolean = $state(true);
</script>

{#if open}
    <div class={["flex items-center gap-2 px-2 py-1 rounded text-white shadow-sm shadow-neutral-400", alertColors[type], className]}>
    <span>{message}</span>
    <button type="button" aria-label="close alert" class="cursor-pointer" onclick={() => { open = false }}>
        <i class="bi bi-x-lg"></i>
    </button>
</div>
{/if}