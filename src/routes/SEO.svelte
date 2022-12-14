<script>
	import { MetaTags } from 'svelte-meta-tags';
	import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '$lib/constants';
</script>

<MetaTags
	title={SITE_NAME}
	titleTemplate="%s | a3k.me"
	description={SITE_DESCRIPTION}
	canonical={SITE_URL}
	openGraph={{
		url: SITE_URL,
		title: SITE_NAME,
		description: SITE_DESCRIPTION,
		images: [
			{
				url: `${SITE_URL}/og.jpg`,
				width: 800,
				height: 600,
				alt: 'Og Image Alt'
			}
		],
		site_name: SITE_NAME
	}}
	twitter={{
		handle: '@amr3k_',
		site: '@amr3k_',
		cardType: 'summary_large_image',
		title: SITE_NAME,
		description: SITE_DESCRIPTION,
		image: `${SITE_URL}/og.jpg`,
		imageAlt: "Happy birthday Sohaib!"
	}}
	facebook={{
		appId: '1234567890'
	}}
/>
