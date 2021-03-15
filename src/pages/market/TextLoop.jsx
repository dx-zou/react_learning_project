/**
 * 文字轮播
 * 二维码
 */
import { useState, useEffect, useRef, useCallback } from 'react';
import TextLoop from 'react-text-loop';
import { Button, Card } from 'antd';
import QRCode from 'qrcode.react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import { ChromePicker } from 'react-color';

function generateDownload(canvas, crop) {
  if (!crop || !canvas) {
    return;
  }
  canvas.toBlob(
    blob => {
      const previewUrl = window.URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.download = 'cropPreview.png';
      anchor.href = URL.createObjectURL(blob);
      anchor.click();
      window.URL.revokeObjectURL(previewUrl);
    },
    'image/png',
    1
  );
}

const TextLooping = () => {
  const [items] = useState([666, 222, 333]);
  const [upImg, setUpImg] = useState();
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [crop, setCrop] = useState({
    unit: 'px',
    width: 200,
    aspect: 1 / 1,
  });
  const [completedCrop, setCompletedCrop] = useState(null);
  const [color, setColor] = useState('#fff');
  const onSelectFile = e => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => setUpImg(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const onLoad = useCallback(img => {
    imgRef.current = img;
  }, []);

  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }

    const image = imgRef.current;
    const canvas = previewCanvasRef.current;
    const crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext('2d');
    const pixelRatio = window.devicePixelRatio;

    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = 'high';

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
  }, [completedCrop]);
  // 颜色选择器
  const handleColorChange = value => {
    setColor(value.hex);
  };
  return (
    <div>
      <Card title='文字轮播'>
        <TextLoop
          interval={2000}
          delay={0}
          fade
          mask
          noWrap
          springConfig={{ stiffness: 180, damping: 8 }}
        >
          {items.map(item => (
            <span key={item}>{item}</span>
          ))}
        </TextLoop>
      </Card>
      <Card title='二维码'>
        <QRCode
          size={200}
          value='https://react.docschina.org/docs/hooks-intro.html'
        />
      </Card>
      <Card title='图片剪切'>
        <div>
          <input type='file' accept='image/*' onChange={onSelectFile} />
        </div>
        <ReactCrop
          src={upImg}
          onImageLoaded={onLoad}
          crop={crop}
          onChange={c => setCrop(c)}
          onComplete={c => setCompletedCrop(c)}
        />
        <div>
          <canvas
            ref={previewCanvasRef}
            // Rounding is important so the canvas width and height matches/is a multiple for sharpness.
            style={{
              width: Math.round(completedCrop?.width ?? 0),
              height: Math.round(completedCrop?.height ?? 0),
            }}
          />
        </div>
        <Button
          type='primary'
          disabled={!completedCrop?.width || !completedCrop?.height}
          onClick={() =>
            generateDownload(previewCanvasRef.current, completedCrop)
          }
        >
          Download cropped image
        </Button>
      </Card>
      <Card title='颜色选择器'>
        <ChromePicker color={color} onChange={handleColorChange} />
      </Card>
    </div>
  );
};
export default TextLooping;
