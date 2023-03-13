/** @format */

import { useEffect, useState } from "react";
import styled, { css, useTheme } from "styled-components";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ReactComponent as DeployIcon } from "../../assets/images/Clip board.svg";
import { ReactComponent as DownloadIcon } from "../../assets/images/Download2.svg";
import { ReactComponent as InformIcon } from "../../assets/images/Information-circle.svg";
import { ReactComponent as ArrowDownIcon } from "../../assets/images/arrow-down.svg";
import { ReactComponent as CloseIcon } from "../../assets/images/Close.svg";
import { ReactComponent as CheckIcon } from "../../assets/images/checkicon.svg";
import { useGlobalContext } from "../App/context";
import { mintNFTNEAR } from "../../chaintools/near";
import { getPermissionForMintNFT } from "../../api/whitelist";

const Conatiner = styled.div`
	width: 320px;
	margin: 0 24px;
	height: 100%;

	& .Toastify__toast {
		background: transparent;
	}
	& .Toastify__close-button {
		display: none;
	}
`;
const MainBtnGroup = styled.div`
	width: 320px;
	border-radius: 10px;
	background: rgba(0, 8, 20, 0.68);
	backdrop-filter: blur(6px);
	display: flex;
	gap: 10px;
	padding: 10px;
`;
const MainBtn = styled.div`
	width: 145px;
	height: 57px;
	border-radius: 7px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 8px 52.5px;
	gap: 5px;
	& .text {
		font-size: 12px;
		font-weight: 600;
	}
	cursor: pointer;
	${({ $active }) =>
		$active
			? css`
					color: ${({ theme }) => theme.colors.mainColor};
					background: rgba(255, 255, 255, 0.08);
			  `
			: css`
					color: rgba(255, 255, 255, 0.46);
					background: rgba(255, 255, 255, 0.04);
			  `}
	&:hover {
		background: ${({ theme }) => theme.colors.hoverColor};
	}
`;

const InputContainer = styled.form`
	width: 320px;
	position: absolute;
	top: 89px;
	bottom: 0px;
	background: rgba(0, 8, 20, 0.68);
	backdrop-filter: blur(6px);
	/* Note: backdrop-filter has minimal browser support */
	padding: 24px 26px 90px 26px;
	border-radius: 10px 10px 0px 0px;
`;

const BtnGroup = styled.div`
	position: absolute;
	width: 300px;
	margin: 10px;
	display: flex;
	gap: 20px;
	justify-content: space-between;
	padding: 20px 10px;
	border-top: solid 1px rgba(255, 255, 255, 0.08);
	bottom: 0;
	left: 0;
`;

const BottomBtn = styled.button`
	width: 140px;
	height: 50px;
	border-radius: 8px;
	font-size: 16px;
	line-height: 19.2px;
	border: 0;
	color: white;
	cursor: pointer;
	${({ $active }) =>
		$active
			? css`
					color: white;
					background: ${({ theme }) => theme.colors.mainColor};
			  `
			: css`
					color: white;
					background: rgba(255, 255, 255, 0.04);
			  `}
	&:hover {
		background: ${({ theme }) => theme.colors.hoverColor};
	}
`;

const InputGroup = styled.div`
	width: 100%;
	margin-bottom: 24px;
	display: flex;
	flex-direction: column;
	gap: 12px;
`;
const Label = styled.label`
	font-size: 12px;
	line-height: 14.4px;
	font-weight: 700;
`;
const Input = styled.input`
	width: 100%;
	background: rgba(255, 255, 255, 0.08);
	border-radius: 8px;
	height: 40px;
	border: 0;
	color: rgba(255, 255, 255, 0.8);
	font-size: 14px;
	padding: 13px 16px;
	font-family: inherit;
`;

const TextArea = styled.textarea`
	width: 100%;
	background: rgba(255, 255, 255, 0.08);
	border-radius: 8px;
	height: 58px;
	border: 0;
	color: rgba(255, 255, 255, 0.8);
	font-size: 14px;
	padding: 13px 16px;
	font-family: inherit;
`;

const StyledInput = styled.div`
	& input {
		width: 100%;
		background: rgba(255, 255, 255, 0.08);
		border-radius: 8px;
		height: 40px;
		border: 0;
		color: rgba(255, 255, 255, 0.8);
		font-size: 14px;
		padding: 13px 69px 13px 16px;
		font-family: inherit;
	}
	& #informicon {
		position: absolute;
		margin-top: 9px;
		margin-left: -56px;
	}
	& #arrowdownicon {
		position: absolute;
		margin-top: 13px;
		margin-left: -25px;
	}
	& p {
		font-size: 12px;
		color: rgba(255, 255, 255, 0.68);
		position: absolute;
		margin-top: -28px;
		margin-left: 218px;
	}
`;

const StyledBorder = styled.div`
	width: 100%;
	height: 1px;
	margin-bottom: 28px;
	background: radial-gradient(
		50% 3591199.86% at 50% 50.09%,
		rgba(255, 255, 255, 0.18) 0%,
		rgba(255, 255, 255, 0.08) 78.98%,
		rgba(255, 255, 255, 0) 100%
	);
`;

const MsgContainer = styled.div`
	font-size: 16px;
	line-height: 22px;
	font-weight: 400;
	color: white;
	padding: 19px 44px 19px 60px;
	border-radius: 12px;
	border: solid 1px ${({ theme }) => theme.colors.mainColor};
	background: #05141e;
	width: 395px;
	margin-top: 40px;
	& #check {
		position: absolute;
		margin-left: -44px;
		margin-top: -6px;
	}
	& #close {
		position: absolute;
		right: 29px;
		margin-top: 3px;
	}
`;
const Msg = ({ closeToast, msg }) => (
	<MsgContainer>
		<CheckIcon id="check" />
		{msg}
		<CloseIcon id="close" onClick={closeToast} />
	</MsgContainer>
);

const DeployContainer = () => {
	const theme = useTheme();
	const { state } = useGlobalContext();
	const [deployBtn, setDeployBtn] = useState(true);
	const [displayName, setDisplayName] = useState("");
	const [description, setDescription] = useState("");
	const [userCounter, setUserCounter] = useState(0);
	const [hasNft, setHasNft] = useState(false);
	const [isRegisteredToWhitelist, setIsRegisteredToWhitelist] = useState(false);

	const handleSave = () => {
		toast(<Msg msg="Your asset has been saved" />);
	};

	const processMintNFT = async (e) => {
		e.preventDefault();
		if (!state.profile.iswalletConnect) {
			toast(<Msg msg="First connect to your wallet" />);
			return;
		}
		if (!isRegisteredToWhitelist) {
			toast(<Msg msg="You are not allowed to mint NFT" />);
			return;
		}

		await mintNFTNEAR(
			`${window.accountId}-test-token`,
			"Reitio 3D NFT",
			"Trailblazer CapsuleNFT entitles HODLers exclusive access to early adopter incentives, shard collections, earlyaccess to new features and more.",
			"https://bafybeiczrgrnf274ciyzjct7qahgidhmwlhq4ujf4ifjbnfweiac64fh6e.ipfs.nftstorage.link/",
			window.accountId
		);
	};

	useEffect(() => {
		async function fetchData() {
			const isEnabled = await getPermissionForMintNFT(window.accountId);
			setIsRegisteredToWhitelist(isEnabled);
		}
		fetchData();
	}, [state.profile]);

	return (
		<Conatiner>
			<ToastContainer
				position="top-right"
				autoClose="3000"
				hideProgressBar={true}
				style={{
					width: "433px",
				}}
			/>
			<MainBtnGroup>
				<MainBtn
					$active={deployBtn}
					onClick={() => {
						setDeployBtn(true);
					}}
				>
					<DeployIcon
						fill={
							deployBtn ? theme.colors.mainColor : "rgba(255, 255, 255, 0.46)"
						}
					/>
					<p className="text">Deploy</p>
				</MainBtn>
				<MainBtn
					$active={!deployBtn}
					onClick={() => {
						setDeployBtn(false);
					}}
				>
					<DownloadIcon
						fill={
							!deployBtn ? theme.colors.mainColor : "rgba(255, 255, 255, 0.46)"
						}
					/>
					<p className="text">Download</p>
				</MainBtn>
			</MainBtnGroup>
			<InputContainer>
				<InputGroup>
					<Label>Display name</Label>
					<Input
						type="text"
						placeholder="Enter asset name"
						value={displayName}
						onChange={(e) => {
							setDisplayName(e.target.value);
						}}
					/>
				</InputGroup>
				<InputGroup>
					<Label>Description</Label>
					<TextArea
						value={description}
						onChange={(e) => {
							setDescription(e.target.value);
						}}
						placeholder="Enter description here"
					/>
				</InputGroup>
				<InputGroup>
					<Label>Location</Label>
					<StyledInput>
						<input type={"text"} readOnly value={"Select world"} />
						<InformIcon id="informicon" />
						<ArrowDownIcon id="arrowdownicon" />
					</StyledInput>
				</InputGroup>
				<InputGroup>
					<Label>Blockchain</Label>
					<StyledInput>
						<input type={"text"} readOnly value={"Select blockchain type"} />
						<InformIcon id="informicon" />
						<ArrowDownIcon id="arrowdownicon" />
					</StyledInput>
				</InputGroup>
				<StyledBorder />
				<InputGroup>
					<Label>Total</Label>
					<StyledInput>
						<input type={"text"} value="50,000" />
						<p>REIGN</p>
					</StyledInput>
				</InputGroup>
				<BtnGroup>
					<BottomBtn
						onClick={(e) => {
							e.preventDefault();
							handleSave();
						}}
					>
						Save
					</BottomBtn>
					<BottomBtn $active onClick={(e) => processMintNFT(e)}>
						Deploy
					</BottomBtn>
				</BtnGroup>
			</InputContainer>
		</Conatiner>
	);
};

export default DeployContainer;
