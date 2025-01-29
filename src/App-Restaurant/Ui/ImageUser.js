
async function ImageUser(path) {
        try {
            const response = await fetch(path);
            if (!response.ok) {
                throw new Error('Failed to fetch the image');
            }
            const blob = await response.blob();
            return new File([blob], path, { type: blob.type });
        } catch (error) {
            console.error('Error loading image:', error);
            return null;
        }
}

export default ImageUser