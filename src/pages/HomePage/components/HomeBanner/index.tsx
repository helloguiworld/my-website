import { MouseEventHandler } from 'react';
import './styles.css';

import { ButtonProps } from '../../../../components/Button';
import Banner from '../../../../components/Banner';
import Tag from '../../../../components/Tag';
import BannerButton from '../../../../components/Banner/components/BannerButton';

type ObjButtonProps = {
    content: ButtonProps['children'],
    onClick?: MouseEventHandler,
    className?: string,
}

type HomeBannerProps = {
    short?: boolean,

    style?: React.CSSProperties,
    hoverStyle?: React.CSSProperties,

    title?: string,
    titleDescription?: string,
    subtitle?: string,
    description?: string,

    tags?: string[],
    buttons?: (ButtonProps['children'] | ObjButtonProps)[],
    headerButtons?: (ButtonProps['children'] | ObjButtonProps)[],
}

export default function HomeBanner(props: HomeBannerProps) {
    function hasBannerHeaderTexts() {
        return Boolean(props.title || props.titleDescription || props.subtitle || props.description || props.tags?.length);
    }

    return (
        <Banner
            short={props.short}
            className={"home-banner"}
            style={props.style}
            hoverStyle={props.hoverStyle}
        >
            {
                hasBannerHeaderTexts() || props.headerButtons?.length ?
                    <div className="home-banner-header">
                        {
                            hasBannerHeaderTexts() ?
                                <div className="home-banner-header-texts">
                                    {props.title && <p className='home-banner-title'>{props.title}</p>}
                                    {props.titleDescription && <p className='home-banner-title-description'>{props.titleDescription}</p>}
                                    {props.subtitle && <p className='home-banner-subtitle'>{props.subtitle}</p>}
                                    {props.description && <p className='home-banner-description'>{props.description}</p>}
                                    {
                                        props.tags?.length ?
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
                                : null
                        }

                        {
                            props.headerButtons?.length ?
                                <div className="home-banner-header-buttons">
                                    {
                                        props.headerButtons.map((button, index) =>
                                            <BannerButton
                                                key={index}
                                                className={
                                                    typeof button == 'object' && 'className' in button ?
                                                        button.className : undefined
                                                }
                                                onClick={
                                                    typeof button == 'object' && 'onClick' in button ?
                                                        button.onClick : undefined
                                                }
                                            >
                                                {typeof button == 'object' && 'content' in button ?
                                                    button.content
                                                    : button
                                                }
                                            </BannerButton>
                                        )
                                    }
                                </div>
                                : null
                        }
                    </div>
                    : null
            }

            {
                props.buttons?.length ?
                    <div className="home-banner-buttons">
                        {
                            props.buttons.map((button, index) =>
                                <BannerButton
                                    key={index}
                                    className={
                                        typeof button == 'object' && 'className' in button ?
                                            button.className : undefined
                                    }
                                    onClick={
                                        typeof button == 'object' && 'onClick' in button ?
                                            button.onClick : undefined
                                    }
                                >
                                    {typeof button == 'object' && 'content' in button ?
                                        button.content
                                        : button
                                    }
                                </BannerButton>
                            )
                        }
                    </div>
                    : null
            }
        </Banner>
    );
}