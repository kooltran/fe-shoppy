import { css } from 'styled-components';

const sizes = {
    'phone-only': 576,
    'tablet-portrait-up': 576,
    'tablet-landscape-up': 768,
    'desktop-up': 992,
    'big-desktop-up': 1200,
};

const screen = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) =>
        css`
      @media (${label === 'phone-only'
            ? `max-width: ${sizes[label] - 1}px`
            : `min-width: ${sizes[label]}px`}) {
        ${css(...args)};
      }
    `;
    return acc;
}, {});

export default screen;
