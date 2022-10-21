import { GithubIcon } from 'app/FeatherIcons'
import styles from 'app/Footer.module.css'

export const Footer = () => (
	<footer className={styles.Footer}>
		<section className={styles.Copyright}>
			<nav className={styles.Nav}>
				<a
					href={import.meta.env.PUBLIC_HOMEPAGE}
					rel="noopener noreferrer"
					target="_blank"
					title={'Contribute to this project on GitHub'}
				>
					<GithubIcon />
				</a>
			</nav>
			<p>
				&copy; 2022{' '}
				<a
					href="https://zaidbuilds.tech"
					rel="noopener noreferrer"
					target="_blank"
				>
					Zaid Mukaddam
				</a>
				. All rights reserved.
			</p>
		</section>
	</footer>
)
