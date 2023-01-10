import styled, { css } from "styled-components";

const Container = styled.div`
    box-sizing: border-box;
    width: 120px;
    height: 200px;
    background: rgba(255, 255, 255, 0.05);
    padding:10px;
    border-radius: 8px;
    position:relative;
    cursor:pointer;
    ${({ $active }) => $active ? css`
        border: 1px solid ${({ theme }) => theme.colors.mainColor};
    `: ''}
`;

const Img = styled.img`
    width:100px;
    height:100px;
    background:rgba(255, 255, 255, 0.03);
    border-radius: 6px;
`;

const Team = styled.p`
    font-size:8px;
    font-weight:600;
    line-height:8px;
    margin-top:14px;
    color:rgba(255, 255, 255, 0.8);
`;

const Name = styled.p`
    font-size:12px;
    font-weight:600;
    line-height:12px;
    margin-top:4px;
    color:white;
`;

const Button = styled.button`
    width:100%;
    height:32px;
    border:0;
    color:white;
    font-size:12px;
    cursor:pointer;
    border-radius:6px;
    margin-top:10px;
    ${({$default})=>$default?css`
        background:rgba(255, 255, 255, 0.05);
    `:css`
        background:${({theme})=>theme.colors.mainColor}
    `}
`;

const Badge = styled.div`
    position: absolute;
    width: 65px;
    height: 17px;
    left: 52px;
    top: 3px;
    font-size: 12px;
    text-align: center;
    
    border-radius: 5px;
    ${({$badge})=>$badge==='Imported'?css`
        background: #3B82F6;
    `:css`
        background:#E11476;
    `}
`;


const CharactorCard = ({ data }) => {
    const { img, name, team, badge, btnText } = data;
    return (
        <Container>
            <Img src={img} />
            <Team>{team}</Team>
            <Name>{name}</Name>
            <Button
                $default={btnText==='Default'}
            >{btnText}</Button>
            {badge !== '' &&
                <Badge
                    $badge={badge}
                >{badge}</Badge>}
        </Container>
    )
};

export default CharactorCard;