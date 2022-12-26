import { useState } from 'react';
import images from '~/assets/images';

function Image({ src, alt, ...props }) {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(images.noImage);
    };

    return <img {...props} src={fallback || src} alt={alt} onError={handleError} />;
}

export default Image;
