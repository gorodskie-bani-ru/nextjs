/**
 * TODO Fix images
 */
export const imageResolver = (image: string) => {
  return image.startsWith('wp-content/')
    ? image
    : image.startsWith('lazy/') || image.startsWith('companies/')
    ? `assets/images/${image}`
    : `assets/society/uploads/images/${image}`
}
