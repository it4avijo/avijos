import React from "react";
import CareerNav from "../../components/Navbar/CarrerNav";
import Footer from "../../components/Home/footer/Footer";

const Diversity = () => {

    return (
        <div className="App">
            <CareerNav />
            <Header />
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
                    <h2 className="text-4xl">Diversity, Equity, and Inclusion</h2>
                    <span className="text-lg">
                        We are committed to fostering a workplace where diversity, equity, and inclusion are not just values, but integral aspects of our company culture. We believe that a diverse team, enriched by different backgrounds, experiences, and perspectives, drives innovation and creativity.
                    </span>
                </div>
            </div>
            <div className="p-4 w-50 ml-20">
                <img
                    src="https://s3-alpha-sig.figma.com/img/f1ac/912b/935f7c34ba5887f7ca4638bd422d0640?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hx~~-CY5m0f7Zdn7XJVhh34lrxizdA-~-PwdPlkjVDNe-HDnRuBcSMdbX7eFx7V~l7HT76ZjFHy6Rv5SwEj4idaDhAolof9SB37kgzd3lT0nxMywglJRJN8LMnwl9aSMJ6DRDPSLumG133q2ARlswPabhQ-EfsfcM95-MSvKksmkiWtDkgDXKQcNc82fKIPnirfhVSE1ACI1FdSX960Var8TXsgIBfe2HgDlrrDVH-DfMrGE-UsExSfWwG1xmCjGwO5B5iOSNj2q8V-MDvk1LCN8NFkqoGhjfZNQSDkWoV61cBq7RkuVEG71SXHqh1AAf91Z~ScSU8mkmWKau7bgXg__"
                    style={{ width: '100%', height: 300 }} />
            </div>
        </div>
    </header>
);

const LearnMore = () => (
    <section className="bg-white py-2 border-b-[1px]">
        <div className="container explore">
            <h3 className="text-[#636363] font-[Gilroy-SemiBold]">We Think & Learn More Than We Work</h3>
            <div className="learn-more-content">
                <div className="learn-more-item">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/ab97/535f/188bf42b936cf625469bca52e7734729?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZqnfFe75SUMQNKUKuBi3eFYO5MC0Gg170u51h-klQ4XbaFBKanquDhGvTQ8CTaRVHznlELxGl10GYbDOCM~WK~I4s6ey1tB--TKHt8C2HZghBXibD33dTVfi3w7TsJnA9KXpYkBT8FuI44Q7DjJdUdDoumrbIXWPIl5v3HpeILiMrXdJpX9Hc7JQEy9sfjxH~dfg7QuJcWwrNZdZ66iPYr2lsQBE1EN9J8HrrTLuiCKCLIlsqhWmo4rw4NtK09cezYnAgj36ECzsEgwzKhF0m78K~Q0yn~EJAY1VoZP1ofKnpKaFcMbR8BoKMA9F4n30nTdlCjTIZR76-zkQMKC~qg__"
                        alt="Teams"
                        className="learn-more-img"
                    />
                    <h6 className="learn-more-title">Diversity</h6>
                    <p className="learn-more-text">
                        We embrace the unique qualities that each employee brings to the table. Our team is made up of individuals from various walks of life, including different ethnicities, genders, ages, abilities, and cultures. This diversity fuels our growth and strengthens our ability to serve a diverse global community.
                    </p>
                </div>
                <div className="learn-more-item">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/95c7/99f0/5afdcacdf8d024fbdebba7a310c3f016?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eAL~McTjViRiW~mHwCW1u9Ax2C5AsMfarQacvzMD29ejZ~7hX4EY1fz0loY3iP72vcZySrKtfXs54iKMgF7ome~8GU4uK5GAHj3uq9nWDN7OrGymyjc8jycCChVsaxjEytllmNr60AoJt6dMOijyQUL8rHTkEyUzCJaFJbZ11brQ2z3bK92fDCs5Zyz1pExLX~g8XXFUZ61tNTIrmwGCwRx19c3r~Y0uEhPcu5vqghg4yH4cdxQ8x7i4kzsu-D7klbJ9FGMo6-q0Upkse7JLCRJwirb4C1MrVkHflZv8i9f1Hc-ps3-4Tlhd9kbRUuDq1xt8VhKY4u0BXeCrs2ZGdw__"
                        alt="Job Categories"
                        className="learn-more-img"
                    />
                    <h6 className="learn-more-title">Equity</h6>
                    <p className="learn-more-text">
                        Equity means ensuring that all employees have access to the same opportunities for growth, development, and success. We are dedicated to providing fair treatment, resources, and support, tailored to meet the unique needs of each team member. Our commitment to equity ensures that everyone can thrive and contribute to their fullest potential.
                    </p>
                </div>
                <div className="learn-more-item">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/4ba9/cac1/5d9425c1e04cf37c6cf4a25480064ff2?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mC9NxigwdLEp6uP6Ldr~cGzGUOk1fN4EZjg~wxb6D5pc0b-JNutcocF3-F~U3xGeInzxh1jGwaddsvno~pCTpucNT~yEaPZhRRJTb44W~r4vj0p3QrZUWlOmGR3OvXcPBNkGZps01mlki8IIlHe0JQ44GLDJ41LaSjx34~2tJvO3tvzSFIrkjXKJrG2VTcr-9cwk2NJfukPwPVqyqFscIqjQ9-bjbqizrPHrI5CxpGTgswrWcjwqTDivsTRmPWIr16Kc0LRsFKoOsdjnO7ee6EjDfVmGWNDP0nFlIokdzZVHg8PqRNMHTddOYRk4-J5HNOZYHmXKj7NonidyPyBY5A__"
                        alt="Locations"
                        className="learn-more-img"
                    />
                    <h6 className="learn-more-title">Inclusion</h6>
                    <p className="learn-more-text">
                        Inclusion is about creating a welcoming environment where everyone feels valued, respected, and able to be their authentic selves. We work hard to cultivate a culture of belonging, where all voices are heard, and everyone feels empowered to share their ideas and perspectives. We believe that when people feel included, they are more engaged, innovative, and productive
                    </p>
                </div>
                <div className="learn-more-item">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/ce2c/1541/8c1abdcf6ecb990d0b8dc14f2e01732f?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V7v29gYFSbiKLgVoxrYYBS30oDicPxXQutJle6NJCkG3wAWbVtOMbPzMKhFD9QBGvKScyvL54n0xgZqHQPWZPJVVYlQSTLWHlsRxBU8J9ujnSYpl7KGBsDWBesLQuOb8Kl6VYJo~4hcR9kd2R5M4kRxVFWkzqXmv7Pu4AFbGyQARhdmBmI5Sfg2iWg7ut~3moBDPCxI0a1306~0iso1B8DoEvpgQNXvwyx9WNuy7QQX4BmE9tPQw8nxSiF4rjNHcMB5l~Cf35N5Z2sS~WOlvQ0AubqlPnpW0~Vh1b3Q6mRE~j8oy-iN5oexLYUzogVJCq1UnqtAC1etAfIfH0aYDjg__"
                        alt="Locations"
                        className="learn-more-img"
                    />
                    <h6 className="learn-more-title">Our Commitment</h6>
                    <p className="learn-more-text">
                        Our commitment to diversity, equity, and inclusion is reflected in our hiring practices, employee development programs, and workplace policies. We continuously strive to improve our DEI initiatives, listening to our employees and evolving to meet the needs of our dynamic team. We are not just building a company; we are building a community where everyone can succeed together.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default Diversity;