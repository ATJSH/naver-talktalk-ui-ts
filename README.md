# naver-talktalk-ui-ts · <img src="https://img.shields.io/npm/v/naver-talktalk-ui-ts?color=%230080ff" />

NAVER talktalk UI TS ("Nats")는 Typescript를 통해 손쉽게 NAVER 톡톡(talktalk) 챗봇 응답을 만들 수 있도록 도와주는 라이브러리이다.

- [NAVER talktalk 챗봇의 JSON 응답 엘리먼트](https://github.com/navertalk/chatbot-api)들을 Typescript 코드를 통해 챗봇 응답을 쉽게 구현할 수 있다.
- 위 NAVER talktalk 챗봇 엘리먼트들을 선언형 UI 패턴을 통해 컴포넌트를 서로 조합하여, 순수 JSON으로 렌더링할 수 있다.
- 컴포넌트의 응답 스펙을 사용자가 쉽게 수정하거나 정의할 수 있다.
- Facebook에서 개발한 Javascript 라이브러리 React의 컴포넌트, 엘리먼트, 함수형 컴포넌트 등 이미 검증된 개념과 기능을 차용하여 구현하였다.

## 설치

```shell
npm i naver-talktalk-ui-ts
```

## 테스트

```shell
npm test
```

## 예제

```typescript
import { CoreComponent, renderChatElement } from 'naver-talktalk-ui-ts';

const mySkillResponse = CoreComponent.SkillResponse({
  skillTemplate: CoreComponent.SkillTemplate({
    outputs: [
      CoreComponent.Output({
        content: CoreComponent.SimpleText({
          text: '안녕하세요!',
        }),
      }),
      CoreComponent.Output({
        content: CoreComponent.BasicCard({
          title: '카드 타이틀',
          description: '카드 디스크립션',
          thumbnail: CoreComponent.Thumbnail({
            imageUrl: 'www.naver.com/logo.png',
            fixedRatio: true,
            width: 300,
            height: 300,
          }),
          buttons: [
            CoreComponent.Button({
              label: '카드 버튼 1',
              action: 'webLink',
              webLinkUrl: 'www.google.com',
              messageText: '버튼 1이 눌렸습니다.',
              blockId: '999323',
              phoneNumber: '01055798101',
              extra: {
                intent_code: 'button_pressed',
              },
            }),
            CoreComponent.Button({
              label: '카드 버튼 2',
              action: 'webLink',
              webLinkUrl: 'www.google.com',
              messageText: '버튼 2가 눌렸습니다.',
              blockId: '11111172',
              phoneNumber: '01055798101',
              extra: {
                intent_code: 'button_pressed',
              },
            }),
          ],
        }),
      }),
    ],
    quickReplies: [],
  }),
});

console.log(renderChatElement(mySkillResponse));
```