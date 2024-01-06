import { CURRENT_LANGUAGE } from './LocaleSelector.astro';

<Fragment>
	<script>
		{() => {
			const selects = document.getElementsByClassName('select_locale');
			for (const select of selects) {
				if (select instanceof HTMLSelectElement) {
					select.addEventListener('change', () => {
						window.location.href = `/${select.value}`;
					});
				}
			}
		}}
	</script>

	<button
		id={id}
		class="inline-flex h-auto items-center rounded-md bg-transparent px-2.5 text-center font-lato text-[var(--default-font-color2)] transition-all duration-200 ease-in-out hover:text-teal-300 focus:outline-none focus:ring-4 focus:ring-[--default-secundary-font-color-2] focus:drop-shadow-[0rem_0rem_0.3rem_aqua]"
		type="button"
		{...{ 'data-dropdown-toggle': 'dropdown' }}
	>
		{CURRENT_LANGUAGE}
		<svg
			class="ms-3 h-2.5 w-2.5"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 10 6"
			{...{ 'aria-hidden': 'true' }}
		>
			<path
				stroke="currentColor"
				d="m1 1 4 4 4-4"
				{...{
					'stroke-linecap': 'round',
					'stroke-linejoin': 'round',
					'stroke-width': '2',
				}}
			></path>
		</svg>
	</button>

	<div id="dropdown" class="z-10 hidden w-24 divide-y rounded-lg shadow">
		<ul
			class="rounded-md bg-[#453662] py-2 text-sm drop-shadow-[0rem_0rem_0.3rem_aqua]"
			{...{ 'aria-labelledby': 'dropdownLocaleButton' }}
		>
			<li>
				<a
					href="/es"
					class="block px-3 py-2 transition-all duration-200 ease-in-out hover:text-teal-300 hover:drop-shadow-[0rem_0rem_0.3rem_aqua]"
				>
					{SPANISH}
				</a>
			</li>
			<li>
				<a
					href="/"
					class="block px-3 py-2 transition-all duration-200 ease-in-out hover:text-teal-300 hover:drop-shadow-[0rem_0rem_0.3rem_aqua]"
				>
					{ENGLISH}
				</a>
			</li>
		</ul>
	</div>
</Fragment>;
