export const image1 = function (data, data2) {
  for (let i = 0; i < data.length; i += 4) {
    data[i] = data[i]; // r
    data[i + 1] = data[i + 1]; // g
    data[i + 2] = data[i + 2]; // b
  }
};

export const image2 = function (data, data2) {
  for (let i = 0; i < data.length; i += 4) {
    data[i] = data2[i]; // r
    data[i + 1] = data2[i + 1]; // g
    data[i + 2] = data2[i + 2]; // b
  }
};

export const r2g1b1 = function (data, data2) {
  for (let i = 0; i < data.length; i += 4) {
    data[i] = data2[i]; // r
    data[i + 1] = data[i + 1]; // g
    data[i + 2] = data[i + 2]; // b
  }
};

export const r1g2b1 = function (data, data2) {
  for (let i = 0; i < data.length; i += 4) {
    data[i] = data[i]; // r
    data[i + 1] = data2[i + 1]; // g
    data[i + 2] = data[i + 2]; // b
  }
};

export const r1g1b2 = function (data, data2) {
  for (let i = 0; i < data.length; i += 4) {
    data[i] = data[i]; // r
    data[i + 1] = data[i + 1]; // g
    data[i + 2] = data2[i + 2]; // b
  }
};

export const r2g2b1 = function (data, data2) {
  for (let i = 0; i < data.length; i += 4) {
    data[i] = data2[i]; // r
    data[i + 1] = data2[i + 1]; // g
    data[i + 2] = data[i + 2]; // b
  }
};

export const r2g1b2 = function (data, data2) {
  for (let i = 0; i < data.length; i += 4) {
    data[i] = data2[i]; // r
    data[i + 1] = data[i + 1]; // g
    data[i + 2] = data2[i + 2]; // b
  }
};

export const r1g2b2 = function (data, data2) {
  for (let i = 0; i < data.length; i += 4) {
    data[i] = data[i]; // r
    data[i + 1] = data2[i + 1]; // g
    data[i + 2] = data2[i + 2]; // b
  }
};

export const addition = function (data, data2) {
  for (let i = 0; i < data.length; i += 4) {
    const rPerc = data[i] / 255;
    const gPerc = data[i + 1] / 255;
    const bPerc = data[i + 2] / 255;

    const rPerc2 = data2[i] / 255;
    const gPerc2 = data2[i + 1] / 255;
    const bPerc2 = data2[i + 2] / 255;

    const rOut = rPerc2 + rPerc;
    const gOut = gPerc2 + gPerc;
    const bOut = bPerc2 + bPerc;

    data[i] = rOut * 255; // r
    data[i + 1] = gOut * 255; // g
    data[i + 2] = bOut * 255; // b
  }
};

export const subtract = function (data, data2) {
  for (let i = 0; i < data.length; i += 4) {
    const rPerc = data[i] / 255;
    const gPerc = data[i + 1] / 255;
    const bPerc = data[i + 2] / 255;

    const rPerc2 = data2[i] / 255;
    const gPerc2 = data2[i + 1] / 255;
    const bPerc2 = data2[i + 2] / 255;

    const rOut = rPerc - rPerc2;
    const gOut = gPerc - gPerc2;
    const bOut = bPerc - bPerc2;

    data[i] = rOut * 255; // r
    data[i + 1] = gOut * 255; // g
    data[i + 2] = bOut * 255; // b
  }
};

export const inverseSubtract = function (data, data2) {
  for (let i = 0; i < data.length; i += 4) {
    const rPerc = data[i] / 255;
    const gPerc = data[i + 1] / 255;
    const bPerc = data[i + 2] / 255;

    const rPerc2 = data2[i] / 255;
    const gPerc2 = data2[i + 1] / 255;
    const bPerc2 = data2[i + 2] / 255;

    const rOut = rPerc2 - rPerc;
    const gOut = gPerc2 - gPerc;
    const bOut = bPerc2 - bPerc;

    data[i] = rOut * 255; // r
    data[i + 1] = gOut * 255; // g
    data[i + 2] = bOut * 255; // b
  }
};

export const difference = function (data, data2) {
  for (let i = 0; i < data.length; i += 4) {
    const rPerc = data[i] / 255;
    const gPerc = data[i + 1] / 255;
    const bPerc = data[i + 2] / 255;

    const rPerc2 = data2[i] / 255;
    const gPerc2 = data2[i + 1] / 255;
    const bPerc2 = data2[i + 2] / 255;

    const rOut = rPerc - (1 - rPerc2);
    const gOut = gPerc - (1 - gPerc2);
    const bOut = bPerc - (1 - bPerc2);

    data[i] = rOut * 255; // r
    data[i + 1] = gOut * 255; // g
    data[i + 2] = bOut * 255; // b
  }
};

export const inverseDifference = function (data, data2) {
  for (let i = 0; i < data.length; i += 4) {
    const rPerc = data[i] / 255;
    const gPerc = data[i + 1] / 255;
    const bPerc = data[i + 2] / 255;

    const rPerc2 = data2[i] / 255;
    const gPerc2 = data2[i + 1] / 255;
    const bPerc2 = data2[i + 2] / 255;

    const rOut = 1 - rPerc - rPerc2;
    const gOut = 1 - gPerc - gPerc2;
    const bOut = 1 - bPerc - bPerc2;

    data[i] = rOut * 255; // r
    data[i + 1] = gOut * 255; // g
    data[i + 2] = bOut * 255; // b
  }
};

export const multiply = function (data, data2) {
  for (let i = 0; i < data.length; i += 4) {
    const rPerc = data[i] / 255;
    const gPerc = data[i + 1] / 255;
    const bPerc = data[i + 2] / 255;

    const rPerc2 = data2[i] / 255;
    const gPerc2 = data2[i + 1] / 255;
    const bPerc2 = data2[i + 2] / 255;

    const rOut = rPerc * rPerc2;
    const gOut = gPerc * gPerc2;
    const bOut = bPerc * bPerc2;

    data[i] = rOut * 255; // r
    data[i + 1] = gOut * 255; // g
    data[i + 2] = bOut * 255; // b
  }
};

export const divide = function (data, data2) {
  for (let i = 0; i < data.length; i += 4) {
    const rPerc = data[i] / 255;
    const gPerc = data[i + 1] / 255;
    const bPerc = data[i + 2] / 255;

    const rPerc2 = data2[i] / 255;
    const gPerc2 = data2[i + 1] / 255;
    const bPerc2 = data2[i + 2] / 255;

    const rOut = rPerc / rPerc2;
    const gOut = gPerc / gPerc2;
    const bOut = bPerc / bPerc2;

    data[i] = rOut * 255; // r
    data[i + 1] = gOut * 255; // g
    data[i + 2] = bOut * 255; // b
  }
};

export const inverseDivide = function (data, data2) {
  for (let i = 0; i < data.length; i += 4) {
    const rPerc = data[i] / 255;
    const gPerc = data[i + 1] / 255;
    const bPerc = data[i + 2] / 255;

    const rPerc2 = data2[i] / 255;
    const gPerc2 = data2[i + 1] / 255;
    const bPerc2 = data2[i + 2] / 255;

    const rOut = rPerc2 / rPerc;
    const gOut = gPerc2 / gPerc;
    const bOut = bPerc2 / bPerc;

    data[i] = rOut * 255; // r
    data[i + 1] = gOut * 255; // g
    data[i + 2] = bOut * 255; // b
  }
};

export const screen = function (data, data2) {
  for (let i = 0; i < data.length; i += 4) {
    const rPerc = data[i] / 255;
    const gPerc = data[i + 1] / 255;
    const bPerc = data[i + 2] / 255;

    const rPerc2 = data2[i] / 255;
    const gPerc2 = data2[i + 1] / 255;
    const bPerc2 = data2[i + 2] / 255;

    const rOut = 1 - (1 - rPerc) * (1 - rPerc2);
    const gOut = 1 - (1 - gPerc) * (1 - gPerc2);
    const bOut = 1 - (1 - bPerc) * (1 - bPerc2);

    data[i] = rOut * 255; // r
    data[i + 1] = gOut * 255; // g
    data[i + 2] = bOut * 255; // b
  }
};

export const lighten = function (data, data2) {
  for (let i = 0; i < data.length; i += 4) {
    const rPerc = data[i] / 255;
    const gPerc = data[i + 1] / 255;
    const bPerc = data[i + 2] / 255;

    const rPerc2 = data2[i] / 255;
    const gPerc2 = data2[i + 1] / 255;
    const bPerc2 = data2[i + 2] / 255;

    const rOut = rPerc > rPerc2 ? rPerc : rPerc2;
    const gOut = gPerc > gPerc2 ? gPerc : gPerc2;
    const bOut = bPerc > bPerc2 ? bPerc : bPerc2;

    data[i] = rOut * 255; // r
    data[i + 1] = gOut * 255; // g
    data[i + 2] = bOut * 255; // b
  }
};

export const darken = function (data, data2) {
  for (let i = 0; i < data.length; i += 4) {
    const rPerc = data[i] / 255;
    const gPerc = data[i + 1] / 255;
    const bPerc = data[i + 2] / 255;

    const rPerc2 = data2[i] / 255;
    const gPerc2 = data2[i + 1] / 255;
    const bPerc2 = data2[i + 2] / 255;

    const rOut = rPerc < rPerc2 ? rPerc : rPerc2;
    const gOut = gPerc < gPerc2 ? gPerc : gPerc2;
    const bOut = bPerc < bPerc2 ? bPerc : bPerc2;

    data[i] = rOut * 255; // r
    data[i + 1] = gOut * 255; // g
    data[i + 2] = bOut * 255; // b
  }
};
