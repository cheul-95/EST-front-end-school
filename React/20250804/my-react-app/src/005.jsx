import React, { useState, useEffect } from "react";
import "./App.css";

function LoadingSpinner() {
    return (
        <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>캐릭터 로딩 중...</p>
        </div>
    );
}
function Skills({ title, skills }) {
    return (
        <div className="job-card__skills">
            <h3 className="job-card__skills-title">{title}</h3>
            <ul className="job-card__skills-list">
                {skills.map((skill, index) => (
                    <li key={index} className="job-card__skills-item">
                        <span className="job-card__skills-name">{skill}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
function IsOnline({ isOnline }) {
    if (isOnline) {
        return <span className="job-card__status job-card__status--online"> </span>;
    } else {
        return <span className="job-card__status job-card__status--offline"> </span>;
    }
}
function Rank({ level }) {
    if (level >= 60) {
        return <span className="job-card__rank job-card__rank--legendary">전설</span>;
    } else if (level >= 50) {
        return <span className="job-card__rank job-card__rank--heroic">영웅</span>;
    } else if (level >= 40) {
        return <span className="job-card__rank job-card__rank--advanced">고급</span>;
    } else {
        return <span className="job-card__rank job-card__rank--normal">일반</span>;
    }
}
function Details({ title, content }) {
    return (
        <dl className="job-card__details">
            <dt className="job-card__details-title">{title}</dt>
            <dd className="job-card__details-content">{content}</dd>
        </dl>
    );
}
function Percent({ title, current, max }) {
    if (max / 2 > current) {
        return (
            <div className="job-card__percent job-card__percent--low">
                <span className="job-card__percent-title">{title}</span>
                <span className="job-card__percent-value">
                    {current} / {max}{" "}
                </span>
            </div>
        );
    } else {
        return (
            <div className="job-card__percent job-card__percent--high">
                <span className="job-card__percent-title">{title}</span>
                <span className="job-card__percent-value">
                    {current} / {max}{" "}
                </span>
            </div>
        );
    }
}
function Job({
    name,
    jobClass,
    level,
    health,
    mana,
    skills,
    equipment,
    status,
    guild,
    achievements,
    isOnline,
    lastLogin,
    image,
    onImageLoad,
    hidden,
}) {
    return (
        <div className={`job-card ${hidden ? "hidden" : ""}`}>
            <img
                src={image}
                alt={`${name}의 이미지`}
                className="job-card__image"
                onLoad={onImageLoad}
                onError={onImageLoad}
            />
            <div className="job-card__percents">
                <h2 className="job-card__name">{name}</h2>
                <IsOnline isOnline={isOnline} />
                <Rank level={level} />
            </div>
            <Details title="직업" content={jobClass} />
            <Percent title="체력" current={health.current} max={health.max} />
            <Percent title="마나" current={mana.current} max={mana.max} />
            <Details title="상태" content={status} />
            <Details title="길드" content={guild} />
            <Skills title="스킬" skills={skills} />
            <Skills title="업적" skills={achievements} />
        </div>
    );
}
function App() {
    const items = [
        {
            id: 1,
            name: "드래곤 슬레이어 아리아",
            class: "마법사",
            level: 85,
            health: { current: 450, max: 500 },
            mana: { current: 800, max: 800 },
            skills: ["파이어볼", "아이스 스톰", "텔레포트", "치유의 빛"],
            // equipment: {
            //     weapon: "고대의 지팡이",
            //     armor: "마법사 로브",
            //     accessory: "지혜의 반지",
            // },
            status: "활성",
            guild: "불꽃의 수호자",
            achievements: ["드래곤 킬러", "마법 마스터", "길드 리더"],
            isOnline: true,
            lastLogin: "2025-08-04T10:30:00Z",
            image: "https://picsum.photos/100/100?random=1",
        },
        {
            id: 2,
            name: "강철심장 가렌",
            class: "전사",
            level: 72,
            health: { current: 280, max: 900 },
            mana: { current: 150, max: 200 },
            skills: ["강타", "방어 태세", "돌진"],
            // equipment: {
            //     weapon: "신화급 대검",
            //     armor: "플레이트 아머",
            //     accessory: null,
            // },
            status: "부상",
            guild: null,
            achievements: ["백전백승", "탱커의 자존심"],
            isOnline: false,
            lastLogin: "2025-08-03T18:45:00Z",
            image: "https://picsum.photos/100/100?random=2",
        },
        {
            id: 3,
            name: "바람의 춤꾼 루나",
            class: "궁수",
            level: 45,
            health: { current: 350, max: 350 },
            mana: { current: 0, max: 400 },
            skills: ["연속 사격", "독화살", "은신", "치유의 바람", "폭풍 화살"],
            // equipment: {
            //     weapon: "엘븐 활",
            //     armor: "가죽 갑옷",
            //     accessory: "민첩의 목걸이",
            // },
            status: "휴식",
            guild: "달빛 사냥꾼",
            achievements: ["명사수"],
            isOnline: true,
            lastLogin: "2025-08-04T09:15:00Z",
            image: "https://picsum.photos/100/100?random=3",
        },
        {
            id: 4,
            name: "바람의 춤꾼 루나",
            class: "궁수",
            level: 45,
            health: { current: 350, max: 350 },
            mana: { current: 0, max: 400 },
            skills: ["연속 사격", "독화살", "은신", "치유의 바람", "폭풍 화살"],
            equipment: {
                weapon: "엘븐 활",
                armor: "가죽 갑옷",
                accessory: "민첩의 목걸이",
            },
            status: "휴식",
            guild: "달빛 사냥꾼",
            achievements: ["명사수"],
            isOnline: true,
            lastLogin: "2025-08-04T09:15:00Z",
            image: "https://picsum.photos/100/100?random=4",
        },
    ];
    const [loadedImages, setLoadedImages] = useState(0);
    const [allImagesLoaded, setAllImagesLoaded] = useState(false);

    useEffect(() => {
        if (loadedImages === items.length) {
            setAllImagesLoaded(true);
        }
    }, [loadedImages, items.length]);

    const handleImageLoad = () => {
        setLoadedImages((prev) => prev + 1);
    };
    return (
        <div>
            {!allImagesLoaded && <LoadingSpinner />}
            <div className="job-list">
                {items.map((item) => (
                    <Job
                        key={item.id}
                        name={item.name}
                        jobClass={item.class}
                        level={item.level}
                        health={item.health}
                        mana={item.mana}
                        skills={item.skills}
                        equipment={item.equipment}
                        status={item.status}
                        guild={item.guild}
                        achievements={item.achievements}
                        isOnline={item.isOnline}
                        lastLogin={item.lastLogin}
                        image={item.image}
                        onImageLoad={handleImageLoad}
                        hidden={!allImagesLoaded}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
