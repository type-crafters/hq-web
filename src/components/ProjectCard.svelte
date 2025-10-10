<script lang="ts">
    interface ProjectCardProps {
        status: string;
        name: string;
        image: string;
        details: string;
        description: string;
        tags: string[];
        href: string;
    }


    interface ProjectLabel {
        color: `bg-${string}-${number}${`/${number}` | ""}`;
        text: string;
    }

    const projectStatus: Record<string, ProjectLabel> = {
        planning: { color: "bg-info-600", text: "Planning" },
        development: { color: "bg-teal-500", text: "In Development" },
        testing: { color: "bg-violet-400", text: "QA Testing" },
        openTesting: { color: "bg-blue-500", text: "Open Beta" },
        earlyAccess: { color: "bg-orange-400", text: "Early Access" },
        available: { color: "bg-success-600", text: "Available now!" },
        paused: { color: "bg-warning-600", text: "Paused" },
        canceled: { color: "bg-red-700/70", text: "Canceled" },
        deprecated: { color: "bg-secondary-500", text: "Deprecated" },
    } as const;

    const {
        status = "planning",
        name = "Whisper",
        image = "/img/placeholder.svg",
        details = "Real-time Communication App",
        description = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dicta facilis quidem repudiandae, molestiae itaque expedita. Repellat cum quos sint minima dignissimos aliquam amet commodi quisquam natus numquam. Pariatur, dignissimos.",
        tags = ["Servers", "Channels", "RTC"],
        href = "#",
    }: ProjectCardProps = $props();
</script>

<div
    class="group w-full bg-secondary-600/20 flex flex-col gap-6 py-6 relative border-2 border-secondary-700 backdrop-blur-md rounded-lg hover:brightness-105 duration-200"
>
    <span
        role="presentation"
        class={[
            "absolute z-5 top-8 left-4 px-3 py-0.5 font-semibold text-sm rounded",
            projectStatus[status].color,
        ]}
    >{projectStatus[status].text}</span>
    <figure class="w-full aspect-[5/2] h-auto overflow-hidden group-hover:scale-y-105 duration-200">
        <img src={image} alt={name} class="w-full h-full object-cover object-center"/>
    </figure>
    <div class="w-full flex-1 flex flex-col items-start px-4 gap-4">
        <div class="w-full">
            <h3 class="text-3xl font-semibold text-left">{name}</h3>
            <p class="text-left text-primary-400">{details}</p>
        </div>
        <div class="flex-1">
            <p class="text-left">{description}</p>
        </div>
        <div class="flex w-full justify-start gap-4 my-1 flex-wrap">
            {#each tags as tag, i (i)}
                <span class="px-3 py-0.5 bg-secondary-200 text-black rounded-lg font-medium text-sm">
                    {tag}
                </span>
            {/each}
        </div>
        <div class="w-full">
            <a {href} class="flex justify-center gap-2 bg-primary-600 hover:bg-primary-800 py-1.5 cursor-pointer rounded-lg duration-150">
                <span>Learn More</span>
                <i class="bi bi-box-arrow-up-right text-xs"></i>
            </a>
        </div>
    </div>
</div>