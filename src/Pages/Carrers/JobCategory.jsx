import React, { useEffect, useState } from "react";
import JobNav from "../../components/Navbar/JobNav";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const JobCategory = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const filterData = [
        {
            id: 0,
            image: 'https://s3-alpha-sig.figma.com/img/ca0e/a7c9/688f50c415f20612a6b4a6e3d404dc84?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aHajHlDoBkAk6LixclEZNBR0v8St0i6YHsgIDRhYK-ZDiuKHO-QNUpaun-mCu4oY6W8c~xKuB1xEHubVHcLomj589vdRRkEfPOOalLpcs7d0tfjQpj1iJUSZm4BVLuAFQ5ek56wFDJwV3VN-h0rXvbQzuQVHccdPpwDEF6yI8TOhyLcmZlqgowWKib~x7im0qYY2Ny-oNC52Ekn4XiNWmI76yQP8NjHQXFk-3KFHn~ELbSF63sHZCvEWQjZCREufB0Pb2CYiFdXDAu8w5ESjfJgfW83KFU36x5gdi9wmJvB6Qhzq7IqeBfvEWgMD6CeQ~bOXpaLSdg0j46RyrLL07A__',
            heading: 'Software development',
            detail: '375 open jobs',
        },
        {
            id: 1,
            image: 'https://s3-alpha-sig.figma.com/img/2a38/c8e3/edf85d53a8c74c87d99b23e2a80466bd?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ee2Lmy-9pSRrVbxK7WVgCJkMKzutfBtNUhiJsUTS5BiPfPaSXma3kuIbd2PGZHGG4unRO-jGjjlMBeVy1qiD4hfqmcQcQxZYcdxRxxhQ7~ZE8vvi9Gej4uCZVKhxocXN-ssxK4JyNhhfbrfmEKhjUkyEm7dHBURn72N3uGdp59bMjFlUEWr0liCvPIlTj9wqiVyioE81j2MVoK8HtkL-FmtKdxMg04-ZCfhL69YqDe0o7u-qPS5EyOabo5RoTjRniE19eGiFNXsRqkEdRpDrQ7Qe5vxnaZ-YWRcA~MmlvFG8IBE793Lh4MXlAdlJM6oNcclvsH-47Q3j8gjd4oJeBw__',
            heading: 'Data science ',
            detail: '375 open jobs',
        },
        {
            id: 2,
            image: 'https://s3-alpha-sig.figma.com/img/6188/e7ea/48a560f3c039c537fa7d2fffad7003de?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RUKOgdlNYt2SLgw~IMYk~-UQ0HuEQQQNu9fFnIuNiJPSnkEybVtsiKxn9jYMiAW-LekRoCTpLprdmMggMGd2sDGFcH8oFnXf2DUTH31T3E4tE-jP21FhWv-5BVWgMJ6oSkuj~GnfbG5AT7IbSjdBLYAwtGDLgSQ-Z1KTMmkuZsKoA2zLfuFdsQgSA56ZNSafNq3KTmmGK2Bxl3IW~ZEXERk0AgdPCAdu3KCX~i9J35KtLB4FttbBLWCLNZR2Zxd2YvjJA3cdtg1qJ5orhTuJypxomZRt~gKawC1LhRhcebEfrLn-Aca2zxzDlCDMZaVbgY6oS8cj6mbL0u5F5YAz5Q__',
            heading: 'Database Administration',
            detail: '375 open jobs',
        },
        {
            id: 3,
            image: 'https://s3-alpha-sig.figma.com/img/fa39/1e59/78f0e480635a0610436339ddd502d69e?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P6OXMBpzZ4m5LzyCoC0PKgJf~N0wssN~G3qYKM1kg~SFPx~IWYhK~WNU7j9sveCtU-qBtaj9v~Sk8r3nV3C0Kblqv5Dg82AR7L9IqJE29~UDhShMJOBwoyyvEyPCJuHb5Cg-hOp-vfv4BwjwdlprrY1tf8Qk29-7mXH~nddrmYOi9Hp2O~RONb3YsMBJbaX7TDJJj2PPEJ7R5o5bDS4g5ObXTbjOWxL50fP6YIAIldaCHm4BejX0qkbrPGAf6uPHKFmfbAqupW-OHDWij3GcoKMpweHVPvjj46c1nhqW~~08qVo2ObG5Opa7aCAqJIfkQ9-BSVskn3L8dN6ldI5AIw__',
            heading: 'Supply chain management',
            detail: '375 open jobs',
        },
        {
            id: 4,
            image: 'https://s3-alpha-sig.figma.com/img/7644/72c6/84b5a6ea9ef9f5dae55a5a13a5bbe6fd?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KczLrKfAyuychXiCgUKA8UvIHa2zKSvuF9nQr8kEW688sUuq~mmpww~573Ju340biWJxOPQb36FdJtbrL3wJ2NnRc73x3ei1Qy1BWL4IPBNAMkdDcrK7MUXQrqY4kGNdnad67SHxto2jfdsGSDwFI4nFd2yQT7gndtsuvppIf1dBuPVIclJNemPgo6apTDBPIh4hYAYwzh-D~eRD2B3pLTSaiRtDgHmYwCOhnvpsdsLVZv8NMC7SK1XzJ~~3Gz2Yn9JMvpITCIh2CeeMwlwt5GR4vOi4XhOqCzfGc95n9QEscQOBjVBA-anvt8547bjysYy37VDNr1bnwxf83Iotcw__',
            heading: 'Project/Product manager',
            detail: '375 open jobs',
        },
        {
            id: 5,
            image: 'https://s3-alpha-sig.figma.com/img/d3a7/64b6/384857765b9ccdee3683262bf60f738a?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=flS8LHiB9jXNnEHws2bwgNsgYRJhnEgRYnq1nHKyEefgV-DXnsbN89pIigisOXoHM1Q8vmfkIHkFd3Y91H8WEWN36-Ny3ZmOAmZL8YNGHPVDpTeV8NoP0N3niId24ojUh5bQ89DIzn~ZAU0odRvzk~7mTnYpG7kP6t~0V4nzlYJIZN1waCPo7whgIPj74AOWXMel~h8Cm6QbAmwSnKIW3HkdC3XgvKoS4~~8iq2C8gNIyg5xqA~nS~yPiC6eTR44rzh10AkVs--4GxhOAwG~E-y0Yf4AmPpfyHCvsN59gHLF98M5gWI8ksB0El9UJm2ItRi8s2~leV2nVXz9vFEeNQ__',
            heading: 'Content/media production',
            detail: '375 open jobs',
        },
        {
            id: 6,
            image: 'https://s3-alpha-sig.figma.com/img/21d8/a779/3140261061b89b5238e496a2bf57b76b?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mtQ07uc8J7H3sNS0pQNrZ3rPggBb9zUfyKWoE3tTkBVn6Li4p4BVmQS9mBwCSKYMUsXZ59gBbdtwi-YUfo54tyYK-Zs8O0t9AfpGBZHkBEPkq886qYDU-Wm62RjauT7SLdp~UvCJghsBcmVhP6nSdOkKy~I-VlEWDcPh-0VOVtqqKSNNQdOtC9hoXXDgCtnqhf8y8AZNJG55zWZPmgHR-VDHy5P3zo6kma3JCd5s5NUMJp0nYYTtpVTvNjJWm~YJaO7nr3glW6qhhDDD1Ys6OyUi~75EOPum5aTOGmAGkiZyletnx57Jt6XE4GBcNB5XfTrdq5zEsgG6NgMjBWJsKw__',
            heading: 'Researchers',
            detail: '375 open jobs',
        },
        {
            id: 7,
            image: 'https://s3-alpha-sig.figma.com/img/17eb/ed5b/755bf3f686292df463879e592e17828c?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U5hpd6QA43Ak4jk3Cvs~eNWXp63x4CVEpYZvSzQz2gJFuHgXunW2wuDaod2dxz1emUSA9pqMvJ8~hYRbw0ZZmS0mFw9sYSrhwnTogT4Ai9~eOF9E1RWtGwVOH6XMZxBSQoXHT0IdFondOb0Lv1WokyD~kny-sJNBMOl-jgPB1BMuf2MeExu00n6eqdhIHlghU7fC4~R-6eO7UGpz8codbywUSLYqoLOCwDtKWofYoi0SfkQR11dF2EEXoNCE8z1qFzXuIfQ8FIfMNr-HaQ2HTTRnucnfJv9qVreFTMEbvr7Tz7cW-wqhMj0ICHwdNrnymdTpilZiXoh9PHGwHb-G3w__',
            heading: 'Administration & support',
            detail: '375 open jobs',
        },
        {
            id: 8,
            image: 'https://s3-alpha-sig.figma.com/img/fcda/ee1f/eb97d672fd0b8669f7991763c84fda35?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gAd91jkhPj7-RSCiC-RbVh88TpMnFTdXQ9ftIxNssfHsXRGvHs8qd5WKFt5m-Ivx9sgBkW9V-GtiTYK1NpRLtjvDldmaAyOLW~EHft1J8f~pTAjmyk0yoIXGnuBlZ9tB1S5StE7iPzfmF7hg~DPL~TrfI3IdIo4V~ng7-lkwbx0CMVQaOscCzYfgBXr287cCpLYkE9r4xkRntGhMA6dVfzb53KK1Y9l4ZTMf-v1YX2N3ukYf1tVHAl0EUYAgWLMhZf5ZK6WFYWOZT7j8qbeC9hxI1gYM5si5FPpNPemmvUO0HkXdJzOzRgacilRKkfWG9ndOl1kq4i~k0xXABSh0ZQ__',
            heading: 'Finance',
            detail: '375 open jobs',
        },
        {
            id: 9,
            image: 'https://s3-alpha-sig.figma.com/img/48a0/9706/109de37f2bcf956271382e99eaa79fc9?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=neemuKVTQ54ofu4FowQ~mdKOnE3Qow43FIi9rsatX98KnwcIb5zXt~BDjDgOp20BvqlIbihSF3U~M28tr3m20FEgwvTb8bBeX~YNltHqfF82BXPx1af72Vr4Qhj-89i6gSYkK7BZD3CL0Hnzcf6yS4ofgMPISdvL1BKqgRzkxBnhCINjwijamT0P45oUFAfGpBm9VKHMRrsN1hGDd6-BnP3BqrODDSqHD9XXs338wAfhfJTO0B4ZGJ4fX8NJq0ADPD5F6b0vtikn5niPpFwZKhrDXgS-RrNnA-3nC4EFOfLWXZLjIkEd1rmZ0OJrr4YgPJqrx~FJpjwbabH-4iKxMQ__',
            heading: 'Human resources',
            detail: '375 open jobs',
        },
        {
            id: 10,
            image: 'https://s3-alpha-sig.figma.com/img/c570/1850/8250b50ed00ddecc4e3fcc6a15cfb100?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PSvplM3HmhU6w30WO9qkQVsQ2SWM8kMHx2-poB1x93aQEVFS3OkUc7akWSYWxoMx~zm15JgAD5XibnL7DrfIFNrbfFJWJzrlqeUJYuphumRhpmEKXqqheJiLO4tafnPUpSVdGkw92bQIIO~vTtiPpNMY2O~zg1v62W-H3oJNSiZ50gmceyGBQWpAet-VlLEK4rv5COBQ2gyCu9szokD8hGdJzg8zPnRXG0ZULKadHHmnHZJyKK4V1dMVLNq-ZLLeTpBkwVtdc6O5ToSBVSSWuXjN6WKNfU9~B6XLriCDSFFAMXcnL46kfedt4JXXxDlcmaXNSTpg7piy1zNpu1QEvQ__',
            heading: 'Legals',
            detail: '375 open jobs',
        }
    ]



    const isMobile = windowWidth <= 768;
    const cardStyle = {
        width: isMobile ? 'calc(100% - 20px)' : 'calc(25% - 20px)',
        marginBottom: '20px',
        marginLeft: '10px',
        marginRight: '10px',
        marginTop: '2%'
    };

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
  


    return (
        <div className="App">
            <JobNav />
            <Hero />
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%', marginTop: '2.5%' }}>
                {filterData.map((item, index) => (
                    <div key={index} style={cardStyle}>
                        <Card image={item?.image} title={item?.heading} detail={item?.detail} price={item?.price} />
                    </div>
                ))}
            </div>
        </div>
    )
}


export const Hero = () => {
    return (
        <>
            <div className="userRegister bg-gray-50">
                <div className="container py-5">
                    <h1>Find jobs by job category</h1>
                    <div className="d-flex gap-3 mt-4">
                        <div className="d-flex gap-2 pb-3">
                            <span>Browse open jobs on different job categories</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const Card = (props) => {

    return (
        <div>
            <div class="card p-1 pb-4" style={{ width: '100%' }}>
                <img src={props.image} class="card-img-top" alt="..." style={{ height: 150, width: '100%', alignSelf: 'center' }} />
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center' }}>
                    <ul class="list-group list-group-flush">
                        <p class="card-text w-40 pl-5">{props.detail}</p>
                    </ul>
                    <img src={require('../../Assets/image/right.png')} style={{ height: 24, width: 24 }} />
                </div>
            </div>
        </div>
    )
}

export default JobCategory;