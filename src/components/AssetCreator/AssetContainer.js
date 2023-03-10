import styled, { css, useTheme } from "styled-components";
import { useEffect, useState } from "react";
import { ReactComponent as MultiFolderIcon } from '../../assets/images/Multi-Folder.svg';
import { ReactComponent as EditIcon } from '../../assets/images/Edit.svg';
import {ReactComponent as GenerateIcon} from '../../assets/images/generate-reitio-01.svg';
import searchIcon from '../../assets/images/search.png';
import CharactorCard from "./CharactorCard";
import models from "./models";
import { useGlobalContext } from "../App/context";

const Container = styled.div`
    width:400px;
    margin:0 24px;
    height:100%;
`;

const MainBtnGroup = styled.div`
    width:400px;
    border-radius:10px;
    background:rgba(0, 8, 20, 0.68);
    backdrop-filter: blur(6px);
    display:flex;
    gap:10px;
    padding:10px;
`;
const MainBtn = styled.div`
    width:185px;
    height:57px;
    border-radius:7px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 5px;
    & .text{
        font-size:12px;
        font-weight:600;
        
    }
    cursor:pointer;
    ${({ $active }) => $active ? css`
        color:${({ theme }) => theme.colors.mainColor};
        background: rgba(255, 255, 255, 0.08);
    `: css`
        color: rgba(255, 255, 255, 0.46);
        background:rgba(255, 255, 255, 0.04);
    `}
    ${({ $disabled }) => $disabled ? css`
        cursor:no-drop;
    `: css``}
    &:hover{
        background:${({ theme }) => theme.colors.hoverColor}
    }
`;

const CharactorBtnGroup = styled.div`
    width:400px;
    background: rgba(0, 8, 20, 0.68);
    backdrop-filter: blur(6px);
    /* Note: backdrop-filter has minimal browser support */
    padding:24px;
    border-radius: 10px;
    margin-top:10px;
    display:flex;
    justify-content:center;
    gap:28px;
    flex-direction:row;
    overflow-x:auto;

    &::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
    }
`;

const CharactorBtn = styled.a`
    font-size:14px;
    font-weight:600;
    cursor:pointer;
    ${({ $active }) => $active ? css`
        color:${({ theme }) => theme.colors.mainColor}
    `: css`
        color:rgba(255, 255, 255, 0.28);
    `}
`;

const MainAssets = styled.div`
    background: rgba(0, 8, 20, 0.68);
    backdrop-filter: blur(6px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 10px 10px 0px 0px;
    width:400px;
    position: absolute;
    top: 163px;
    bottom: 0;
    padding: 66px 0 90px 0;
    
`;

const SearchPan = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px;
    gap: 10px;
    width: 400px;
    margin-top:-65px;
`;

const Search = styled.div`
    position:relative;
    & input{
        width: 250px;
        height: 40px;
        background: rgba(255, 255, 255, 0.08);
        border-radius: 8px;
        color: white;
        font-size: 14px;
        font-weight: 600;
        padding: 13px 40px 13px 12px;
        border: 0;
    }
    & img{
        position: absolute;
        margin-left: -24px;
        margin-top: 12px;
    }
    
`;

const StyledSelect = styled.select`
    width: 120px;
    height: 40px;
    font-size: 14px;
    font-weight: 600;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 8px;
    color: white;
    border: 0;
    padding-left: 12px;
`;

const UploaAssetBtn = styled.button`

    align-items: center;
    padding: 15px 0px;
    position: absolute;
    width: 380px;
    height: 50px;
    margin: 20px 10px;
    bottom: 0;
    background: #222133;
    border-radius: 8px;
    border:0;
    color:white;
    font-size:16px;
    font-weight:600;
`;

const ChractorGroup = styled.div`
    padding: 3px 10px;
    display:flex;
    flex-direction:row;
    flex-flow:wrap;
    gap:10px;
    justify-content:sapce-between;
    overflow:auto;
    &::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
    }
    max-height:100%;
`;

const btns = {
    templatesBtn: [
        {
            id: 1,
            text: 'Characters',
            tem: 'charactors'
        },
        {
            id: 2,
            text: 'Animals',
            tem: 'animals'
        },
        {
            id: 3,
            text: 'Cars',
            tem: 'cars'
        },
    ],
    customizeBtn: [
        {
            id: 1,
            text: 'Color',
            tem: 'colors',
            for: 'car'
        },
        {
            id: 2,
            text: 'Face',
            tem: 'glasses',
            for: 'human'
        },
        {
            id: 3,
            text: 'Backpack',
            tem: 'wings',
            for: 'human'
        },
        {
            id: 4,
            text: 'Head',
            tem: 'headphone',
            for: 'human'
        },
        {
            id: 5,
            text: 'Roofbox',
            tem: 'roofbox',
            for: 'car'
        },
        {
            id: 6,
            text: 'Spoiler',
            tem: 'spoiler',
            for: 'car'
        },

    ]

};

const AssetContainer = () => {
    const theme = useTheme();
    const { state } = useGlobalContext();
    const [templateBtn, setTemplateBtn] = useState(true);
    const [charactorBtn, setChractorbtn] = useState({
        id: 1,
        text: 'Charactors',
        tem: 'charactors'
    });
    const [searchText, setSearchText] = useState('Search');
    const [cardList, setCardList] = useState(models.templates.charactors);
    const [btnList, setBtnList] = useState(btns.templatesBtn);

    useEffect(() => {
        if (templateBtn) {
            setBtnList(btns.templatesBtn);
            setCardList(models.templates.charactors);
            setChractorbtn({
                id: 1,
                text: 'Charactors',
                tem: 'charactors'
            });
        }
        else {
            setBtnList(btns.customizeBtn);
            if (state.currentModel.category === 'human') {
                setCardList(models.customize.glasses);
                setChractorbtn({
                    id: 2,
                    text: 'Glasses',
                    tem: 'glasses',
                    for: 'human'
                });
            }
            else {
                setCardList(models.customize.colors);

                setChractorbtn({
                    id: 1,
                    text: 'Skin color',
                    tem: 'colors',
                    for: 'car'
                });
            }

        }
    }, [templateBtn]);

    useEffect(() => {
        if (templateBtn) {
            setCardList(models.templates[charactorBtn.tem]);
        }
        else {
            setCardList(models.customize[charactorBtn.tem]);
        }

    }, [charactorBtn]);

    return (
        <Container>
            <MainBtnGroup>
                <MainBtn
                    $active={templateBtn}
                    onClick={() => {
                        setTemplateBtn(true);
                    }}
                >
                    <MultiFolderIcon fill={templateBtn ? theme.colors.mainColor : 'rgba(255, 255, 255, 0.46)'} />
                    <p className="text">Templates</p>
                </MainBtn>
                <MainBtn
                    $active={!templateBtn}
                    $disabled={!state.currentModel.customizable}
                    onClick={() => {
                        if (!state.currentModel.customizable) return;
                        setTemplateBtn(false);
                    }}
                >
                    <EditIcon fill={!templateBtn ? theme.colors.mainColor : 'rgba(255, 255, 255, 0.46)'} />
                    <p className="text">Customize</p>
                </MainBtn>
                <MainBtn
                    // $active={!templateBtn}
                    $disabled={true}
                    onClick={() => {
                       
                    }}
                >
                    <GenerateIcon />
                    <p className="text">Generate</p>
                </MainBtn>
            </MainBtnGroup>
            <CharactorBtnGroup>
                {!templateBtn && btnList.map((v, k) =>
                    v.for === state.currentModel.category && <CharactorBtn
                        key={k}
                        $active={v.id === charactorBtn.id}
                        onClick={() => {
                            setChractorbtn(v);
                        }}
                    >
                        {v.text}
                    </CharactorBtn>
                )}
                {templateBtn && btnList.map((v, k) =>
                    <CharactorBtn
                        key={k}
                        $active={v.id === charactorBtn.id}
                        onClick={() => {
                            setChractorbtn(v);
                        }}
                    >
                        {v.text}
                    </CharactorBtn>
                )}
            </CharactorBtnGroup>
            <MainAssets>
                <SearchPan>
                    <Search>
                        <input type='text'
                            value={searchText}
                            onChange={(e) => {
                                setSearchText(e.target.value);
                            }}
                        />
                        <img src={searchIcon} />
                    </Search>
                    <StyledSelect>
                        <option>All templates</option>
                    </StyledSelect>
                </SearchPan>
                <ChractorGroup>
                    {
                        cardList.map((v, k) => (
                            <CharactorCard
                                key={k}
                                data={v}

                            />
                        ))
                    }

                </ChractorGroup>
                <UploaAssetBtn>
                    Upload asset
                </UploaAssetBtn>
            </MainAssets>

        </Container>
    )
};

export default AssetContainer;