import './styles.css';

import Header from "../../components/Header";
import BannerGroup from '../../components/BannerGroup';
import Banner from '../../components/Banner';

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
                    <Banner
                        style={{
                            flex: 2,
                            backgroundImage: `url(${gradientImg})`,
                            color: '#0D0E10',
                        }}
                        title='Olá, sou o Gui, um dev aspirante a empreendedor e amande de design 👋'
                    // description='Gosto de resolver problemas e otimizar experiências usando tecnologia.'
                    />
                    <Banner
                        style={{
                            maxWidth: '400px',
                            backgroundImage: `url(${myPhotoImg})`,
                        }}
                    />
                </BannerGroup>

                <BannerGroup>
                    <Banner
                        style={{
                            backgroundColor: '#807FCF',
                            backgroundImage: `url(${ehPrimoBannerImg})`,
                        }}
                        subtitle='EhPrimo?'
                        description='App lúdico e educativo sobre números primos'
                        tags={['Aplicativo', 'API']}
                    />
                    <Banner
                        style={{
                            backgroundColor: '#EBEFFA',
                            backgroundImage: `url(${portalBCFCBannerImg})`,
                            color: '#0F0963',
                        }}
                        subtitle='Portal BCFC'
                        description='Sistema para franquia de academias de treino de futebol'
                        tags={['Sistema Web']}
                        />
                </BannerGroup>

                <BannerGroup>
                    <Banner
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