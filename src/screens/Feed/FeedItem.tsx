/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useTranslation } from "react-i18next";
import fbIcon from '../../assets/icons/fb.svg'
import igIcon from '../../assets/icons/ig.svg'
import giftIcon from '../../assets/icons/gift.svg'
import { Mission, IGStoryMission, FBPostMission } from '../../@types/feeds'

const FeedItem = ({ feed }: { feed: Mission }) => {
    const { title, cashReward } = feed
    const { image } = feed as FBPostMission
    const { video } = feed as IGStoryMission

    const { t } = useTranslation();

    return (
        <Card className="product-card">
            {image && (
                <>
                    <img src={image?.src?.toString()} alt={image.alt?.toString()} srcSet={`${image.src2x?.toString()} 2x`} />
                    <span className='card-badge'>{t("cash")} • <img src={fbIcon} alt="FB icon" />{"  "}</span>
                </>
            )}

            {video && (
                <>
                    <video>
                        <source src={video.src?.toString()} type="video/mp4" />
                    </video>
                    <span className='card-badge'>{t("cash")} • <img src={igIcon} alt="IG icon" />{"  "}</span>
                </>
            )}

            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <div className="d-grid gap-2">
                    <Button variant="light">
                        <img src={giftIcon} alt="Gift icon" />{"  "}
                        <span> <b className="mx-2">{t("reward")}</b> $ {cashReward}</span>
                    </Button>
                </div>
            </Card.Body>
        </Card>
    )
}

export default FeedItem