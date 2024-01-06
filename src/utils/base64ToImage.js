import { Buffer } from 'buffer';

function base64ToImage(base64String) {
  // Remove the data:image/png;base64, prefix if present
  const base64Image = base64String.replace(/^data:image\/(png|jpg|jpeg);base64,/, '');

  const buffer = Buffer.from(base64Image, 'base64');
  const blob = new Blob([buffer], { type: 'image/png' });

  return URL.createObjectURL(blob);
}