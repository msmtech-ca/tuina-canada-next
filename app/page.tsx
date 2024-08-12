import Image from 'next/image'
import Button from './_components/Button'

export default function Home() {
    return (
        <div>
            <div className={`relative`}>
                <Image
                    src={`/pexels-cottonbro-studio-7235055.jpg`}
                    width={1600}
                    height={900}
                    alt={`main-splash`}
                    className={`h-[calc(100vh_-_5rem)] w-full object-cover`}
                />
                <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/40 from-0% via-40% to-100% to-transparent`}></div>
                <div className={`absolute top-1/2 -translate-y-1/2 w-full`}>
                    <div className={`container mx-auto`}>
                        <h1 className={`font-serif text-neutral-50 text-7xl leading-none w-3/5 font-bold`}>Empowering Members to Establish and Grow</h1>
                        <h2 className={`mt-8 text-neutral-50 text-2xl leading-tight w-1/2 font-medium`}>We provide the resources, certification, and support you need to establish and grow successful businesses.</h2>
                        <Button
                            to={`/members/register`}
                            className={`mt-8`}
                            variant={`dark`}
                        >Become a member today</Button>
                    </div>
                </div>
            </div>
            <div className={`bg-neutral-700 text-neutral-50 py-12`}>
                <div className={`container mx-auto grid grid-cols-3 gap-24 items-center`}>
                    <div className={`text-2xl font-bold text-center`}>Gain Credibility with Certification</div>
                    <div className={`text-2xl font-bold text-center`}>Receive Comprehensive Business Support</div>
                    <div className={`text-2xl font-bold text-center`}>Ensure Client Reimbursement with Insurance Recognition</div>
                </div>
            </div>
            <div className={`py-24`}>
                <div className={`container mx-auto grid grid-cols-2 gap-8`}>
                    <div className={`aspect-square overflow-hidden rounded-2xl shadow`}>
                        <Image
                            src={`/pexels-anntarazevich-5196821.jpg`}
                            width={1600}
                            height={900}
                            alt={`main-splash`}
                            className={`h-full w-full object-cover`}
                        />
                    </div>
                    <div className={`flex justify-center items-center`}>
                        <div className={`container`}>
                            <h2 className={`text-5xl font-serif font-bold`}>Running a massage clinic is hard enough</h2>
                            <ul className={`mt-8 list-disc list-outside flex flex-col gap-2 ps-4`}>
                                <li className={`text-xl`}>It's challenging to be acknowledged by insurance companies.</li>
                                <li className={`text-xl`}>Handling administrative tasks like accounting, paperwork, legal issues, and tech setup is overwhelming.</li>
                                <li className={`text-xl`}>Standing out and proving credibility among numerous practitioners is tough.</li>
                            </ul>
                            <Button
                                to={`/members/register`}
                                className={`mt-8`}
                                variant={`dark`}
                            >Become a member today</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`py-24 bg-neutral-700`}>
                <div className={`container mx-auto`}>
                    <h2 className={`text-6xl font-serif font-bold text-neutral-50 text-center`}>We take care of the hard parts</h2>
                    <div className={`mt-16 grid grid-cols-3 gap-8`}>
                        <div>
                            <div className={`aspect-video overflow-hidden rounded-xl shadow`}>
                                <Image
                                    src={`/pexels-kampus-5940846.jpg`}
                                    width={1600}
                                    height={900}
                                    alt={`main-splash`}
                                    className={`h-full w-full object-cover`}
                                />
                            </div>
                            <div className={`px-4`}>
                                <h3 className={`mt-4 text-3xl font-bold text-neutral-50 text-center`}>High-Quality Training</h3>
                                <p className={`mt-2 text-neutral-50 text-center`}>Benefit from our 700-hour program covering essential areas and supervised practice to ensure you provide the best care.</p>
                            </div>
                        </div>
                        <div>
                            <div className={`aspect-video overflow-hidden rounded-xl shadow`}>
                                <Image
                                    src={`/pexels-leeloothefirst-8962476.jpg`}
                                    width={1600}
                                    height={900}
                                    alt={`main-splash`}
                                    className={`h-full w-full object-cover`}
                                />
                            </div>
                            <div className={`px-4`}>
                                <h3 className={`mt-4 text-3xl font-bold text-neutral-50 text-center`}>Comprehensive Business Admin Support</h3>
                                <p className={`mt-2 text-neutral-50 text-center`}>We handle your accounting, paperwork, legal matters, and set up essential tech tools like a website and booking software, allowing you to focus on your practice.</p>
                            </div>
                        </div>
                        <div>
                            <div className={`aspect-video overflow-hidden rounded-xl shadow`}>
                                <Image
                                    src={`/pexels-kampus-8441870.jpg`}
                                    width={1600}
                                    height={900}
                                    alt={`main-splash`}
                                    className={`h-full w-full object-cover`}
                                />
                            </div>
                            <div className={`px-4`}>
                                <h3 className={`mt-4 text-3xl font-bold text-neutral-50 text-center`}>Insurance Recognition</h3>
                                <p className={`mt-2 text-neutral-50 text-center`}>Enhance your professional credibility with our numbered receipts, recognized by insurance companies, ensuring your clients can get reimbursed for their treatments, building trust and reliability.</p>
                            </div>
                        </div>
                    </div>
                    <div className={`mt-16 w-full flex justify-center items-center`}>
                        <Button
                            to={`/members/register`}
                            variant={`light`}
                        >Become a member today</Button>
                    </div>
                </div>
            </div>
            <div className={`py-24 bg-neutral-50`}>
                <div className={`container mx-auto`}>
                    <h2 className={`text-6xl font-serif font-bold text-center`}>We've helped</h2>
                    <p className={`mt-2 text-center`}>Our members have successfully established and grown their practices with our support, overcoming challenges and gaining recognition.</p>
                    <div className={`mt-8 max-w-screen-sm mx-auto overflow-hidden rounded-2xl bg-neutral-200 p-8`}>
                        <p className={`text-center text-xl font-medium`}>"The Canadian Tui Na Association provided me with the support and recognition I needed to grow my business. Their resources are invaluable!"</p>
                    </div>
                    <p className={`mt-4 text-center text-xl font-bold`}>Jane Doe, Certified Therapist</p>
                    <div className={`mt-4 flex gap-8 justify-center items-center`}>
                        <Image
                            src={`/logo-intact.svg`}
                            width={160}
                            height={160}
                            alt={`logo-insurance`}
                            className={`h-32 w-auto object-cover`}
                        />
                        <Image
                            src={`/logo-beneva.svg`}
                            width={160}
                            height={160}
                            alt={`logo-insurance`}
                            className={`h-16 w-auto object-cover`}
                        />
                        <Image
                            src={`/logo-canada-life.svg`}
                            width={160}
                            height={160}
                            alt={`logo-insurance`}
                            className={`h-12 w-auto object-cover`}
                        />
                        <Image
                            src={`/logo-manulife.svg`}
                            width={160}
                            height={160}
                            alt={`logo-insurance`}
                            className={`h-8 w-auto object-cover`}
                        />
                        <Image
                            src={`/logo-sunlife.svg`}
                            width={160}
                            height={160}
                            alt={`logo-insurance`}
                            className={`h-32 w-auto object-cover`}
                        />
                    </div>
                    <div className={`mt-4 w-full flex justify-center items-center`}>
                        <Button
                            to={`/members/register`}
                            variant={`dark`}
                        >Become a member today</Button>
                    </div>
                </div>
            </div>
            <div className={`py-24 bg-neutral-900`}>
                <div className={`container mx-auto`}>
                    <h2 className={`text-6xl font-serif font-bold text-center text-neutral-50`}>Choose the Membership That Fits Your Needs</h2>
                    <div className={`mt-12`}>
                        <div className={`grid grid-cols-3 gap-4`}>
                            <div className={`overflow-hidden rounded-2xl bg-neutral-50 p-8 text-center`}>
                                <h3 className={`mt-4 text-2xl font-bold`}>Small</h3>
                                <div className={`mt-4 text-base`}>Starting at</div>
                                <div className={`font-bold text-3xl`}>$2,000/year</div>
                                <ul className={`mt-4 list-disc list-outside flex flex-col gap-2 ps-4 text-left`}>
                                    <li><b>Membership Enrollment:</b> Join our professional network.</li>
                                    <li><b>Insurance Recognition:</b> Your membership details are accessible to insurance companies for client reimbursement.</li>
                                    <li><b>Professional Community:</b> Connect with other Tui Na therapists.</li>
                                </ul>
                            </div>
                            <div className={`overflow-hidden rounded-2xl bg-primary-100 p-8 text-center`}>
                                <h3 className={`mt-4 text-2xl font-bold`}>Medium</h3>
                                <div className={`mt-4 text-base`}>Starting at</div>
                                <div className={`font-bold text-3xl`}>$10,000/year</div>
                                <ul className={`mt-4 list-disc list-outside flex flex-col gap-2 ps-4 text-left`}>
                                    <li><b>Includes Everything from Basic:</b> Enjoy all the benefits of Basic Membership.</li>
                                    <li><b>Full Admin Support:</b> We handle accounting, paperwork, and legal matters.</li>
                                    <li><b>Technology Package:</b> Get a professional website, booking software, and tech support.</li>
                                </ul>
                            </div>
                            <div className={`overflow-hidden rounded-2xl bg-neutral-50 p-8 text-center`}>
                                <h3 className={`mt-4 text-2xl font-bold`}>Large</h3>
                                <div className={`mt-4 text-base`}>Starting at</div>
                                <div className={`font-bold text-3xl`}>$20,000/year</div>
                                <ul className={`mt-4 list-disc list-outside flex flex-col gap-2 ps-4 text-left`}>
                                    <li><b>Includes Everything from Premium:</b> Access all Premium Membership benefits.</li>
                                    <li><b>Personalized Mentorship:</b> Receive one-on-one coaching and business strategy sessions.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={`mt-12 w-full flex justify-center items-center`}>
                        <Button
                            to={`/members/register`}
                            variant={`light`}
                        >Become a member today</Button>
                    </div>
                </div>
            </div>
            <div className={`py-24 bg-neutral-50`}>
                <div className={`container mx-auto`}>
                    <h2 className={`text-6xl font-serif font-bold text-center`}>How it works</h2>
                    <div className={`mt-12 flex flex-col gap-12 justify-center items-start max-w-screen-sm mx-auto`}>
                        <div>
                            <h3 className={`text-3xl font-bold`}>1. Sign Up</h3>
                            <p className={`text-xl`}>Fill out the membership form.</p>
                        </div>
                        <div>
                            <h3 className={`text-3xl font-bold`}>2. Get Matched</h3>
                            <p className={`text-xl`}>We'll contact you to understand your needs and recommend a plan.</p>
                        </div>
                        <div>
                            <h3 className={`text-3xl font-bold`}>3. Start Growing</h3>
                            <p className={`text-xl`}>Access our resources, support, and training to build your successful practice.</p>
                        </div>
                    </div>
                    <div className={`mt-12 w-full flex justify-center items-center`}>
                        <Button
                            to={`/members/register`}
                            variant={`dark`}
                        >Become a member today</Button>
                    </div>
                </div>
            </div>
            <div className={`py-24 bg-neutral-100`}>
                <div className={`container mx-auto grid grid-cols-2 gap-8`}>
                    <div className={`flex justify-center items-center`}>
                        <div className={`container`}>
                            <h2 className={`text-5xl font-serif font-bold`}>Our Objective</h2>
                            <p className={`mt-8`}>Tui Na is a Chinese therapeutic massage that has been a vital component of Traditional Chinese Medicine (TCM) for millennia, alongside acupuncture and herbal medicine. Practiced in virtually all hospitals in China, Tui Na offers a satisfying relief by applying firm pressures along energy meridians using various finger, palm, and elbow movements. This technique not only alleviates blockages causing pain but also rebalances the body's energy.</p>
                            <p className={`mt-8`}>At the Canadian Tui Na Association, we are committed to supporting massage therapists in overcoming their professional challenges. With our comprehensive training, administrative support, and recognized certification, you can confidently grow your practice. Join us today and become part of a network dedicated to excellence and professional growth.</p>
                            <Button
                                to={`/members/register`}
                                className={`mt-8`}
                                variant={`dark`}
                            >Become a member today</Button>
                        </div>
                    </div>
                    <div className={`aspect-square overflow-hidden rounded-2xl shadow`}>
                        <Image
                            src={`/amy-hirschi-K0c8ko3e6AA-unsplash.jpg`}
                            width={1600}
                            height={900}
                            alt={`main-splash`}
                            className={`h-full w-full object-cover`}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
