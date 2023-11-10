import React from 'react';

import logoNotFound from '../../images/grim-reaper.svg';
import {
  BoxDescriptionNotFound,
  DescriptionNotFound,
  LinkNavigation,
  LogoNotFound,
  SubtitleNotFound,
  TitleNotFound,
  WrapperNotFound,
} from './styled';

export function NotFound() {
  return (
    <WrapperNotFound>
      <LogoNotFound src={logoNotFound} />
      <BoxDescriptionNotFound>
        <TitleNotFound>Strange, but there is no such page</TitleNotFound>
        <SubtitleNotFound>Why?</SubtitleNotFound>
        <DescriptionNotFound>
          The link may be out of date or have a typo. When the error occurs on your browser side,
          Its code always starts with 4.
        </DescriptionNotFound>
        <SubtitleNotFound>What to do?</SubtitleNotFound>
        <DescriptionNotFound>
          Go to our
          {' '}
          <LinkNavigation to="/">home page</LinkNavigation>
          , which definitely exists, or
          {' '}
          <LinkNavigation to="/">write to us</LinkNavigation>
          {' '}
          - we wil fix everything.
        </DescriptionNotFound>
      </BoxDescriptionNotFound>
    </WrapperNotFound>
  );
}
