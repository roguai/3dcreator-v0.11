import React from "react";
import styled from "styled-components";
import AssetsCard from "../AssetsCard";

const Conatiner = styled.div`
    margin:0 40px;
`;

const TabMenu = styled.div`
    display:inline-flex;
    margin-top:35px;
`;

const Tab = styled.div`
    padding: 20px;
    border-bottom: solid 2px rgba(255, 255, 255, 0.12);
    &.active{
        border-bottom: solid 2px #6AFFE5;
    }
    cursor:pointer;
    font-size:16px;
    font-weight:600;
    
`
const SelectMenu = styled.div`
    position:absolute;
    display:flex;
    right:0;
    gap: 15px;
    margin-top: -45px;
`

const Select = styled.select`
    width: 100px;
    height: 38px;
    font-size: 14px;
    font-weight: 600;
    background: #1E1A2F;
    border-radius: 8px;
    color: white;
    border: 0;
    padding-left: 12px;
`

const Assets=styled.div`
    margin-top:36px;
    display:flex;
    justify-content:space-between;
    gap:20px;
    flex-flow:wrap;
`;

const assets=[1,2,3,4,5,6,7,8];

const MyAssets = () => {
    return (
        <Conatiner>
            <div style={{position:'relative'}}>
                <TabMenu>
                    <Tab className="active">My saved assets</Tab>
                    <Tab className="">My wallet assets</Tab>

                </TabMenu>
                <SelectMenu>
                    <Select>
                        <option>Latest</option>
                    </Select>
                    <Select>
                        <option>All assets</option>
                    </Select>
                </SelectMenu>
            </div>
            <Assets>
                {assets.map((v,key)=>(
                    <AssetsCard key={key} />
                ))}
            </Assets>
        </Conatiner>
    )
};

export default MyAssets;