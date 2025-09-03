import { muktaMalar } from '@/app/styles/fonts';
import Image from 'next/image';
import Link from 'next/link';
import '@/app/styles/landing.css';

export default function Home() {
	return (
		<main>
			<header>
				<h1>UNLAD</h1>
				<ul>
					<li><Link href='#' className={`${muktaMalar.className}`}>WHAT WE DO</Link></li>
					<li><button className={`${muktaMalar.className}`}>JOIN US</button></li>
				</ul>
			</header>

			<section>
				<div>
					<p>Lorem <span>ipsum</span> dolor <span>sit</span> amet consectetur <span>adipiscing</span> elit.</p>
					<p className={`${muktaMalar.className}`}>Quisque faucibus ex sapien vitae pellentesque sem placerat.</p>
					<button>DOWNLOAD ISKOLAR</button>
				</div>
				<Image
					src='/file.svg'
					width={350}
					height={350}
					alt='App Graphic'
				/>
			</section>
		</main>
	);
}
