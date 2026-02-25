<script lang="ts">
	import '@fontsource/poppins/300.css';
	import '@fontsource/poppins/400.css';
	import { createUser } from '$lib/firebase/db';

	import { goto } from '$app/navigation';

	let name: string = '';
	let email: string = '';
	let password: string = '';

	const signup = async () => {
		if (!name || !email || !password) {
			alert('Fill all fields');
			return;
		}

		const user = {
			name,
			email,
			password,
			role: 'user', // always user
			createdAt: new Date()
		};

		const success = await createUser(user);

		if (success) {
			goto('/login');
		}
	};
</script>

<section class="h-screen bg-[#f5f5f5]">
	<div class="grid h-full grid-cols-2 bg-white">
		<!-- LEFT SIDE -->
		<div class="relative h-full overflow-hidden">
			<img src="/images/bg-signup.svg" alt="" class="absolute inset-0 h-full w-full object-cover" />

			<!-- Logo -->
			<div class="absolute top-8 left-10">
				<img src="/images/logo.svg" class="h-12" alt="Logo" />
			</div>

			<!-- Bottom Text -->
			<div class="absolute right-12 bottom-16 left-12">
				<h1 class="text-[52px] leading-[1.15] font-extralight text-white">
					<span class=" opacity-75"
						>Welcome.<br />
						Begin your cinematic<br /></span
					>
					<span class=" opacity-65"
						>adventure now with<br />
						our ticketing<br /></span
					>
					<span class="  opacity-40">platform!</span>
				</h1>
			</div>
		</div>

		<!-- RIGHT SIDE -->
		<div class="flex items-center justify-center">
			<div class="w-[420px]">
				<h2 class="mb-6 text-3xl font-semibold">Create an account</h2>

				<input
					type="name"
					placeholder="Name"
					bind:value={name}
					class="mb-4 w-full rounded-lg border p-3"
				/>
				<input
					type="email"
					placeholder="Email"
					bind:value={email}
					class="mb-4 w-full rounded-lg border p-3"
				/>

				<input
					type="password"
					bind:value={password}
					placeholder="Password"
					class="mb-4 w-full rounded-lg border p-3"
				/>

				<input
					type="password"
					placeholder="Confirm password"
					class="mb-6 w-full rounded-lg border p-3"
				/>

				<button
					class="w-full rounded-lg bg-[#1DE782] py-3 text-white hover:bg-[#17C769]"
					on:click={signup}
				>
					Create account
				</button>

				<a href="/login">
					<p class="mt-4 text-center text-sm text-gray-500">
						Already Have An Account?
						<span class="cursor-pointer text-green-600">Log In</span>
					</p>
				</a>
			</div>
		</div>
	</div>
</section>
