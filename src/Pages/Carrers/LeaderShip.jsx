import React from "react";
import CareerNav from "../../components/Navbar/CarrerNav";
import Footer from "../../components/Home/footer/Footer";

const LeaderShip = () => {

    return (
        <div className="App">
            <CareerNav />
            <Header />
            <Section />
            <LearnMore />
            <Footer />
        </div>
    )
}


const Header = () => (
    <header className="hero bg-white">
        <div class="flex md:flex-row justify-between p-4 items-center">
            <div className="flex flex-col p-2 w-50 h-full">
                <div className="flex-grow">
                    <h2 className="text-4xl">Our Leadership Principles</h2>
                    <span className="text-lg">
                        We are committed to fostering a workplace where diversity, equity, and inclusion are not just values, but integral aspects of our company culture. We believe that a diverse team, enriched by different backgrounds, experiences, and perspectives, drives innovation and creativity.
                    </span>
                </div>
            </div>
            <div className="p-4 w-50 ml-20">
                <img
                    src="https://s3-alpha-sig.figma.com/img/5cf7/c489/6722183bdd884d6b428989463d24eab8?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l8kiRaRn7iGTjKZ8i4RitYLnaB9aj4TRdh88~1d-ZwOwbVSfI2X5I~8jlm01xgHgZxt38QqPGy2DAlNq5hWrOi26lnXXiX7waaO95vhCi3b5p7lWkmJ11UEbyG7RLblUYybXGqIk1yR2vp7T9AmRUtvpoNFQMQ7G46AOY5C3rT82xxs5vmp3bJoUFRYdvEHCIouCvIhs90XJzx2Z9K5vZ89ej84ZjwgNjbaKgIrJf2EqBKsW0vk8wb7kj-yvATZ6G~0KVn5ixmoyhpZ~ddO0sfVM8WwfgLzpxVlhnDZB1gX6FY4I8FKIwF49Snypu63790mCB5RD2pysA0GHLtxbcw__"
                    style={{ width: '100%', height: 300 }} />
            </div>
        </div>
    </header>
);

const Section = () => {
    return (
        <div className="flex flex-col items-center">
            <div class="flex md:flex-row justify-between p-4 items-center">
                <div className="flex flex-col p-2 w-50 h-full">
                    <div className="flex-grow">
                        <h4 className="text-2xl text-[#5D5D5D]">Citizens Obsession</h4>
                        <ul className="list-disc pl-5">
                            <li className="text-sm">
                                our primary focus is on our users—both employees and customers. We strive to understand their needs, exceed their expectations, and provide the best possible experience. Everything we do is driven by a commitment to put our users first, ensuring that our services and culture revolve around their satisfaction and well-being.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="p-4 w-50 ml-20 h-[30%]">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/870d/28b1/79df557b488c0192f68c72f28cc1f91a?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X-6LpBfaFSrq1-g3RJWfLptCyMAUZc665QHdLl~upst1cSr0CGRh~zUi5-VeybwxNXTC1-88rwIo8EaWS1uMR-yFZb2QLWpWru~ltEBqJyKlOzyXgkukz3gckIDMCRAhsH5ch2W0OVlXrD6kFBDytQ1unXkpzzrX~6r1UhS8HiUwdcqGtOgY5SojRR-TXS3awFpXTseH3XzxU1RZCLTDNWLsuqdyTaTF78znDxVRdsDE-tgrmC~KFas~6Ccy~f017rnhM29Stx6gBYm8gtYl4C7tk9WXnNIw~F7yUQuqm8T52rc-M~T85CguLs4hxpiwrjqDlz77PsLmJoVHZwPBog__"
                        style={{ width: '100%', height: 300 }} />
                </div>
            </div>
            <div className="w-[90%] h-[2px] bg-gray-50" />
        </div>
    )
}

const LearnMore = () => (
    <section className="bg-white py-5 flex flex-col items-center">
        <div className="container explore">
            <h3 className="text-[#636363] font-[Gilroy-SemiBold]">We Think & Learn More Than We Work</h3>
            <div className="learn-more-content">
                <div className="learn-more-item">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/63ae/399a/1446cadf8dc550dca65a6ebbeee9d210?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yen3f86vxdMvtfGaMX~FBf3nvxf6xKvIQQHgWJGwBsftw3FqwSEI93jTGOIzwUyaXB587XvQ1pYTB5sHMfH76BlRtDY5tAn6ld3OmSDO1NwDAOLN~ONbBqsllD1rVyiVbW~DCVuuiq1KHh6ncxadeSjBr-Tzc8hIwQAqKtkM8vCIQlUa3GIP-bXywbMrrm20CnSvmSj4MFLx1Ea0yEVjOgOtow6npq72qQtB8CEjD2bGTFaljHnD6kG6uyJLyCOf6rtSW0-h9Ywo0GV9EZajXELohD9qA74XFTa9rcKxmIJwk9o9LWVWHoD4WcxGkJkDWLNLtOWqmWvfnSrZM8z8jw__"
                        alt="Teams"
                        className="learn-more-img"
                    />
                    <h6 className="learn-more-title">Learn with Curiosity</h6>
                    <p className="learn-more-text">
                        We believe in continuous learning and curiosity-driven growth. Our team members are encouraged to explore new ideas, stay updated with the latest trends, and constantly seek out ways to improve. This principle fosters an environment where innovation thrives, and everyone is empowered to contribute creatively to our collective success.
                    </p>
                </div>
                <div className="learn-more-item">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/c1ab/9641/31b415bc981922f2b86e7f4450691d31?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ulg9lzvaUwrwy91IOZoE7CqcfN18P7~lsikEXlBurm-cp-iPW5yr8y1FFXuYcLodBpfur0chAWKCo3nODy~rhxl9Kgu4asthOYwnJiYhVQ5eX0XqPbpIkflZQGJhkNwiHD87p~h6d27VqX4sOBcyiOvBTxMJCCIHzIN2njume8-DWb1YQuUNbStD4H55zmlncHaujgEdiV-dP3On9aYcAhF~FMYnucsxozqrFCeadN9VRuG1vtPBtDSs6pMInQYGETST0RM9dQLHep7jycEaOihD2EV81Mn2khefeyVnIzHEby4pD6yq~2ZwGaHPPGcz0wgVpouWSIF138HylMD~1g__"
                        alt="Job Categories"
                        className="learn-more-img"
                    />
                    <h6 className="learn-more-title">Hire and Develop the Best</h6>
                    <p className="learn-more-text">
                        We are committed to building a team of exceptional talent. By hiring the best and providing opportunities for continuous development, we ensure that our team members grow both personally and professionally. We believe in nurturing potential, recognizing achievements, and creating leaders within the organization.
                    </p>
                </div>
                <div className="learn-more-item">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/c1e1/5680/419c19a52c56d948939cea8cfcbd3a02?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TExKKtdS-oYBNsorCQOIS36mv5AurxQBSr77wpux8nYjT5ljGcPUYn12FhxetJd5jqedKBB-cumw00xTp2T~b9VWU7EzazjtTN9HMaB~lWQbL5HFrBhP3ETvaqHbVra4dyx3JIMFa4LPBB5cO3nZiaI32jYdIzlJckrw463hQ09BKykXZFDb47zxtkNc3v-06DAh0ws~MLSNBmNmbrOrJJmiDaBIIus5m1urQjcS6ZsGlh9evlPiDaEy5dKCmJNDORFGLbkz7QlsdGEsZ5o8wrIlJ1Q19RZlpfw~jAl~CisFtKyjaELjSlgrlnHXSfm56ldFvLtW8mRp3odfHs-v3g__"
                        alt="Locations"
                        className="learn-more-img"
                    />
                    <h6 className="learn-more-title">Think Big, Innovate, and Simplify</h6>
                    <p className="learn-more-text">
                        We encourage our team to think beyond the ordinary and embrace bold ideas. Innovation is at the core of our strategy, and we aim to simplify complex challenges through creative solutions. By thinking big, we set ambitious goals and continuously push the boundaries of what's possible.
                    </p>
                </div>
                <div className="learn-more-item">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/902b/e6c0/82a9fe37601fc6d891fb2172ffefcc9a?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jkAToNn6zImsQ063KjfLrobObYzLJ~itn-KJmBtb~Z5hXlP4kJJaotSrU9Ypg0miy6aQD7lz22ZvsWmkq-Dev0v6odHnZYmWx7qkLJWxO2u-Yutk1R3sxCvtrOFH9Equs0R8Bl~Hra7dO0uXJ~~iell-46hheeatSQuIOIRAk-AHjguUZJaYWIp9JmZXMXBSxCEow3o3s3-d30dCuvd4Jsarm2bcjj2kmOYeynky5oFoROnEHcSZiXR20twhEWhHNdgbWDonvXqDFXXynVT2P9yR2aSaxRHw-DYrs51dWmnQ1orz1r7nPyKO4VV1ibiMjuV~vEgqt3HLcixvniV4AA__"
                        alt="Locations"
                        className="learn-more-img"
                    />
                    <h6 className="learn-more-title">Earn Trust</h6>
                    <p className="learn-more-text">
                        Trust is the foundation of all our relationships—whether with employees, customers, or partners. We believe in transparency, integrity, and delivering on our promises. By consistently acting with honesty and responsibility, we earn and maintain the trust of everyone we engage with.
                    </p>
                </div>
            </div>
        </div>
        <div className="w-[90%] h-[2px] bg-gray-50" />
    </section>
);



export default LeaderShip;