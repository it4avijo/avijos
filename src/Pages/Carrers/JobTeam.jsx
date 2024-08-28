import React, { useEffect, useState } from "react";
import JobNav from "../../components/Navbar/JobNav";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const JobTeam = () => {
    
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const filterData = [
        {
            id: 0,
            image: 'https://s3-alpha-sig.figma.com/img/891b/0678/47f6bed168f6a0bcf38bedf53f43c77e?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B8rHi2ZIdE~C-S46TDKMno9R8SyXtI4lImkpIoT99f3YEy2hN0e8SfqAXGzv-zHOmclXmvh5o0kiedjvFzdFid8PADSF7SmvhoGrQYowKhEAHrQ6jftnTIzHirwYqsAnFQrpe~F7oT5ZNTdVbvCK0aYfCi~m2CXQ8HlLAYuLGRNc6F5Jp4RxeP~kzQBbV-wCH0FNM94gGe6owhB4MXYEkf20ECT-oCkmqhLrx4TihT6US~vYVEaQrjgw-eN5LkO6IUlIMLMNMa2518Y6ISlHNtv5qBSsTJwoTPB2ounPkAtF4Q7rhce3CuZV~Hafikv5Fq34mF~vw0IofCKJeU0H3A__',
            heading: 'Business intelligence and Development ',
            detail: '375 open jobs',
        },
        {
            id: 1,
            image:'https://s3-alpha-sig.figma.com/img/cd2a/9d65/1b4acf4407cc010d519843679e3b8465?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=S1anZsDvwFmu5o7EaUC6MfYgybtOpu14YuZeJyk765GHDSQDLhLnPuWF4Yii-3GNJjKpmgBDLU0ZJVrw81j~CDIXMaBT8UoeqgrrwzlT8qeMN-MyK3bnYEXbZ6l0VaSUTM6dLjNx8JyFiGt~H5CTfcqhfQfJfu7-gbZFRicJ8YUFQq8jAnOvq2yL1fVeiJfjV4NiNLQFsn5gSzKAzCg6M5lFgyl7uosW2gOvAp5OdXAqgAy6Fyjh9nmGtvWlTQ~RVOkdAudwr9IJhZj7jc4zbCOGWwA8VouRFBzOdHPDKMhMYUgjrkhPMNgcjq4lwuvyzqxvstNG6~LcCLzjpt2PPQ__',
             heading: 'IT',
            detail: '375 open jobs',
        },
        {
            id: 2,
            image: 'https://s3-alpha-sig.figma.com/img/dd07/f8ef/e322b2ccfe8f3704bc5e57e5f9583c8d?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PboTzRLuHcfNE--CfIkkVWBtSUgjznVgQ0CORRa~lUkxZ09tztdGGWpFyk4qPkZKKOlEHjqDc~zWRX4RTVS8zbGnaeJbz9vBMiiNLevVacVqDG6oPVWM5nO9SoGO0Rx29sm5Hd04SMwd6f19H6GXHboNB-N~4Wh-2OiAdjkiSju4hIzmFAt-iOPSnCYR7B8~HI4-ttq4~ugiyMV7vfUaVVhMPCxsLYZvvtx9qLxbqXXFWBYQNfYtwdLLiJb2MfanbiA3Fqc1BuLG8gqqC3IylIyvMxv-sjdHQk1D5e2hBkYMczAgkar37X2Q3xObalvOW3uO93~jhi72-BeP62nDRQ__',
             heading: 'Operations',
            detail: '375 open jobs',
        },
        {
            id: 3,
            image: 'https://s3-alpha-sig.figma.com/img/f308/9ef5/52191a048d46283b031276970ba4fe12?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XzIH0TEW3qfO4YS3Q828j5bKtqRnuVil5YxNF36bxua-fs~WsGl6hZlhe1nIV02JI~2-Z0EBJcoUJsngsrZ5fIyYouQtLJwuAD4kqGYpWkkmyCx2uUjdRLzGza2vNim~QWx-zaDnk45vtXJ9EpazEj7FTnxCgvpgAcLNH1IYVA~RIwgN1U6MDZ1Xq-OkCbIbU7Oiq-FqELhqTZPPwWHMljVFt6X7otwFDSG3nsd3-ezY4aJbE1uIGnrOgPXstja3K2RMuOmwOCl0d~2rUpUeGHcyCQqIkfJM1fskW-JyDtWTfomnZvw15BeU0h8sHZwnNbCBBb50XDCVx61cd2byCg__',
            heading: 'Marketing and Sales',
            detail: '375 open jobs',
        },
        {
            id: 4,
            image: 'https://s3-alpha-sig.figma.com/img/f15d/faec/61fa3f1a6851430979b503f7827a2bfa?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ge64hQg2OMUb3GTIY--u4xmIVt9zDTUC2ejU-MI6OkZ4CfWZatkciLhVYqonZWMu8FUF22GgK72xjA1cR3XTmKwAFuhWM6vUpXLJtulInhAZNrlETc4RkiK27JyDVD8KX8TseY2N0C6UU8x6vaPWBI4s64smB10sA9IuCtY9flnS4MVY3lUq5BDTcw-hTsugW-DFgyL~Z6S5HUUmg-mXh5wJCUcYi6xpXNG-kK5qxjEOdp2CZ-E033iUXqgflduBB81~5JfBnfBgqKTZLqMBRBvetIVSAVqb9fiX1KNqfwNx142yXqF-Z7AS6EivQFxv8dxARxUz8f7-tAF~yHbkYw__',
            heading: 'Human Resources',
            detail: '375 open jobs',
        },
        {
            id: 5,
            image: 'https://s3-alpha-sig.figma.com/img/0994/77c9/3c9f8648f0345966636f354c3419526a?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DB97MIdIkqJ~e-6cGQXc4Xhs2otvwyXcdmlJZBaVBbKTOsZ91wslby7JscI7cnoS5v~FuXSJvsWcNwano7m3DyvNlyfb58Vf9aoyG77cOWHkiHme8b~CcyYz09iJsUoKXlh3jR5wGLpnrGxazDb5814eSNcyrMsLSm9vb60AjQ~H3zodE3~eSPzuHzhBJn0AnU5p9e-7QkSKUsuGAv0dKNj76D4WtP8PaQ6nzKN~feQTmDkywKgGplQawkRLItM-3pLPjc02UpNEDf-OETMKxEHm5Ysz0lgHnvxA6UQdXtkz8lOB6taPAyj1LTLqyn7-J-WGoMMakY2qQS~LPnGaxA__',
            heading: 'Legals',
            detail: '375 open jobs',
        },
        {
            id: 6,
            image: 'https://s3-alpha-sig.figma.com/img/e6b5/49ef/0f43671225eec993f730fbb15fd758ef?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J6fY--q29I9V66TypI6m~DAGaLv5V68KKwrNapQH1M214N17jEO0s5WkJcuYVgnjZDHPoZzHEXFSaNteWA4cwgUydfS8TxzjcvWtECxIpFKITsoWYUer0JHepBAtjHpzdvn6n~8mSSL3HzTLT5UtqfjBEHmYeOxXV07KGxtQGtyam7YYxXOlt0ThvzzSf-c1FWXdr8Q2kSzJ9JVTkjpQL86ES4H9bB78WQwF4qH~uxwv1FXtC0l~qa64A26m0WtBiC~CANA-pzw0s~SjoWS00sHu8m2KGREorm2hJuY3zTFG-vBfl471wooSDrCEUsTGeoetu3PoNDXdxs~bEKOWgg__',
            heading: 'Finance and accounts',
            detail: '375 open jobs',
        },
        {
            id: 7,
            image: 'https://s3-alpha-sig.figma.com/img/9a0b/b961/275d07ed94f3276c410371d07a202db7?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aPLLbptgEi7ASnC8vPWl0KPXow~1bmhj07pVyUAPJhJp5SlQ74tKR2s9ub86NobFSGo1trCcn93ustW5KClLMS6so4mC00b7NyhJc66GErf6SsJVSHPNsvv~WW6DLKzo24YOJGzPZWytnFKgJ3kC258p7eK~ONWvMClcNldBVLjRzA2FoQ8T~Vv6dUl9WsJv4db7u8KpPWoo3~6J-m7YT6j4pN9yBPjOvzYODPkqYfjPfCTLsYBGFaFkCmA-vvSvD-7ZeQCMSZh3j4ktU6HqB6IRtNDA3ufAWygOigNHR5z0Blg3ID75UBSHFPVDiaUUWpirRiNO8vKuptVy-vPKwQ__',
            heading: 'Administration & support',
            detail: '375 open jobs',
        },
        {
            id: 8,
            image: 'https://s3-alpha-sig.figma.com/img/f750/a411/fce21870f237ba960274e2363e1f2518?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lQ6cib~hcuFkTsSz2rACs9y80vK-3l23aVhhACGXIU3DA6JCLkqKU6X0xNYSqpigL6kWr4HNfdtYdOtqPx6YGRpXl9RTuCu-Q~wv40h4fDh14k7yw6ZGPBAJHCh2UVExxRZmx9Umuu6eXTW41KMoIAiI7wtjYFN0bjCYBUoV9ueNiWwTphX~zsn27~O7YUdUdMGlAAUtcJGq0GSjmbOvW1NPEVUhW8nB0op4y8obRhCbII62c-883eYnk5kcovqzjDVGqzPCt56CrlMkruvc9ou3mfRErxZY0826QBCaL~w9uKTQ7twRbA8qnGQ2-1TfbrWpe8IJzIaAbHpY-NkdCg__',
            heading: 'R&D Training',
            detail: '375 open jobs',
        },
        {
            id: 9,
            image: 'https://s3-alpha-sig.figma.com/img/1601/fd90/6ff13f5c31a48f84a1a4f7448f89f953?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QOTJYfOHTPECYk2GTOizD08Z~CdQfjlcev61327K9cD0dumIJtmn1kTSc7-DU48CMoBvpostwIeuHwpx~rHeFOGppopLfkYCR8IVyuJTQ4RnJy8LMcxEVoiUkUpH7gSDy6iiWf5Io8T-GcVPnyyPvruVxINfafkT98X1VTf9vxjrlTCcMI1kZmIoZPFMK69kMGyle6yC9EM1H2lyly4eHLqgMygOC~gMvHW7siw6aoBNqjxbGCxF22TUtdlHLGu4mHrGCctmMIhbS9c6lpho-9rhsIZLEuvcV7J7q8E7Tcs~bIoznMUuYzDN5AKjm4CGM73TPfIGUDprlwYOlbfXbA__',
            heading: ' Warehouse management',
            detail: '375 open jobs',
        },
        {
            id: 10,
            image: 'https://s3-alpha-sig.figma.com/img/e4d4/aaeb/3993e3c478772cc9f35ed114fd0c17d8?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Hseog2pDHBgaz3nNUTSMgoddbMzlmh13PTs7hzY2JabKdzb4Tyz50nMcj-ERUT273vAIhnuw3gJitI1uclpPNyPeZvrQdyuhBYcVH~n2Z5HONBtLb~taHl0ab~D37z4rKfDiGOq0-5ule9KxOHxFzwEMDhu0t-YqqmA4pBcCb1AFKXlPfiSMHaimd5ZLIE71GzJswvRzYznQ7lDsm9PpaoFkZKat~-EHC7PUp-gNXt3Lk~4ZJoM6dh~cqI2XMCjaOm4DXBsL6SXNFbETsw5MQqmwdCcMZpqHQJh~E~qNKqBNSeOGGHRy7SGQpI4X3BMbqOy542ZFx6zt2hq-enBT4g__',
            heading: 'Transport, shipping & logistics',
            detail: '375 open jobs',
        },
        {
            id: 11,
            image: 'https://s3-alpha-sig.figma.com/img/58cb/c994/880efc6a5fc00f7c51d6597c4ab88a9f?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=isqxf9XUZkg5Sa3CiCUuHgAiuWnWRoRxI6tC3hQeXJLdBLavTePhzwffiDXsgrXdBafyn51-9fi3qOijRvXNwKLS4XMby0~YJHeLfXFO4fNridS~mauNNqWIL4VwtFhnQjx~smEi-2cG18TIa~fQo1VAMDp4WoZz~wvyJG7Hazbk-81TdpwIfBPm5nyHZT0xUE8jc9OXYaCRGNIlUit5p7o67KIONuN-5yzDTDwAqP5wgnew1nzr2MHd~bESTOjTabUaD3ZdH2CnY9YnHC5qOt~cQeX0e-sJ5LQHlCFzhrE~DHhhGS1GWrNJsEhj7YmmSFJIPeiT15IHnJ-Pg6ZX4Q__',
            heading: ' Operations technology',
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
                    <h1>Find jobs by team</h1>
                    <div className="d-flex gap-3 mt-4">
                        <div className="d-flex gap-2 pb-3">
                            <span>Browse open jobs on different teams</span>
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
                    <h5 class="card-title h-8">{props.title}</h5>
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

export default JobTeam;