import styled, { css, useTheme } from "styled-components";
import { useEffect, useState } from "react";
import {ReactComponent as MultiFolderIcon} from '../../assets/images/Multi-Folder.svg';
import {ReactComponent as EditIcon} from '../../assets/images/Edit.svg'; 
import searchIcon from '../../assets/images/search.png';
import CharactorCard from "./CharactorCard";
import models from "./models";

const Container=styled.div`
    width:400px;
    margin:0 24px;
    height:100%;
`;

const MainBtnGroup=styled.div`
    width:400px;
    border-radius:10px;
    background:rgba(0, 8, 20, 0.68);
    backdrop-filter: blur(6px);
    display:flex;
    gap:10px;
    padding:10px;
`;
const MainBtn=styled.div`
    width:185px;
    height:57px;
    border-radius:7px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px 52.5px;
    gap: 5px;
    & .text{
        font-size:12px;
        font-weight:600;
        
    }
    cursor:pointer;
    ${({$active})=>$active?css`
        color:${({theme})=>theme.colors.mainColor};
        background: rgba(255, 255, 255, 0.08);
    `: css`
        color: rgba(255, 255, 255, 0.46);
        background:rgba(255, 255, 255, 0.04);
    `}
    &:hover{
        background:${({theme})=>theme.colors.hoverColor}
    }
`;

const CharactorBtnGroup=styled.div`
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

const CharactorBtn=styled.a`
    font-size:14px;
    font-weight:600;
    cursor:pointer;
    ${({$active})=>$active?css`
        color:${({theme})=>theme.colors.mainColor}
    `:css`
        color:rgba(255, 255, 255, 0.28);
    `}
`;

const MainAssets=styled.div`
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

const SearchPan=styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px;
    gap: 10px;
    width: 400px;
    margin-top:-65px;
`;

const Search=styled.div`
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

const StyledSelect=styled.select`
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

const UploaAssetBtn=styled.button`

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

const ChractorGroup=styled.div`
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

const btns={
    templatesBtn:[
        {
            id:1,
            text:'Charactors',
            tem:'charactors'
        },
        {
            id:2,
            text:'Animals',
            tem:'animals'
        },
        {
            id:3,
            text:'Cars',
            tem:'cars'
        },
    ],
    customizeBtn:[
        {
            id:1,
            text:'Skin color',
            tem:'colors'
        },
        {
            id:2,
            text:'Glasses',
            tem:'glasses'
        },
        {
            id:3,
            text:'Wings',
            tem:'wings'
        },
        {
            id:4,
            text:'Masks',
            tem:'masks'
        },
        {
            id:5,
            text:'Hair',
            tem:'hair'
        }
    ]

};

const AssetContainer=({changeCharactor})=>{
    const theme=useTheme();
    const [templateBtn, setTemplateBtn]=useState(true);
    const [charactorBtn, setChractorbtn]=useState({
        id:1,
        text:'Charactors',
        tem:'charactors'
    });
    const [searchText, setSearchText]=useState('Search');
    const [cardList, setCardList]=useState(models.templates.charactors);
    const [btnList, setBtnList]=useState(btns.templatesBtn);

    useEffect(()=>{
        if(templateBtn){
            setBtnList(btns.templatesBtn);
            setCardList(models.templates.charactors);
            setChractorbtn({
                id:1,
                text:'Charactors',
                tem:'charactors'
            });
        }
        else{
            setBtnList(btns.customizeBtn);
            setCardList(models.customize.colors);
            setChractorbtn({
                id:1,
                text:'Skin color',
                tem:'colors'
            });
        } 
    },[templateBtn]);

    useEffect(()=>{
        if(templateBtn){
            setCardList(models.templates[charactorBtn.tem]);
        }
        else{
            setCardList(models.customize[charactorBtn.tem]);
        }
        
    }, [charactorBtn]);

    return (
        <Container>
            <MainBtnGroup>
                <MainBtn
                    $active={templateBtn}
                    onClick={()=>{
                        setTemplateBtn(true);
                    }}
                >
                    <MultiFolderIcon fill={templateBtn?theme.colors.mainColor:'rgba(255, 255, 255, 0.46)'}/>
                    <p className="text">Templates</p>
                </MainBtn>
                <MainBtn
                    $active={!templateBtn}
                    onClick={()=>{
                        setTemplateBtn(false);
                    }}
                >
                    <EditIcon fill={!templateBtn?theme.colors.mainColor:'rgba(255, 255, 255, 0.46)'}/>
                    <p className="text">Customize</p>
                </MainBtn>
            </MainBtnGroup>
            <CharactorBtnGroup>
                {btnList.map((v,k)=>
                    <CharactorBtn
                        key={k}
                        $active={v.id===charactorBtn.id}
                        onClick={()=>{
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
                            onChange={(e)=>{
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
                        cardList.map((v,k)=>(
                            <CharactorCard
                                key={k}
                                data={v}
                                changeCharactor={(c)=>{
                                    changeCharactor(c);
                                }}
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