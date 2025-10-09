<script lang="ts">
    interface BlogCardProps {
        image: string;
        publishDate: string;
        title: string;
        preview: string;
        href: string;
    }

    const {
        image,
        publishDate,
        title,
        preview,
        href
    }: BlogCardProps = $props();
</script>

<div class="flex-1 rounded-lg border-2 border-secondary-600 bg-secondary-700/20 backdrop-blur-md overflow-hidden flex flex-col gap-2">
    <picture class="w-full aspect-[2/1] h-auto overflow-hidden bg-secondary-600/80">
        <img src={image} alt={title} class="w-full h-full object-cover object-center"/>
    </picture>
    <div class="p-4 text-left flex flex-col gap-3">
        <div class="flex gap-2 text-secondary-300">
            <i class="bi bi-calendar text-sm"></i>
            <time dateTime={new Date(publishDate).toISOString()}>
                {new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(new Date(publishDate))}
            </time>
        </div>
        <h3 class="text-xl font-semibold line-clamp-2">{title}</h3>
        <p class="line-clamp-4 flex-1 opacity-70">{preview}</p>
        <a {href} class="group flex py-1 gap-2 text-secondary-300 cursor-pointer w-fit">
            <span class="group-hover:underline">Read more</span>
            <i class="bi bi-box-arrow-up-right text-xs"></i>
        </a>
    </div>
</div>