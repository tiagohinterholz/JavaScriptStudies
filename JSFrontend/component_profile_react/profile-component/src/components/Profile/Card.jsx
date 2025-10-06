import Title from "../Title/Title.jsx"
import styles from "./style.module.css"
import ProfileSection from "./ProfileSection/index.jsx"
import LinkButton from "../LinkButton/index.jsx"
import { useState } from "react"


export default function Card(props) {
    const [followText, setFollowText] = useState("Follow")

    function handleClick(ev) {
        if (followText === 'Follow') {
            alert("Você está seguindo agora")
            setFollowText("Following")
        } else {
            alert("Você deixou de seguir agora")
            setFollowText("Follow")
        }
    }

    return (
        <div className={styles.container}>
            <img className={styles.avatar} src={props.avatar} alt={props.name} />
            <Title>
                <span>{props.name}</span>
                <button
                    className={styles.followButton}
                    onClick={handleClick}
                >
                    {followText}
                </button>
            </Title>
            <ProfileSection>{props.bio}</ProfileSection>
            <ProfileSection>{props.phone}</ProfileSection>
            <ProfileSection>{props.email}</ProfileSection>
            <ProfileSection 
                className={styles.links}
                id="links-section"
                data-test="some value"
                aria-label="social links"
            >
                <LinkButton href={props.githubUrl}>GitHub</LinkButton>
                <LinkButton href={props.linkedinUrl}>Linkedin</LinkButton>
                <LinkButton href={props.twitterUrl}>Twitter</LinkButton>
            </ProfileSection>
        </div>
    )
}