<script lang="ts">
    let firstName: string = $state("");
    let lastName: string = $state("");
    let email: string = $state("");
    let subject: string = $state("");
    let message: string = $state("");
</script>

<div class="w-full h-full p-6 flex flex-col gap-6 bg-secondary-600/20 backdrop-blur-md rounded-lg border-2 border-secondary-700">
    <div class="text-left space-y-2">
        <h3 class="text-2xl font-semibold">Send us a message</h3>
        <p class="opacity-70">Fill out the form below and we'll get back to you as soon as possible.</p>
    </div>
    <form class="flex-1 flex flex-col gap-8">
        <div class="flex gap-6">
            <div class="flex-1 space-y-2">
                <label class="block text-left font-semibold" for="firstName">First Name</label>
                <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="John"
                    bind:value={firstName}
                    class="w-full border border-secondary-400 bg-secondary-600/40 backdrop-blur-md rounded px-2 py-1 outline-2 outline-transparent focus:outline-secondary-400 duration-150" />
            </div>
            <div class="flex-1 space-y-2">
                <label class="block text-left font-semibold" for="lastName">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Doe"
                    bind:value={lastName}
                    class="w-full border border-secondary-400 bg-secondary-600/40 backdrop-blur-md rounded px-2 py-1 outline-2 outline-transparent focus:outline-secondary-400 duration-150" />
            </div>
        </div>
        <div class="space-y-2">
            <label class="block text-left font-semibold" for="email">Email</label>
            <input
                type="email"
                name="email"
                id="email"
                placeholder="john@example.com"
                bind:value={email}
                class="w-full border border-secondary-400 bg-secondary-600/40 backdrop-blur-md rounded px-2 py-1 outline-2 outline-transparent focus:outline-secondary-400 duration-150" />
        </div>
        <div class="space-y-2">
            <label class="block text-left font-semibold" for="subject">Subject</label>
            <input
                type="text"
                name="subject"
                id="subject"
                placeholder="What's this about?"
                bind:value={subject}
                class="w-full border border-secondary-400 bg-secondary-600/40 backdrop-blur-md rounded px-2 py-1 outline-2 outline-transparent focus:outline-secondary-400 duration-150" />
        </div>
        <div class="flex-1 flex flex-col gap-2">
            <label class="block text-left font-semibold" for="message">Message</label>
            <textarea
                name="message"
                id="message"
                placeholder="Tell us more..."
                bind:value={message}
                class="flex-1 w-full resize-y border border-secondary-400 bg-secondary-600/40 backdrop-blur-md rounded px-2 py-1 outline-2 outline-transparent focus:outline-secondary-400 duration-150"
                rows={5}
            ></textarea>
        </div>
        <div>
            <input
                type="submit"
                value="Send Message"
                class="w-full font-semibold bg-primary-600 hover:bg-primary-800 py-1.5 cursor-pointer rounded-lg duration-150"
            />
        </div>
    </form>
</div>