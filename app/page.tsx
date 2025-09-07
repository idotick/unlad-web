import Image from 'next/image';
import Link from 'next/link';

import { mukta_malar } from '@/app/styles/fonts';
import styles from '@/app/styles/landing.module.css';

export default function Home() {
	return (
		<>
			<header>
				<h1>UNLAD</h1>
				<ul>
					<li><Link href='#' className={`${mukta_malar.className}`}>WHAT WE DO</Link></li>
					<li><button className={`${mukta_malar.className}`}>JOIN US</button></li>
				</ul>
			</header>

			<main>
				<section className={`${styles.above_the_fold}`}>
					<div className={`${styles.headline}`}>
						<p className={`${styles.main_headline}`}>
							Lorem <span>ipsum</span> dolor <span>sit</span> amet consectetur <span>adipiscing</span> elit.
						</p>
						<p className={`${styles.supporting_headline} ${mukta_malar.className}`}>
							Quisque faucibus ex sapien vitae pellentesque sem placerat.
						</p>
						<button>DOWNLOAD ISKOLAR</button>
					</div>
					<Image
						src='/file.svg'
						width={350}
						height={350}
						alt='App Graphic'
					/>
				</section>

				<section className={`${styles.below_the_fold} ${styles.vertical_align}`}>
					<p className={`${styles.middle_text}`}>
						Lorem ipsum dolor sit amet consectetur adipiscing elit.
						Sem placerat in id cursus mi pretium tellus.
						Sed diam urna tempor pulvinar vivamus fringilla lacus.
						Nisl malesuada lacinia integer nunc posuere ut hendrerit.
					</p>
					<p className={`${styles.middle_text}`}>
						Ad litora torquent per conubia nostra inceptos himenaeos.
						Dis parturient montes nascetur ridiculus mus donec rhoncus.
						Maximus eget fermentum odio phasellus non purus est.
						Dictum risus blandit quis suspendisse aliquet nisi sodales.
						Luctus nibh finibus facilisis dapibus etiam interdum tortor.
						Tincidunt nam porta elementum a enim euismod quam.
					</p>
					<p className={`${styles.middle_text}`}>
						Velit aliquam imperdiet mollis nullam volutpat porttitor ullamcorper.
						Primis vulputate ornare sagittis vehicula praesent dui felis.
						Accumsan maecenas potenti ultricies habitant morbi senectus netus.
						<span> Hac habitasse platea dictumst lorem ipsum dolor sit.</span>
					</p>
				</section>

				<section className={`${styles.below_the_fold} ${styles.dotted_back} ${styles.vertical_align}`}>
					<h1>Services made for scholars</h1>
					<div className={`${styles.horizontal_align}`}>
						<div className={`${styles.service_box}`}></div>
						<div className={`${styles.service_box}`}></div>
						<div className={`${styles.service_box}`}></div>
					</div>
					<div className={`${styles.horizontal_align}`}>
						<div className={`${styles.service_box}`}></div>
						<div className={`${styles.service_box}`}></div>
						<div className={`${styles.service_box}`}></div>
					</div>
				</section>
			</main>
		</>
	);
}
