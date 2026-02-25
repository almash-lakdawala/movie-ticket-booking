<script lang="ts">
	import { goto } from '$app/navigation';
	import { loginUser } from '$lib/firebase/auth';
	import { currentUser } from '$lib/stores/user';

	let email: string = '';
	let password: string = '';

	const handleLogin = async () => {
		const user = await loginUser(email, password);

		if (!user) {
			alert('Invalid credentials');
			return;
		}

		currentUser.set(user);

		if (user.role === 'admin') {
			goto('/admin/dashboard');
		} else {
			goto('/');
		}
	};
</script>

<section class="h-screen">
	<div class="relative h-full overflow-hidden">
		<!-- Background image -->
		<img src="/images/bg.svg" class="absolute inset-0 h-full w-full object-cover" alt="" />

		<div class="absolute inset-0 flex items-center justify-center">
			<div class="w-[620px] rounded-2xl bg-white p-18 shadow-lg">
				<h2 class="mb-6 text-3xl font-semibold">Login to your account</h2>

				<input
					type="email"
					placeholder="Email"
					bind:value={email}
					class="mb-4 w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-green-400"
				/>

				<input
					type="password"
					placeholder="Password"
					bind:value={password}
					class="mb-4 w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-green-400"
				/>

				<button
					class="w-full rounded-lg bg-[#1DE782] py-3 font-medium text-white transition hover:bg-[#17C769]"
					on:click={handleLogin}
				>
					Login now
				</button>

				<a href="/signup">
					<p class="mt-4 text-center text-sm text-gray-500">
						Dont't Have An Account?
						<span class="cursor-pointer font-medium text-green-600">Register Here</span>
					</p>
				</a>
			</div>
		</div>
	</div>
</section>
