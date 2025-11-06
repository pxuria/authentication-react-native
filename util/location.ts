const GOOGLE_API_KEY = '';

export function getMapPreview(lat: string, lng: string) {
    const imagePreviewUrl =
        `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=12&size=600x300&maptype=roadmap&API_KEY=${GOOGLE_API_KEY}`;
    return imagePreviewUrl
}
