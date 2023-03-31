import {
    FaLinkedin,
    FaGithub,
    FaInstagram
} from "react-icons/fa";

import './styles.css';

import colors from '../../colors';

import Header from "../../components/Header";
import BannerGroup from '../../components/BannerGroup';
import Banner from '../../components/Banner';

import HomeBanner from "./components/HomeBanner";

import gradientImg from '../../assets/gradient.png';
import myPhotoImg from '../../assets/my_photo.jpg';
import ehPrimoBannerImg from '../../assets/banner_ehprimo.png';
import portalBCFCBannerImg from '../../assets/banner_portal_bcfc.png';

export default function HomePage() {
    return (
        <>
            <Header />
            <main id='home-page'>
                <BannerGroup>
                    <HomeBanner
                        style={{
                            flex: 2,
                            backgroundImage: `url(${gradientImg})`,
                            color: colors.black,
                        }}
                        title='Olá, sou o Gui, um dev aspirante a empreendedor e amande de design 👋'
                        titleDescription='Gosto de resolver problemas e otimizar experiências usando tecnologia.'
                        // subtitle='EhPrimo?'
                        // description='App lúdico e educativo sobre números primos'
                        buttons={[
                            'Contato',
                            <FaLinkedin size={18} />,
                            <FaGithub size={18} />,
                            <FaInstagram size={18} />,
                        ]}
                    />
                    <HomeBanner
                        style={{
                            // maxWidth: '400px',
                            backgroundImage: `url(${myPhotoImg})`,
                        }}
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

                <BannerGroup>
                    <HomeBanner
                        style={{
                            backgroundColor: '#E8F9F1',
                            color: '#076438',
                        }}
                        short
                        subtitle='🌳'
                        description='Vem aí...'
                        tags={['Sistema Web', 'API']}
                    />
                </BannerGroup>
            </main>
        </>
    );
}