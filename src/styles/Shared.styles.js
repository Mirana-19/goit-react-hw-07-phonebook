import styled from 'styled-components';

export const Title = styled.h2`
  margin-top: 30px;
  text-align: center;
`;

export const Button = styled.button`
  --b: 2px; /* border thickness */
  --s: 0.2em; /* size of the corner */
  --c: #060814;

  padding: 5px 20px;
  margin: 20px 0 0 auto;
  color: var(--c);
  --_p: var(--s);
  background: conic-gradient(
      from 90deg at var(--b) var(--b),
      #0000 90deg,
      var(--c) 0
    )
    var(--_p) var(--_p) / calc(100% - var(--b) - 2 * var(--_p))
    calc(100% - var(--b) - 2 * var(--_p));
  transition: 0.3s linear, color 0s, background-color 0s;
  outline: var(--b) solid #0000;
  outline-offset: 0.2em;

  &:hover,
  &:focus-visible {
    --_p: 0px;
    outline-color: var(--c);
    outline-offset: 0.05em;
  }
  &:active {
    background: var(--c);
    color: #fff;
  }
`;
