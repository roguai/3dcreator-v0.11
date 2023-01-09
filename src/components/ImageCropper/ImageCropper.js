import React, { useState, useRef, useEffect, useCallback } from "react";
import styled from "styled-components";

import ReactCrop, {
    centerCrop,
    makeAspectCrop,
    Crop,
    PixelCrop,
} from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { Slider } from 'antd';
import { canvasPreview } from './canvasPreview'
import { useDebounceEffect } from './useDebounceEffect'
import plusIcon from '../../assets/images/plus.png';
import minusIcon from '../../assets/images/minus.png';
import arrowIconright from '../../assets/images/Square-Up-right.png';
import arrowIconleft from '../../assets/images/Square-Up-left.png';

function centerAspectCrop(
    mediaWidth,
    mediaHeight,
    aspect,
) {
    return centerCrop(
        makeAspectCrop(
            {
                unit: '%',
                width: 90,
            },
            aspect,
            mediaWidth,
            mediaHeight,
        ),
        mediaWidth,
        mediaHeight,
    )
}


const Conatiner = styled.div``;

const CropImg=styled.div`
    height:400px;
    border-radius:15px;
    overflow:hidden;
`;

const Controllers=styled.div`
    margin: 40px 142px;
    & .ant-slider-step{
        background: rgba(255, 255, 255, 0.1);
    }
`;
const Controller=styled.div`
    margin-bottom: 35px;
`;

const RightRotate=styled.div`
    position: absolute;
    background: url(${arrowIconright});
    background-size:cover;
    width: 15px;
    height: 15px;
    margin-left: 353px;
    margin-top: -25px;
`;
const LeftRotate=styled.div`
    position: absolute;
    background: url(${arrowIconleft});
    background-size:cover;
    width: 15px;
    height: 15px;
    margin-left: -22px;
    margin-top: -3px;

`;
const RightScale=styled.div`
    position: absolute;
    background: url(${minusIcon});
    background-size:cover;
    width: 15px;
    height: 15px;
    margin-left: 353px;
    margin-top: -24px;
   
`;
const LeftScale=styled.div`
    position: absolute;
    background: url(${plusIcon});
    background-size:cover;
    width: 15px;
    height: 15px;
    margin-left: -22px;
    margin-top: -2px;


`;


const ImageCropper = ({isProfileModal, isModalOpen}) => {
    const [imgSrc, setImgSrc] = useState('');
    const previewCanvasRef = useRef(null);
    const imgRef = useRef(null);
    const [crop, setCrop] = useState();
    const [completedCrop, setCompletedCrop] = useState();
    const [scale, setScale] = useState(1);
    const [rotate, setRotate] = useState(0);
    const [aspect, setAspect] = useState(16 / 16);

    function onSelectFile(e) {
        if (e.target.files && e.target.files.length > 0) {
            setCrop(undefined) // Makes crop preview update between images.
            const reader = new FileReader()
            reader.addEventListener('load', () =>
                setImgSrc(reader.result?.toString() || ''),
            )
            reader.readAsDataURL(e.target.files[0])
        }
    }

    function onImageLoad(e) {
        if (aspect) {
            const { width, height } = e.currentTarget
            setCrop(centerAspectCrop(width, height, aspect))
        }
    }

    useDebounceEffect(
        async () => {
            if (
                completedCrop?.width &&
                completedCrop?.height &&
                imgRef.current &&
                previewCanvasRef.current
            ) {
                // We use canvasPreview as it's much faster than imgPreview.
                canvasPreview(
                    imgRef.current,
                    previewCanvasRef.current,
                    completedCrop,
                    scale,
                    rotate,
                )
            }
        },
        100,
        [completedCrop, scale, rotate],
    );

    


    useEffect(() => {
        if (isProfileModal && isModalOpen) {
            document.getElementById('profileimgselect').click();
        }
    }, [isProfileModal, isModalOpen]);

    return (
        <Conatiner>
            <input type="file" id="profileimgselect" hidden accept="image/*" onChange={onSelectFile} />
            <CropImg>
                {!!imgSrc && (
                    <ReactCrop
                        crop={crop}
                        onChange={(_, percentCrop) => setCrop(percentCrop)}
                        onComplete={(c) => setCompletedCrop(c)}
                        aspect={aspect}
                    >
                        <img
                            ref={imgRef}
                            alt="Crop me"
                            src={imgSrc}
                            style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
                            onLoad={onImageLoad}
                        />
                    </ReactCrop>
                )}
            </CropImg>
            <Controllers>
                <Controller>
                    <LeftScale></LeftScale>
                    <Slider
                        min={1}
                        max={10}
                        onChange={(v) => {
                            setScale(v);
                        }}
                        value={scale}
                    />
                    <RightScale></RightScale>
                </Controller>
                <Controller>
                    <LeftRotate></LeftRotate>
                    <Slider
                        min={-180}
                        max={180}
                        onChange={(v) => {
                            setRotate(Math.min(180, Math.max(-180, Number(v))))
                        }}
                        value={rotate}
                    />
                    <RightRotate></RightRotate>
                </Controller>

            </Controllers>




        </Conatiner>
    )
};

export default ImageCropper;