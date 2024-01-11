import {
    FaLinkedin,
    FaGithub,
    FaInstagram,
    FaGooglePlay,
} from "react-icons/fa";

import './styles.css';

import colors from '../../colors';

import Header from "../../components/Header";
import PageMainArea from "../../components/PageMainArea";
import BannerGroup from '../../components/BannerGroup';
import HomeBanner from "./components/HomeBanner";

import gradientImg from '../../assets/gradient.png';
import myPhotoImg from '../../assets/my_photo.jpg';
import ehPrimoBannerImg from '../../assets/banner_ehprimo.png';
import portalBCFCBannerImg from '../../assets/banner_portal_bcfc.png';

export default function HomePage() {
    // const navigate = useNavigate();

    const mainBannerButtons = [
        {
            content: 'Contato',
            onClick: () => window.location.href = "mailto:feitosa.guilhermef@gmail.com",
            className: 'dark',
        },
        {
            content: <FaLinkedin size={18} />,
            onClick: () => window.open('https://www.linkedin.com/in/guilhermefeitosa/'),
        },
        {
            content: <FaGithub size={19} />,
            onClick: () => window.open('https://github.com/helloguiworld'),
        },
    ];

    const photoBannerButtons = [
        {
            content: <FaInstagram size={19} />,
            onClick: () => window.open('https://www.instagram.com/guilhermeffeitosa/'),
            className: 'blur',
        },
    ];

    const ehPrimoBannerButtons = [
        {
            content: <FaGooglePlay size={18} style={{ marginLeft: 2 }} />,
            onClick: () => window.open('https://play.google.com/store/apps/details?id=com.helloguiworld.EhPrimo'),
            className: 'ehprimo',
        },
    ];

    return (
        <>
            <Header />
            <PageMainArea id='home-page'>
                <BannerGroup>
                    <HomeBanner
                        style={{
                            flex: 2,
                            backgroundImage: `url(${gradientImg})`,
                            color: colors.black,
                        }}
                        title='Olá, sou o Gui, um dev aspirante a empreendedor e amante de design 👋'
                        titleDescription='Gosto de resolver problemas e otimizar experiências usando tecnologia.'
                        buttons={mainBannerButtons}
                    />
                    <HomeBanner
                        style={{
                            backgroundImage: `url(${myPhotoImg})`,
                        }}
                        headerButtons={photoBannerButtons}
                    />
                </BannerGroup>

                <BannerGroup tabletSensitive>
                    <HomeBanner
                        style={{
                            backgroundColor: colors.ehPrimoBg,
                            backgroundImage: `url(${ehPrimoBannerImg})`,
                            color: colors.ehPrimoContrast,

                        }}
                        hoverStyle={{
                            borderColor: "#392f80"
                        }}
                        subtitle='EhPrimo?'
                        description='App lúdico e educativo sobre números primos'
                        tags={['Aplicativo', 'API']}
                        headerButtons={ehPrimoBannerButtons}
                    />
                    <HomeBanner
                        style={{
                            backgroundColor: colors.portalBCFCBg,
                            backgroundImage: `url(${portalBCFCBannerImg})`,
                            color: colors.portalBCFCContrast,
                        }}
                        subtitle='Portal BCFC'
                        description='Sistema para franquia de academias de treino de futebol'
                        tags={['Sistema Web']}
                    />
                </BannerGroup>

                <HomeBanner
                    style={{
                        minHeight: 'unset',
                        backgroundColor: '#E0ECFF',
                        color: '#041050',
                    }}
                    subtitle='achaKi'
                    description='Vem aí... 👀'
                />
            </PageMainArea>
        </>
    );
}