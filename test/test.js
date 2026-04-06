const assert = require('assert');
const reverse = require('../src');
it.optional = require('../extensions/it-optional');

it.optional('Should return 261 when 162 given', () => {
  const reversed = reverse(162);

    equal(reversed, 261);
});

it.optional('Should return 291 when -192 given', () => {
  const reversed = reverse(-192);

    equal(reversed, 291);
});

it.optional('Should return 252 when -252 given', () => {
  const reversed = reverse(-252);

    equal(reversed, 252);
});

it.optional('Should return 71 when 170 given', () => {
  const reversed = reverse(170);

    equal(reversed, 71);
});

it.optional('Should return 605 when 506 given', () => {
  const reversed = reverse(506);

    equal(reversed, 605);
});

it.optional('Should return 835 when -538 given', () => {
  const reversed = reverse(-538);

    equal(reversed, 835);
});

it.optional('Should return 465 when 564 given', () => {
  const reversed = reverse(564);

    equal(reversed, 465);
});

it.optional('Should return 891 when -198 given', () => {
  const reversed = reverse(-198);

    equal(reversed, 891);
});

it.optional('Should return 715 when -517 given', () => {
  const reversed = reverse(-517);

    equal(reversed, 715);
});

it.optional('Should return 601 when -106 given', () => {
  const reversed = reverse(-106);

    equal(reversed, 601);
});

it.optional('Should return 462 when -264 given', () => {
  const reversed = reverse(-264);

    equal(reversed, 462);
});

it.optional('Should return 332 when 233 given', () => {
  const reversed = reverse(233);

    equal(reversed, 332);
});

it.optional('Should return 763 when -367 given', () => {
  const reversed = reverse(-367);

    equal(reversed, 763);
});

it.optional('Should return 25 when 520 given', () => {
  const reversed = reverse(520);

    equal(reversed, 25);
});

it.optional('Should return 822 when 228 given', () => {
  const reversed = reverse(228);

    equal(reversed, 822);
});

it.optional('Should return 231 when -132 given', () => {
  const reversed = reverse(-132);

    equal(reversed, 231);
});

it.optional('Should return 152 when -251 given', () => {
  const reversed = reverse(-251);

    equal(reversed, 152);
});

it.optional('Should return 561 when 165 given', () => {
  const reversed = reverse(165);

    equal(reversed, 561);
});

it.optional('Should return 524 when -425 given', () => {
  const reversed = reverse(-425);

    equal(reversed, 524);
});

it.optional('Should return 535 when 535 given', () => {
  const reversed = reverse(535);

    equal(reversed, 535);
});
