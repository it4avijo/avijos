import React, { useState } from "react";
import CareerNav from "../../components/Navbar/CarrerNav";
import Footer from "../../components/Home/footer/Footer";

const Culture = () => {

    return (
        <div className="App">
            <CareerNav />
            <Header />
            <ExploreOpportunities />
            <Footer/>
        </div>
    )
}


const Header = () => (
    <header className="hero bg-white">
        <div class="flex md:flex-row justify-between p-4">
            <div className="flex flex-col p-2 w-50 h-full">
                <div className="flex-grow">
                    <h2 className="text-4xl">Commited to our Culture</h2>
                    <span className="text-lg">
                        Our culture is driven by the philosophy of continuous growth and learning.
                        We believe that innovation and progress are the results of a curious and
                        open mind, and we encourage our team members to prioritize thinking and
                        learning as much as their daily tasks.
                        We foster an environment where ideas can be shared freely,
                        creativity is celebrated, and collaboration is key. Our colleagues
                        are more than just employee; they are learners, thinkers, and
                        innovators who contribute to the dynamic and forward-thinking
                        atmosphere of our organization.
                    </span>
                </div>
            </div>
            <div className="p-4 w-50 ml-20">
                <img
                    src="https://s3-alpha-sig.figma.com/img/9e84/9f58/928a32e6d4d59eb89c97b666aca267f9?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M7wL2Uw7iy6jQov0xjfRjY0npAdL1YcwjhHQwFYkb96vX-QA2rV2GbwEEv6wBVcvWOoLpDHBmcOBWVtVmD7JaXhb9USqVrHTQ9LyLqzy~Um6A5Ta1JCOpEBJXpmb1kKWOxPMqzBME38SUF2vl6U-sRNXh2nce2JJcu8zcMCJinGYHAsdzZA4n2JG-XoMBg5MkteLgAsHAeh~5Bq2U~Q-n4iqd8q8XfZ-or13AbHTh1Xg55edYbsTTLASzLog7kzM1~6PwzFrgIv5V4qeA1wpYyVoZI2HNjkUtmy7IKBhtNEfTYnMorvmC0Bj0u4HtG7ZrYavPOs3DYiHHpG2Ava3ow__"
                    style={{ width: '100%', height: 300 }} />
            </div>
        </div>
    </header>
);


const ExploreOpportunities = () => (
    <section className="bg-white py-5">
        <div className="container explore">
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                <div className="col-md-4 text-center" style={{ width: '24%' }}>
                    <img
                        src="https://s3-alpha-sig.figma.com/img/ab97/535f/188bf42b936cf625469bca52e7734729?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N0TiYykcjPtwMdTwZNpB9XZg0pXMT91cQQPWm5-YvmR2mVhFfOTGWsmSzgRw6TJc2cwPv22WYZKzUjHHnh0WkrSP9HKWBIVKgKCsgZbv71uB8Ed1sER8Pmh8xBno8NVnQtIXPSilTJOfvl-BIdy1PZox77Rs0h99DwXsXmIFkbtUxTbsXrhge~025KIGlmatPlbVkm7Oxl121OkIo5q8yVv~fL4JHMBReW1d6npozopeyhNFsa6hCE3GWze51crFesTyGosIaGtcl8VvnWTE4mDdbcJf2XfQFPFo0wpWXt5S5O71VIBHs2PalRPdJ6JLd1Ev-9Y3ZNp4zklthbc1Ng__"
                        alt="Teams"
                        style={{ height: 160, width: '100%', borderRadius: 5 }}
                    />
                    <h6 style={{ color: '#0095D9', width: '100%', textAlign: 'left', padding: '5%', paddingBottom: '1%' }}>Diversity and Inclusion</h6>
                    <p style={{fontSize:12, fontFamily:'Gilroy-SemiBold', color:'#636365', textAlign:'left', paddingLeft:'5%'}}>
                    We are committed to building a diverse and inclusive workforce where every voice is heard, and every idea is valued. We recognize that a diverse team brings a wide range of perspectives that drive better decision-making and innovation. We strive to create an environment where everyone, regardless of their background, feels welcomed and empowered to succeed.
                    </p>
                </div>
                <div className="col-md-4 text-left" style={{ width: '24%' }}>
                    <img
                        src="https://s3-alpha-sig.figma.com/img/95c7/99f0/5afdcacdf8d024fbdebba7a310c3f016?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GwPd~cyUzqvxL79teOsQk4jPdK9xX047jukUAsN~QXjmIbAZfB8ES1XtH~yZvHHJYM1f1AHe60z23KUyHLxYYfix7tMvwZMrdEeW4In4Jv5zbyeoIXF-VHKQvNELqTAydltnLJB7XAsTvlNdEyehm6WAvJ3qc-4MlFJj3MDELrAMZKNvSdHZOKMKoDqfPXKtQ3BEYrLMrSYhz0Spis1J8BqvJWnCHxF4RAkOhpP9PKWO6eUOXej1ezwHLGbjsAHPiuWIZtvJZRJkOCQoH-9r2Hr0FjdTKXr8l2cKFK208IBSXaiVGlUY6KaPMloajfmPXJrMUv7lTlgSnFi9la0v0Q__"
                        alt="Job Categories"
                        style={{ height: 160, width: '100%', borderRadius: 5 }}
                    />
                    <h6 style={{ color: '#0095D9', width: '100%', textAlign: 'left', padding: '5%', paddingBottom: '1%' }}>Flexibility and Work-Life Balance</h6>
                    <p style={{fontSize:12, fontFamily:'Gilroy-SemiBold', color:'#636365', textAlign:'left', paddingLeft:'5%'}}>
                    We understand the importance of a healthy work-life balance. We offer flexible working hours to help our team members manage their personal and professional lives effectively. Whether it's remote work, flexible start and end times, or accommodating personal needs, we are committed to ensuring our employees have the flexibility they need to thrive
                    </p>
                </div>
                <div className="col-md-4 text-center" style={{ width: '24%' }}>
                    <img
                        src="https://s3-alpha-sig.figma.com/img/4ba9/cac1/5d9425c1e04cf37c6cf4a25480064ff2?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dJliv9B-g-SJwTKA0~fMdP2HpOy0B6vb6P1gWllRqRIszriUMD2G-x5RyOyLCZeXv2mHd84zeQBq-I8fCKItT7K82UFXN7a3Jnf736TnQdGyiePe8flJCrluJdVyzdKa9h5CZjMSZ2xCifhI4cj27r4PC6LAlrkgcBG7mYUgF3~ZzDI5C209YIsgB2YaT1wkAuyQAUNAwxpseBM4KdSwkj9ca1PvCrxxDkQjgMM8LbmJtfkUWTzy1N3TENOloyQg7hyW9yJ9cWPBPcgsfYn2~LQMnAZx5gBfV~6AaPeYROSuXDxwD6rCHF16DcHxV1aqfe7x-Efi0mYWwY5BE~UOCg__"
                        alt="Locations"
                        style={{ height: 160, width: '100%', borderRadius: 5 }}
                    />
                    <h6 style={{ color: '#0095D9', width: '100%', textAlign: 'left', padding: '5%', paddingBottom: '1%' }}>Unique KYC (Know Your Colleague) Feature</h6>
                    <p style={{fontSize:12, fontFamily:'Gilroy-SemiBold', color:'#636365', textAlign:'left', paddingLeft:'5%'}}>
                    We prioritize not just finding right talent but also ensuring that our employees are well-connected and familiar with their workplace environment and colleagues from day one. Our unique KYC (Know Your Colleague) feature is designed to foster a sense of community and trust within our organization, providing an instant placement experience that seamlessly integrates new hires into our team. This approach helps build strong, collaborative relationships from start, ensuring that everyone feels part of the Avijobs family.
                    </p>
                </div>
                <div className="col-md-4 text-center" style={{ width: '24%' }}>
                    <img
                        src="https://s3-alpha-sig.figma.com/img/ce2c/1541/8c1abdcf6ecb990d0b8dc14f2e01732f?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GtktEMiSXLgFTTXOOQ2UsHxZSjVokR31-FYuG4pmBRt7KHHmq9dBPsUDIb0FKrVV0TKUs2JsQfamwIRxMNLhKSmkUmDF6ksvoSMFXPTcsr0RMyOduVAeh-jSTP4PCbJ8vHnvWaJATChWTVKzPTKgpwAK1lVS7sdW5PuNMo9HlOumvgY5YcwM2auKlTF1FtFUIcIQMk0Tfr07kPAHBRnPymfyM4MUyqgReF-oGgE6eJv4JTJJAImfdXLjHXrE10MOMXByn5dqctPUaU2ypPlq~NDbmA0YIpDIDxBF~hzmeNZNIMkZjxVKug9N3BFYJ0LhSRM7Oya6x2sON8EmQvWhdQ__"
                        alt="Locations"
                        style={{ height: 160, width: '100%', borderRadius: 5 }}
                    />
                    <h6 style={{ color: '#0095D9', width: '100%', textAlign: 'left', padding: '5%', paddingBottom: '1%' }}>Instant Placement</h6>
                    <p style={{fontSize:12, fontFamily:'Gilroy-SemiBold', color:'#636365', textAlign:'left', paddingLeft:'5%'}}>
                        We strive to match talent with opportunities quickly and efficiently. Our instant placement process ensures that new hires can begin contributing to their teams without unnecessary delays, making the transition smooth and effortless for both employees and employers.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default Culture;