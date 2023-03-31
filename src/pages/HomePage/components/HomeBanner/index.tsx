import './styles.css';

import { ButtonProps } from '../../../../components/Button';
import Banner from '../../../../components/Banner';
import Tag from '../../../../components/Tag';
import BannerButton from '../../../../components/Banner/components/BannerButton';

type HomeBannerProps = {
    short?: boolean,

    style?: React.CSSProperties,
    hoverStyle?: React.CSSProperties,

    title?: string,
    titleDescription?: string,
    subtitle?: string,
    description?: string,
    
    tags?: string[],
    buttons?: (ButtonProps['children'])[],
}

export default function HomeBanner(props: HomeBannerProps) {

    return (
        <Banner
            short={props.short}
            className={"home-banner"}
            style={props.style}
            hoverStyle={props.hoverStyle}
        >
            <div className="home-banner-header">
                {props.title && <p className='home-banner-title'>{props.title}</p>}
                {props.titleDescription && <p className='home-banner-title-description'>{props.titleDescription}</p>}
                {props.subtitle && <p className='home-banner-subtitle'>{props.subtitle}</p>}
                {props.description && <p className='home-banner-description'>{props.description}</p>}
                {
                    props.tags ?
                        <div className="home-banner-header-tag-group">
                            {
                                props.tags.map((tag, index) =>
                                    <Tag key={index} color={props.style?.color}>{tag}</Tag>
                                )
                            }
                        </div>
                        : null
                }
            </div>

            {
                props.buttons ?
                    <div className="home-banner-buttons">
                        {
                            props.buttons.map((buttonContent, index) =>
                                <BannerButton
                                    key={index}
                                    className={typeof buttonContent == 'string' ? "black" : undefined}
                                >
                                    {buttonContent}
                                </BannerButton>
                            )
                        }
                    </div>
                    : null
            }
        </Banner>
    );
}