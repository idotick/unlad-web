"use client"

import Image from 'next/image';
import Link from 'next/link';

import {
	ArrowRight,
	Info as InfoIcon,
	ChevronsUp as UpdateIcon,
	PersonStanding as AccessibleIcon,
	Link as LinkIcon,
	FolderOpen as FolderIcon,
	BellRing as BellIcon,
	Download as DownloadIcon,
	Focus as FocusIcon,
	CircleChevronUp as GrowIcon,
} from 'lucide-react';

import Typewriter from 'typewriter-effect';

import { poppins, mukta_malar } from '@/app/styles/fonts';
import general_styles from '@/app/styles/general.module.css';
import styles from '@/app/styles/landing.module.css';

import HeroImages from '@/app/components/HeroImageContainer';
import ImageCard from '@/app/components/ImageCard';
import IconCard from '@/app/components/IconCard';

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

			<section className={`${styles.above_the_fold}`}>
				<div className={`${styles.side_text}`}>
					<div className={`${styles.main_headline}`}>
						Stay 
						<span className={`${styles.typewriter}`}>
							<Typewriter
								component={'p'}
								options={{
									strings: [' Connected.', ' Informed.', ' Ahead.'],
									autoStart: true,
									loop: true,
								}}
							/>
						</span>
					</div>
					<p className={`${styles.supporting_headline} ${mukta_malar.className}`}>
						Accessing information shouldn’t be a struggle.
						With Iskolar, you can focus on what truly matters: learning.
					</p>
					<button className={`${poppins.className}`}>
						ISKOLAR COMING SOON...
						<ArrowRight size={15} className='button_icon' />
					</button>
				</div>
				<HeroImages
					src={[
						'/hero-image-1.svg',
					]}
					width={400}
					height={400}
					alt='Hero Image'
				/>
			</section>

			<section className={`${styles.below_the_fold} ${styles.dotted_back} ${general_styles.vertical_align}`}>
				<h1 className={`${styles.spaced_header}`}>Advantages of <span>Iskolar</span></h1>
				<div className={`${general_styles.horizontal_align}`}>
					<div>
						<div className={`${styles.info_textbox}`}>
							<p className={`${styles.info_text}`}>Centralized Information</p>
							<InfoIcon size={60} className={`${styles.info_icon}`} />
						</div>
						<Image
							src='/advantages-1.svg'
							width={400}
							height={400}
							alt='People looking at a laptop'
							/>
					</div>
					<div>
						<div className={`${styles.info_textbox}`}>
							<p className={`${styles.info_text}`}>Real-time Updates</p>
							<UpdateIcon size={60} className={`${styles.info_icon}`} />
						</div>
						<Image
							src='/advantages-2.svg'
							width={400}
							height={400}
							alt='Person using Iskolar app'
						/>
					</div>
					<div>
						<div className={`${styles.info_textbox}`}>
							<p className={`${styles.info_text}`}>Accessible Anywhere</p>
							<AccessibleIcon size={60} className={`${styles.info_icon}`} />
						</div>
						<Image
							src='/advantages-3.svg'
							width={400}
							height={400}
							alt='A phone on a table with the Iskolar app open'
						/>
					</div>
				</div>
			</section>

			<section className={`${styles.below_the_fold} ${general_styles.horizontal_align} ${styles.darker}`}>
				<p className={`${styles.paragraph} ${styles.side_text}`}>
					<span>Iskolar</span> keeps every student on the same page by
					<span> centralizing school updates</span> in one simple app.
					Don’t know where to go for a batch class? We got you.
					Need to manage your cafeteria balance?
					Done. All the information is
					<span> available at hand’s reach.</span>
				</p>
				<div className={`${general_styles.vertical_align}`}>
					<ImageCard
						src='/dorms.png'
						width={400}
						height={300}
						alt='Picture of the PISAY dorms'
					/>
					<ImageCard
						src='/astb.png'
						width={400}
						height={300}
						alt='Picture of the PISAY ASTB'
					/>
					<ImageCard
						src='/admin.png'
						width={400}
						height={300}
						alt='Picture of the PISAY admin building'
					/>
				</div>
			</section>

			<section className={`${styles.below_the_fold} ${general_styles.vertical_align} ${styles.before_footer}`}>
				<h1 className={`${general_styles.small_header}`}>Services made for scholars</h1>
				<div className={`${general_styles.horizontal_align}`}>
					<IconCard
						Icon={LinkIcon}
						header_text='Connect'
						description='Unite students, teachers, and parents with one seamless platform.'
					/>

					<IconCard
						Icon={FolderIcon}
						header_text='Organize'
						description='Keep classes, events, and deadlines structured in a smart calendar.'
					/>

					<IconCard
						Icon={BellIcon}
						header_text='Notify'
						description='Stay in the loop with instant updates and real-time alerts.'
					/>
				</div>
				<div className={`${general_styles.horizontal_align}`}>
					
					<IconCard
						Icon={DownloadIcon}
						header_text='Access'
						description='Find learning guides, and school resources anytime, anywhere.'
					/>

					<IconCard
						Icon={FocusIcon}
						header_text='Focus'
						description='Spend less time searching for information and more time learning.'
					/>

					<IconCard
						Icon={GrowIcon}
						header_text='Grow'
						description='Be part of a connected school community that supports your success.'
					/>
				</div>
			</section>

			<footer></footer>
		</>
	);
}
