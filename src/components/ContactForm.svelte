<script lang="ts">
    import { API_URL } from "astro:env/client";
    import Alert from "./Alert.svelte";

    let alert: { type: "warning" | "success" | "info" | "error", message: string } = $state({ type: "info", message: ""});
    let submitting: boolean = $state(false);

    let firstName: string = $state("");
    let lastName: string = $state("");
    let email: string = $state("");
    let subject: string = $state("");
    let message: string = $state("");

    const submitForm = async (event: SubmitEvent) => {
        event.preventDefault();
        submitting = true;

        const data = {
            firstName,
            lastName,
            email,
            subject,
            message
        };

        try {
            const response = await fetch(`${API_URL}/messages`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert = { type: "success", message: "Your message was sent successfully!" }
                firstName = "";
                lastName = "";
                email = "";
                subject = "";
                message = "";
                return await response.json();
            }

        } catch (error) {
            alert = { type: "success", message: "There was an error sending your message." }
        } finally {
            submitting = false;
        }
    };
</script>

<div
    class="relative w-full h-full p-6 flex flex-col gap-6 bg-secondary-600/20 backdrop-blur-md rounded-lg border-2 border-secondary-700"
>
    {#if alert.message}
        <Alert {...alert} class="absolute top-4 right-4" />
    {/if}
    <div class="text-left space-y-2">
        <h3 class="text-2xl font-semibold">Send us a message</h3>
        <p class="opacity-70">
            Fill out the form below and we'll get back to you as soon as
            possible.
        </p>
    </div>
    <form class="flex-1 flex flex-col gap-8" onsubmit={submitForm}>
        <div class="flex gap-6">
            <div class="flex-1 space-y-2">
                <label class="block text-left font-semibold" for="firstName"
                    >First Name</label
                >
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="John"
                    bind:value={firstName}
                    disabled={submitting}
                    class="w-full border border-secondary-400 bg-secondary-600/40 backdrop-blur-md rounded px-2 py-1 outline-2 outline-transparent focus:outline-secondary-400 duration-150"
                />
            </div>
            <div class="flex-1 space-y-2">
                <label class="block text-left font-semibold" for="lastName">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Doe"
                    bind:value={lastName}
                    disabled={submitting}
                    class="w-full border border-secondary-400 bg-secondary-600/40 backdrop-blur-md rounded px-2 py-1 outline-2 outline-transparent focus:outline-secondary-400 duration-150"
                />
            </div>
        </div>
        <div class="space-y-2">
            <label class="block text-left font-semibold" for="email"
                >Email</label
            >
            <input
                type="email"
                name="email"
                id="email"
                placeholder="john@example.com"
                bind:value={email}
                disabled={submitting}
                class="w-full border border-secondary-400 bg-secondary-600/40 backdrop-blur-md rounded px-2 py-1 outline-2 outline-transparent focus:outline-secondary-400 duration-150"
            />
        </div>
        <div class="space-y-2">
            <label class="block text-left font-semibold" for="subject"
                >Subject</label
            >
            <input
                type="text"
                name="subject"
                id="subject"
                placeholder="What's this about?"
                bind:value={subject}
                disabled={submitting}
                class="w-full border border-secondary-400 bg-secondary-600/40 backdrop-blur-md rounded px-2 py-1 outline-2 outline-transparent focus:outline-secondary-400 duration-150"
            />
        </div>
        <div class="flex-1 flex flex-col gap-2">
            <label class="block text-left font-semibold" for="message"
                >Message</label
            >
            <textarea
                name="message"
                id="message"
                placeholder="Tell us more..."
                bind:value={message}
                disabled={submitting}
                class="flex-1 w-full resize-y border border-secondary-400 bg-secondary-600/40 backdrop-blur-md rounded px-2 py-1 outline-2 outline-transparent focus:outline-secondary-400 duration-150"
                rows={5}
            ></textarea>
        </div>
        <div>
            <input
                type="submit"
                value="Send Message"
                disabled={submitting}
                class="w-full font-semibold bg-primary-600 hover:bg-primary-800 py-1.5 cursor-pointer rounded-lg duration-150"
            />
        </div>
    </form>
</div>
