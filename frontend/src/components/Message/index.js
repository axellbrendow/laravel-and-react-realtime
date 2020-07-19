import React from "react";

import * as S from "./styles";

export default function Message({ title, body }) {
  return (
    <S.Container key={title + body}>
      <S.Prop>
        <S.PropTitle>title: </S.PropTitle> {title}
      </S.Prop>
      <S.Prop>
        <S.PropTitle>body: </S.PropTitle> {body}
      </S.Prop>
    </S.Container>
  );
}
