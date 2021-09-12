import styled from 'styled-components';

const Color = styled.div`
  background-color: ${(props) => props.bgColor};
  color: ${(props) =>
    relativeLuminance(props.bgColor) > 0.5 ? 'black' : 'white'};
  text-align: center;
  border-radius: var(--radius);
  padding: 0.4rem;
`;

function relativeLuminance(color) {
  let [R8bit, G8bit, B8bit] = hexToRGB(color);

  let RsRGB = R8bit / 255;
  let GsRGB = G8bit / 255;
  let BsRGB = B8bit / 255;

  let R =
    RsRGB <= 0.03928 ? RsRGB / 12.92 : Math.pow((RsRGB + 0.055) / 1.055, 2.4);
  let G =
    GsRGB <= 0.03928 ? GsRGB / 12.92 : Math.pow((GsRGB + 0.055) / 1.055, 2.4);
  let B =
    BsRGB <= 0.03928 ? BsRGB / 12.92 : Math.pow((BsRGB + 0.055) / 1.055, 2.4);

  // For the sRGB colorspace, the relative luminance of a color is defined as:
  let L = 0.2126 * R + 0.7152 * G + 0.0722 * B;

  return L;
}

function hexToRGB(h) {
  let r = 0,
    g = 0,
    b = 0;

  // 3 digits
  if (h.length === 4) {
    r = '0x' + h[1] + h[1];
    g = '0x' + h[2] + h[2];
    b = '0x' + h[3] + h[3];

    // 6 digits
  } else if (h.length === 7) {
    r = '0x' + h[1] + h[2];
    g = '0x' + h[3] + h[4];
    b = '0x' + h[5] + h[6];
  }

  return [Number(r), Number(g), Number(b)];
}

export default Color;
