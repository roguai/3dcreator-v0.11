import styled, { css } from "styled-components";
import { useGlobalContext } from "../App/context";

const Container = styled.div`
    box-sizing: border-box;
    width: 120px;
    height: 200px;
    background: rgba(255, 255, 255, 0.05);
    padding:10px;
    border-radius: 8px;
    position:relative;
    cursor:pointer;
    &:active{
        border:solid 1px ${({ theme }) => theme.colors.mainColor};
    }
    &:focus{
        border:solid 1px ${({ theme }) => theme.colors.mainColor};
    }
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
    color:black;
    font-size:12px;
    cursor:pointer;
    border-radius:6px;
    margin-top:10px;
    ${({ $default }) => $default ? css`
        background:rgba(255, 255, 255, 0.05);
    `: css`
        background:${({ theme }) => theme.colors.mainColor}
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
    ${({ $badge }) => $badge === 'Imported' ? css`
        background: #3B82F6;
    `: css`
        background:#E11476;
    `}
`;


const CharactorCard = ({ data }) => {
    const { img, name, team, badge, btnText, iscustomize, customizable } = data;
    const { changeCurrentModel, changeModelcustomize } = useGlobalContext();

    const handleClick = () => {
        if (!iscustomize) {
            const { Preview, category } = data;
            changeCurrentModel({ Preview: Preview, customizable: customizable, category: category });
        }
        else {
            const { category, val } = data;
            let v = {};
            if (category === 'wing') {
                v = { wing: val }
            }
            else if (category === 'ear') {
                v = { ear: val }
            }
            else if (category === 'glass') {
                v = { glass: val }
            }
            else if (category === 'color') {
                v = { color: val }
            }
            else if (category === 'roofbox') {
                v = { roofbox: val }
            }
            else if (category === 'spoiler') {
                v = { spoiler: val }
            }
            changeModelcustomize(v);
        }
    }
    return (
        <Container
            onClick={() => {
                handleClick();
            }}
        >
            <Img src={img} />
            <Team>{team}</Team>
            <Name>{name}</Name>
            <Button
                $default={btnText === 'Default' || btnText === 'Free'}
            >{btnText}</Button>
            {badge !== '' &&
                <Badge
                    $badge={badge}
                >{badge}</Badge>}
        </Container>
    )
};

export default CharactorCard;