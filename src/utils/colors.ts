export function findColorFamily(hue: number) {
  if (hue > 300 || hue < 10) {
    return "red";
  } else if (hue > 10 && hue < 40) {
    return "orange";
  } else if (hue > 40 && hue < 65) {
    return "yellow";
  } else if (hue > 65 && hue < 175) {
    return "green";
  } else if (hue > 175 && hue < 260) {
    return "blue";
  } else if (hue > 260 && hue < 300) {
    return "purple";
  }
}

export function getHueFromHex(hex: string) {
  // convert hex to RGB
  let r: any, g: any, b: any;

  if (hex.length === 4) {
    r = "0x" + hex[1] + hex[1];
    g = "0x" + hex[2] + hex[2];
    b = "0x" + hex[3] + hex[3];
  } else if (hex.length === 7) {
    r = "0x" + hex[1] + hex[2];
    g = "0x" + hex[3] + hex[4];
    b = "0x" + hex[5] + hex[6];
  }

  // partial conversion to HSL to get hue
  // see https://css-tricks.com/converting-color-spaces-in-javascript/
  r /= 255;
  g /= 255;
  b /= 255;
  const cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin;

  let h = 0;

  if (delta === 0) h = 0;
  else if (cmax === r) h = ((g - b) / delta) % 6;
  else if (cmax === g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  return findColorFamily(h);
}

export function generateHex(): string {
  const characters = "0123456789ABCDEF";
  let hex = "#";

  // generate 6 character hex
  for (let i = 0; i < 6; i++) {
    hex += characters[Math.floor(Math.random() * 16)];
  }

  return hex;
}

export function generateColorList(): { hex: string; colorFamily: any }[] {
  const colors = [];
  let i = 1;

  while (i <= 100) {
    const hex = generateHex();
    const colorFam = getHueFromHex(hex);

    colors.push({ hex: hex, colorFamily: colorFam });
    i++;
  }

  return colors;
}
