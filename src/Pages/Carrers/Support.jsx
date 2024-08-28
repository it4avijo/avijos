import React from "react";
import CareerNav from "../../components/Navbar/CarrerNav";
import Footer from "../../components/Home/footer/Footer";

const Support = () => {

    return (
        <div className="App">
            <CareerNav />
            <Header />
            <SupportData />
            <Footer/>
        </div>
    )
}


const SupportData = () => {

    const data = [
        {
            id: 0,
            heading: 'Health and Wellness',
            image: 'https://s3-alpha-sig.figma.com/img/ebb2/cc1e/5f520e60be88e0fd1b2da684186db651?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aOz5VzjlV1nKxihR5fqYPD5yHotX8brSFjmAtWcnyjQDFsRB4bIYWQTiprmdETRNYNfLW5uRfFr0yFKYy2-YAGDr-HredmeqQDOmCOBfny-AFPmKbar68gBzycMCbFEIStdJ6o~Ae1WRCRvddimzbuXe8JhQDUqh-uHCtgbiN4gToindTshaTiWHzoZXhoaGUmTtu1QCq1GChIkEDAYFBaWVvvkBNVzX34A~3xllCTb5dSYxZ-5C2QWyxIAlGIzf-qEkE6oYdVyGL23ehQtntgvgs7epVbE7fkG76Sl4x8zUlAz6a4PBLvrAVSDCtQyMLesOpHZ~2EnYpHGAviSHvA__',
            points: [
                {
                    id: 0,
                    heading: 'Avijo Health Plans and Insurance: ',
                    text: 'We offer a range of health plans that cater to the diverse needs of our employees and their families. These plans include coverage for medical expenses, preventive care, and wellness programs, ensuring that you and your loved ones have access to quality healthcare.',
                },
                {
                    id: 0,
                    heading: 'Mental Health Support:',
                    text: 'We provide access to mental health resources, including counseling services, to support your overall well-being and help you maintain a healthy work-life balance.',
                }
            ]
        },
        {
            id: 1,
            heading: 'Financial Security',
            image: 'https://s3-alpha-sig.figma.com/img/460f/ad37/11e37555784955342b021ab94b82fbb0?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YQ3ajNTk1PrHxihGqqvDSeO8lMNQJh4bdk9crfeGWozhS8dpu8~5RWBYOPnM0-uivYpwShTCCAH4uHFgMv1avtKZ~o85roVH22OKtbz2ZCSsCrGrGCuqzc5dNUSh9yapKfvYjYRxh4xBzTLaPbuPyCpJvVHc1WtLXBeAiICtoNAYZIXqPB6Uwyv6Uzjb0YarYz0CN9OUBWWwMM0anKiNNmQ3GdqEH76SZEgszdKKhLMSTl9M~amKvBg-QaL6U79KgdStxlcgRfIUPb19-TBpKYNb-ZPkcSpK6lVGNMTmcVaX3d6j9E93tKmgKa80j89erw1Nxjj5VB4qqHA-oymECw__',
            points: [
                {
                    id: 0,
                    heading: 'Retirement Plans:',
                    text: 'We offer competitive retirement savings plans to help you build a secure future. Our plans include company contributions to ensure that you’re on the right path toward financial stability.',
                },
                {
                    id: 1,
                    heading: 'Income Protection:',
                    text: 'We provide income protection benefits, including disability insurance and life insurance, to safeguard you and your family against unexpected events.',
                },
                {
                    id: 2,
                    heading: 'Performance Bonuses and Incentives:',
                    text: 'We reward hard work and dedication with performance-based bonuses and incentives, allowing you to share in the company’s success.',
                }
            ]
        },
        {
            id: 2,
            heading: 'Work-Life Balance',
            image: 'https://s3-alpha-sig.figma.com/img/928c/3083/c645ff4b485bbd896ddbac0582322fb0?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o7CwuzOxFwISZumJPxgvsR3URopS5WRBUHV7ejGPejy6V95eN190wSlGo241uqsdSsDzu6SFxs~VaAuxn6TyPMMuK84dePVHCZV5~TPX9uI8xldEnmY3tSDMFWKJ5c~ACJWLQFb8Wzd3T6cE6-Rn~kJbcC8PPstqTH7OdqfAR~fGvOpfPqYwBd8kI0MC33MasXx0T6Vm1ayLMJg1F2iRncWmr-srpkjEVwjjs0mD0-VEz5E6y4pEC474KZKX8kxV4o1NGaEdVSILoh9y-xsqNeZO3BSmIRE-9PqIY8ecKJxikEPn8baKjlWTntVJBpiR2DIAj36FA1GuFwY5gKlTtg__',
            points: [
                {
                    id: 0,
                    heading: 'Flexible Work Hours:',
                    text: 'We understand that flexibility is key to balancing work and personal commitments. Our flexible work hours allow you to manage your time effectively, ensuring that you can meet your responsibilities both at home and at work.',
                },
                {
                    id: 1,
                    heading: 'Remote Work Options:',
                    text: 'Depending on your role, we offer the opportunity to work remotely, giving you the freedom to work from a location that best suits your needs.',
                },
                {
                    id: 2,
                    heading: 'Generous Leave Policy:',
                    text: 'Our leave policy includes ample vacation time, sick leave, and holidays. We also offer specialized leaves such as maternity and parental leave, ensuring you have the time you need for important life events.',
                }
            ]
        },
        {
            id: 3,
            heading: 'Perks and Allowances',
            image: 'https://s3-alpha-sig.figma.com/img/ef5e/2c45/1339890cc710046788fe64b7601e6498?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RfHBpTkKtXmSn0AhyW0mkfcLiwBkDhSExHRvZ5QOs71lG-UKurmeXsEgV5juWGkabDuIbzcmXAwkqi5mrKFPhaTKSbLv8LWzD-nTjKbD~uRQN34QX8eJrp7bmvTvtdfx3QMamoBs1uE77kir66m5DpJzsb8KLNsDv~qHuVpjeK4-gmU0bO~2IqwTBhU~dFmDKLOQKzAeMWz1McljOct4oJMhMHrd3oFRst0r0N0uKHTgLa3km-2srANx5fFLjLG8rs4vRtmuAbYXVXnIbcF5hSeZLrepX5AFOtb5njgZFsuQDfPDDVf3FdGIMffyRLiAnpWc5m4s6WpWsQeWuahQNQ__',
            points: [
                {
                    id: 0,
                    heading: 'Travel, Car, and House Allowances:',
                    text: 'We offer allowances for travel, car, and housing to help ease the financial burden and make life outside of work more enjoyable.',
                },
                {
                    id: 1,
                    heading: 'Professional Development:',
                    text: 'We encourage continuous learning and offer funding for professional development courses, certifications, and training to help you grow in your career.',
                },
                {
                    id: 2,
                    heading: 'Discounts:',
                    text: 'Enjoy exclusive discounts on Avijo products and services, including healthcare services, which provide additional value to you and your family.',
                }
            ]
        },
        {
            id: 4,
            heading: 'Support and Engagement',
            image: 'https://s3-alpha-sig.figma.com/img/ba58/bac1/c171c34069f47e6fb3911fa35df56390?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EcRQWtoJriv41jhmnJwvbqswYlgGOJqCBGetFUTbXzG1eP7B6I9s1TGYLWo3ryXRF92gHZuLrFcGDC6wADyhh6BZm23lqeR3DhWuLnfI3fGPvP12YhRS3E8OUMZJJISKdg4fbRDDeFsAtcQWhfeQ541zYoOH5ncjjM-suAUj6SNpD~aKlllbODXrK3s6OAsC615L2MKpnMomwctQTlbPGjGbSKjNA~we29JSXCLDB0O5Ik7tjk3wshPm1Vr0SXkz1MbktyEYVchsoUFojTgtQrAY~R9L~jNfT54f7TYqxc6tps4bQGyCXWnhtxSRJ22BjTSIODbqfISkOBNuO4MWaA__',
            points: [
                {
                    id: 0,
                    heading: 'KYC (Know Your Colleague) Program:',
                    text: 'Our unique KYC program helps new employees connect with colleagues from day one, fostering a sense of community and belonging. This program is designed to make your transition into the company smooth and enjoyable, ensuring you feel at home from the start.',
                },
                {
                    id: 1,
                    heading: 'Wellness Programs:',
                    text: 'Participate in wellness programs and initiatives designed to keep you healthy and happy. These include fitness challenges, health screenings, and workshops focused on maintaining a balanced lifestyle.',
                }
            ]
        },
        {
            id: 5,
            heading: 'Culture and Community',
            image: 'https://s3-alpha-sig.figma.com/img/319c/636d/1b80530b2a3b79aadaafe98fa39b937d?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IpD5kjByDLPkscZ~AoAsl6tCi2HQzUHdaSEYeuVTdrfj1d7cUhjMOv2DemLlzeoQj-ft4tK12tRbTOfp6IhXDRSuPLyVKcdrIZSADLT4JEa7grbF~N9w38q8V1NdFTEoL1q8LhCluqsiDF0i2go7xv9l52SUwqBU-03i5lLL7~zerXMPpaOo6aGugm7C-K3k3kTGFRLvagkU-ImsxI7KhiVddTpQEH4GlhqBDnc4CKLbQeNEaaBFO-TWqwOraZ6jQfrkFHrbN5ZRVsfpvPG60vIuiEZM0KXOhmonwTNmCx52tjpsR77h9f6hpVuyiUiczKRg1jYqi73znCnYHeUEOQ__',
            points: [
                {
                    id: 0,
                    heading: 'Inclusive and Diverse Workplace:',
                    text: 'We are committed to building a workplace where diversity is celebrated, and everyone feels included. Our policies and programs are designed to create an environment where all employees can thrive.',
                },
                {
                    id: 1,
                    heading: 'Recognition:',
                    text: 'We believe in recognizing and celebrating the achievements of our team members. Our employee recognition programs highlight the contributions of those who go above and beyond in their roles.',
                },
                {
                    id: 2,
                    heading: 'Social Events and Activities:',
                    text: 'Engage in various social events, team-building activities, and community service initiatives that foster camaraderie and a strong team spirit.',
                }
            ]
        }

    ]

    return (
        <>
            {data.map((item, index) => (
                index % 2 === 0 ? (index % 2 === 0 && <div key={index} className="flex md:flex-row p-8 border-b-2 mt-5 justify-between items-center">
                    <div className="flex flex-col p-2 w-[50%] h-full">
                        <div className="flex-grow">
                            <h3 className="text-4xl">{item.heading}</h3>
                            <ul className="list-disc pl-5">
                                {item.points.map((point, idx) => (
                                    <li key={idx} className="text-sm mt-2">
                                        <h6 className="font-semibold">{point.heading}</h6>
                                        <p>{point.text}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="p-4 pb-0 w-[50%] ml-20">
                        <img
                            src={item.image}
                            className="h-80 w-100 rounded-2"
                        />
                    </div>
                </div>) : (
                    <div key={index} className="flex md:flex-row p-8 border-b-2 mt-5 justify-between items-center w-[100%]">
                        <div className="p-4 pb-0 w-[50%] mr-20">
                            <img
                                src={item.image}
                                className="h-80 w-100 rounded-2"
                            />
                        </div>
                        <div className="flex flex-col p-2 w-[50%] h-full">
                            <div className="flex-grow">
                                <h3 className="text-4xl">{item.heading}</h3>
                                <ul className="list-disc pl-5">
                                    {item.points.map((point, idx) => (
                                        <li key={idx} className="text-sm mt-2">
                                            <h6 className="font-semibold">{point.heading}</h6>
                                            <p>{point.text}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            ))}
        </>
    )
}


const Header = () => (
    <header className="hero bg-white">
        <div class="flex md:flex-row justify-between p-4">
            <div className="flex flex-col p-2 w-[60%] h-full">
                <div className="flex-grow">
                    <span className="text-sm">
                        Our benefits are designed to support the well-being of our colleagues and their families. We offer various Avijo health plans/insurance for colleague and eligible family members, financial security options, flexible work hours, and a generous leave policy that includes maternity and parental leave. Additionally, we provide travel, car, and house allowances to help our team members feel secure and supported in all aspects of their lives
                    </span>
                    <h3 className="text-4xl">Supporting Your Well-Being and Growth!</h3>
                    <span className="text-sm">
                        We believe that taking care of our colleague is paramount to building a successful and thriving organization. We offer a comprehensive benefits package designed to support your well-being, financial security, and professional growth, ensuring that you have the resources and flexibility needed to succeed in both your personal and professional life.
                    </span>
                </div>
            </div>
            <div className="p-4 w-[40%] ml-20">
                <img
                    src="https://s3-alpha-sig.figma.com/img/15c9/e694/4d70a01e97954956983aac2277e76f59?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ik-IghxSt-UArHVWpDqyE8f0xZo4Gl~UHzh3oFMwNsn2GY1DcV5iPC8gvVsXIhHWCqIYvaFfO0-RpDI~xriCICEW~cN1AjXuWQqcqYtJqhpdj33K2AfIIRWeScXsZyHWLHWsyKNoOdmpie0qRY0YCK1zYtvOrSynbaZtaBioLGYki8ccH23WOD5ju~LE~T3yOSW1ggBPibUiY9Up1zGrT8dJh6~81JML5e26hWSJCnZqY7SeLdU~7oF0uq389O5jYr2HnxF-6ewn3foEMNXB1NPtT~Q3zN45Eu8va6QZt01UbpvFF7d4WH1na8iGfItruvPYlERQXUzLwAYB9jUS3g__"
                    className="h-100 w-100"
                />
            </div>
        </div>
    </header>
);



export default Support;